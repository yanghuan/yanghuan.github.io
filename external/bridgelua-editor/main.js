$(function () {
    var samples = [
        "Hello World",
        "Fibonacci",
        "TimeoutQueue",
        "Linq"
    ];

    $.each(samples, function (k, v) {
        var path = "./csharp-codes/" + v.replace(" ", "-") + ".cs"
        $.get(path, function (data) {
            var option = $("<option>").text("Sample: " + v).val(data);
            $("#examples").append(option);
        }, "text");
    });

    require.config({
        paths: {
            'vs': './monaco-editor/min/vs'
        }
    });
    require(['vs/editor/editor.main'], start);

    function start() {
        jQuery.support.cors = true;
        var sampleSelect = $("#examples");
        var loading = $("#loading");
        var autoRunTimer = null;

        var csharpEditor = monaco.editor.create(document.getElementById('CSharpEditor'), {
            value: "",
            language: 'csharp'
        });
        csharpEditor.onKeyUp(function () {
            if(autoRunTimer) {
                clearTimeout(autoRunTimer);
                autoRunTimer = null;        
            }
            autoRunTimer = setTimeout(run, 2000);
        });

        var luaEditor = monaco.editor.create(document.getElementById('LuaEditor'), {
            value: "",
            language: 'lua'
        });

        function switchElement() { 
            loading.toggle();
        };

        function run() {
            switchElement();
            $.post("https://webbridgelua.azurewebsites.net/api/Compile", { codes: csharpEditor.getValue() }, function (data) {
                luaEditor.setValue(data);
                switchElement();
            }).error(function (response) {
                console.log(response);
                luaEditor.setValue("An unexpected error ocurred... please try again later.");
                switchElement();
            });
        };

        function setCurSelect() {
            csharpEditor.setValue(sampleSelect.val());
            run();
        };

        setCurSelect();
        sampleSelect.change(function () {
            setCurSelect();
        });
    };
});
