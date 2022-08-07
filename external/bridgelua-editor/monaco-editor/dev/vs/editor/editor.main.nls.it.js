/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.7.3(14ab24ad53d8d969e86bae0096ecc3b954d0faa0)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.it", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (nuova occorrenza)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Usa espressione regolare",
		"Parola intera",
		"Maiuscole/minuscole",
		"input",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Errore: {0}",
		"Avviso: {0}",
		"Info: {0}",
	],
	"vs/base/common/keybinding": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, selezione",
		"selezione",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Selezione rapida. Digitare per ridurre il numero di risultati.",
		"Selezione rapida",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Comprimi",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controlla la famiglia di caratteri.",
		"Controlla lo spessore del carattere.",
		"Controlla le dimensioni del carattere in pixel.",
		"Controlla l\'altezza della riga. Usare 0 per calcolare l\'altezza della riga dalle dimensioni del carattere.",
		"Controlla la visibilità dei numeri di riga",
		"Colonne in corrispondenza delle quali visualizzare i righelli verticali",
		"Caratteri che verranno usati come separatori di parola quando si eseguono operazioni o spostamenti correlati a parole",
		"Numero di spazi a cui equivale una tabulazione. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.",
		"È previsto \'number\'. Nota: il valore \"auto\" è stato sostituito dall\'impostazione `editor.detectIndentation`.",
		"Inserisce spazi quando viene premuto TAB. Quando `editor.detectIndentation` è attivo, questa impostazione viene sostituita in base al contenuto del file.",
		"È previsto \'boolean\'. Nota: il valore \"auto\" è stato sostituito dall\'impostazione `editor.detectIndentation`.",
		"All\'apertura di un file, `editor.tabSize` e `editor.insertSpaces` verranno rilevati in base al contenuto del file.",
		"Controlla se gli angoli delle selezioni sono arrotondati",
		"Controlla se l\'editor scorrerà oltre l\'ultima riga",
		"Controlla il numero di caratteri dopo i quali l\'editor attiverà l\'a capo automatico alla riga successiva. Se è impostato su 0, verrà attivato l\'a capo automatico in base alla larghezza del viewport (ritorno a capo automatico). Se è impostato su -1, forzerà l\'editor a non eseguire mai il wrapping.",
		"Controlla se le righe devono andare a capo. Le righe andranno a capo alla posizione definita da min(editor.wrappingColumn, viewportWidthInColumns).",
		"Controlla il rientro delle righe con ritorno a capo. Può essere uno dei valori seguenti: \'none\', \'same\' o \'indent\'.",
		"Moltiplicatore da usare sui valori `deltaX` e `deltaY` degli eventi di scorrimento della rotellina del mouse",
		"Controlla se durante la digitazione verranno o meno visualizzati i suggerimenti rapidi",
		"Controlla il ritardo in ms dopo il quale verranno visualizzati i suggerimenti rapidi",
		"Abilita i suggerimenti per i parametri",
		"Controlla se l\'editor deve chiudere automaticamente le parentesi quadre dopo che sono state aperte",
		"Controlla se l\'editor deve formattare automaticamente la riga dopo la digitazione",
		"Controlla se i suggerimenti devono essere visualizzati automaticamente durante la digitazione dei caratteri trigger",
		"Controlla se i suggerimenti devono essere accettati con \'INVIO\' in aggiunta a \'TAB\'. Consente di evitare ambiguità tra l\'inserimento di nuove righe e l\'accettazione di suggerimenti.",
		"Controlla se i frammenti di codice sono visualizzati con altri suggerimenti e il modo in cui sono ordinati.",
		"Abilita i suggerimenti basati su parole.",
		"Inserisce frammenti di codice quando il prefisso corrisponde. Funziona in modo ottimale quando non sono abilitati i suggerimenti rapidi.",
		"Controlla se l\'editor deve evidenziare gli elementi corrispondenti simili alla selezione",
		"Controlla il numero di effetti che possono essere visualizzati nella stessa posizione nel righello delle annotazioni",
		"Controlla lo stile di animazione del cursore. I valori possibili sono: \'blink\', \'smooth\', \'phase\', \'expand\' e \'solid\'",
		"Ingrandisce il carattere dell\'editor quando si usa la rotellina del mouse e si tiene premuto CTRL",
		"Controlla lo stile del cursore. I valori accettati sono \'block\', \'line\' e \'underline\'",
		"Abilita i caratteri legatura",
		"Controlla se il cursore deve essere nascosto nel righello delle annotazioni.",
		"Consente di controllare in che modo l\'editor deve eseguire il rendering dei caratteri di spazio vuoto. Le opzioni possibili sono: \'none\', \'boundary\' e \'all\'. Con l\'opzione \'boundary\' non viene eseguito il rendering di singoli spazi tra le parole.",
		"Controlla se l\'editor deve eseguire il rendering dei caratteri di controllo",
		"Controlla se l\'editor deve eseguire il rendering delle guide con rientro",
		"Controlla se l\'editor deve eseguire il rendering dell\'evidenziazione riga corrente",
		"Controlla se nell\'editor sono visualizzate le finestre di CodeLens",
		"Controlla se per l\'editor è abilitata la riduzione del codice",
		"Inserimento ed eliminazione dello spazio vuoto dopo le tabulazioni",
		"Rimuovi lo spazio vuoto finale inserito automaticamente",
		"Mantiene aperte le anteprime editor anche quando si fa doppio clic sul contenuto o si preme ESC.",
		"Controlla se l\'editor diff mostra le differenze affiancate o incorporate",
		"Controlla se l\'editor diff mostra come differenze le modifiche relative a spazi vuoti iniziali e finali",
		"Controlla se gli appunti primari di Linux devono essere supportati.",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenuto editor",
	],
	"vs/editor/common/controller/cursor": [
		"Eccezione imprevista durante l\'esecuzione del comando.",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"Si è verificato un errore della modalità durante la suddivisione in token dell\'input.",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Testo normale",
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}, {1}",
	],
	"vs/editor/common/services/bulkEdit": [
		"Nel frattempo questi file sono stati modificati: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Dichiarazioni del linguaggio per contributes.",
		"ID del linguaggio.",
		"Alias di nome per il linguaggio.",
		"Estensioni di file associate al linguaggio.",
		"Nomi file associati al linguaggio.",
		"Criteri GLOB dei nomi file associati al linguaggio.",
		"Tipi MIME associati al linguaggio.",
		"Espressione regolare corrispondente alla prima riga di un file del linguaggio.",
		"Percorso relativo di un file che contiene le opzioni di configurazione per il linguaggio.",
		"Il valore di `contributes.{0}` è vuoto",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`",
		"Il valore di `contributes.{0}` non è valido. È prevista una matrice.",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}] {1}",
		"Aggiornare le impostazioni: `editor.detectIndentation` sostituisce `editor.tabSize`: \"auto\" o `editor.insertSpaces`: \"auto\"",
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"Sposta il punto di inserimento a sinistra",
		"Sposta il punto di inserimento a destra",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Taglia",
		"Copia",
		"Incolla",
	],
	"vs/editor/contrib/comment/common/comment": [
		"Attiva/Disattiva commento per la riga",
		"Aggiungi commento per la riga",
		"Rimuovi commento per la riga",
		"Attiva/Disattiva commento per il blocco",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Mostra il menu di scelta rapida editor",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Trova",
		"Trova",
		"Risultato precedente",
		"Risultato successivo",
		"Trova nella selezione",
		"Chiudi",
		"Sostituisci",
		"Sostituisci",
		"Sostituisci",
		"Sostituisci tutto",
		"Attiva/Disattiva modalità sostituzione",
		"Vengono evidenziati solo i primi 999 risultati, ma tutte le operazioni di ricerca funzionano sull\'intero testo.",
		"{0} di {1}",
		"Nessun risultato",
	],
	"vs/editor/contrib/find/common/findController": [
		"Trova",
		"Trova successivo",
		"Trova precedente",
		"Trova selezione successiva",
		"Trova selezione precedente",
		"Sostituisci",
		"Aggiungi selezione a risultato ricerca successivo",
		"Aggiungi selezione a risultato ricerca precedente",
		"Sposta ultima selezione a risultato ricerca successivo",
		"Sposta ultima selezione a risultato ricerca precedente",
		"Seleziona tutte le occorrenze del risultato ricerca",
		"Cambia tutte le occorrenze",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Espandi",
		"Espandi in modo ricorsivo",
		"Riduci",
		"Riduci in modo ricorsivo",
		"Riduci tutto",
		"Espandi tutto",
		"Livello riduzione 1",
		"Livello riduzione 2",
		"Livello riduzione 3",
		"Livello riduzione 4",
		"Livello riduzione 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Formatta codice",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" - Definizioni di {0}",
		"Vai alla definizione",
		"Apri definizione lateralmente",
		"Visualizza la definizione",
		"Fare clic per visualizzare le {0} definizioni trovate.",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Correzioni suggerite: ",
		"Correzione suggerita: ",
		"({0}/{1})",
		"Vai a errore o avviso successivo",
		"Vai a errore o avviso precedente",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Visualizza passaggio del mouse",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Caricamento...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Sostituisci con il valore precedente",
		"Sostituisci con il valore successivo",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Converti rientro in spazi",
		"Converti rientro in tabulazioni",
		"Dimensione tabulazione configurata",
		"Seleziona dimensione tabulazione per il file corrente",
		"Imposta rientro con tabulazioni",
		"Imposta rientro con spazi",
		"Rileva rientro dal contenuto",
		"Attiva/Disattiva rendering spazi vuoti",
		"Attiva/Disattiva caratteri di controllo",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copia la riga in alto",
		"Copia la riga in basso",
		"Sposta la riga in alto",
		"Sposta la riga in basso",
		"Ordinamento righe crescente",
		"Ordinamento righe decrescente",
		"Taglia spazio vuoto finale",
		"Elimina la riga",
		"Imposta un rientro per la riga",
		"Riduci il rientro per la riga",
		"Inserisci la riga sopra",
		"Inserisci la riga sotto",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + clic per seguire il collegamento",
		"CTRL + clic per seguire il collegamento",
		"Non è stato possibile aprire questo collegamento perché il formato non è valido: {0}",
		"Non è stato possibile aprire questo collegamento perché manca la destinazione.",
		"Apri il collegamento",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Aggiungi cursore sopra",
		"Aggiungi cursore sotto",
		"Crea più cursori dalle righe selezionate",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Attiva i suggerimenti per i parametri",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, suggerimento",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Correzione rapida",
	],
	"vs/editor/contrib/quickFix/browser/quickFixWidget": [
		"{0}, accepted",
		"Loading...",
		"No fix suggestions.",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Vai alla riga {0} e alla colonna {1}",
		"Vai alla riga {0}",
		"Digitare un numero di riga compreso tra 1 e {0} per passare a",
		"Digitare un numero di colonna compreso tra 1 e {0} per passare a",
		"Go to line {0}",
		"Digitare un numero di riga, seguito da due punti facoltativi e da un numero di colonna per passare a",
		"Vai alla riga...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Digitare il nome di un\'azione da eseguire",
		"Tavolozza comandi",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Digitare il nome di un identificatore a cui passare",
		"Vai al simbolo...",
		"simboli ({0})",
		"moduli ({0})",
		"classi ({0})",
		"interfacce ({0})",
		"metodi ({0})",
		"funzioni ({0})",
		"proprietà ({0})",
		"variabili ({0})",
		"variabili ({0})",
		"costruttori ({0})",
		"chiamate ({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" - Riferimenti di {0}",
		"Trova tutti i riferimenti",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Caricamento...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Non è stato possibile risolvere il file.",
		"{0} riferimenti",
		"{0} riferimento",
		"anteprima non disponibile",
		"Riferimenti",
		"Nessun risultato",
		"Riferimenti",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"L\'esecuzione dell\'operazione di ridenominazione non è riuscita.",
		"Rinomina simbolo",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Consente di rinominare l\'input. Digitare il nuovo nome e premere INVIO per eseguire il commit.",
	],
	"vs/editor/contrib/rename/common/rename": [
		"Nessun risultato.",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Vai alla parentesi quadra",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Espandi SELECT",
		"Comprimi SELECT",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Attiva suggerimento",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Altre informazioni...{0}",
		"{0}, suggerimento, con dettagli",
		"{0}, suggerimento",
		"Indietro",
		"Caricamento...",
		"Non ci sono suggerimenti.",
		"{0}, accettato",
		"{0}, suggerimento, con dettagli",
		"{0}, suggerimento",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Attiva/Disattiva l\'uso del tasto TAB per impostare lo stato attivo",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"Visualizza: Attiva/Disattiva ritorno a capo automatico",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Chiudi",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Impostazioni di configurazione di contributes.",
		"Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.",
		"Descrizione delle proprietà di configurazione.",
		"se impostato, \'configuration.type\' deve essere impostato su \'object",
		"\'configuration.title\' deve essere una stringa",
		"\'configuration.properties\' deve essere un oggetto",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: la dipendenza `{0}` è sconosciuta.",
		"L\'attivazione dell\'estensione `{1}` non è riuscita. Motivo: non è stato possibile attivare la dipendenza `{0}`.",
		"L\'attivazione dell\'estensione `{0}` non è riuscita. Motivo: sono presenti più di 10 livelli di dipendenze (molto probabilmente un ciclo di dipendenze).",
		"L\'attivazione dell\'estensione `{0}` non è riuscita: {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"La descrizione dell\'estensione restituita è vuota",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `object`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string`",
		"Valore previsto di `main` ({0}) da includere nella cartella dell\'estensione ({1}). L\'estensione potrebbe non essere più portatile.",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Editore dell\'estensione Visual Studio Code.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Dipendenze ad altre estensioni. L\'identificatore di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Altri comandi disponibili: ",
		"È stato premuto ({0}). In attesa del secondo tasto...",
		"La combinazione di tasti ({0}, {1}) non è un comando.",
	],
	"vs/platform/message/common/message": [
		"Chiudi",
		"In seguito",
		"Annulla",
	]
});