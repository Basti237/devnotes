# Notizen fpr die Nutzung der Konsole
## CygWin
 * Einrichten von Shortcuts
  * `<CYGWIN_HOME>\home\<USER>\.bashrc` mit einem Editor öffnen
	* `alias build='mvn clean install -Pnotest'` legt einen für ein Maven Build ohne Testausführung an. Auf der Komandozeile muss dann lediglich `build` eingegeben werden.
	* `alias cdMein='cd C:/Develop/Projekte/MeinProjekt'` Shortcut für ein Verzeichniswechsel. Mit Eingabe von `cdMein` wird auf das entsprechende Verzeichnis in der Konsole gewechselt.
	
## ConEmu
 * Download und Installation
  * Download unter https://conemu.github.io/
  * Einfach installieren :-)
 * Cygwin als Konsole nutzen
  * ConEmu starten
  * Unter 'Settings...' - 'Startup' - 'Specified named task' folgendes auswählen:
    * '{Bash::CygWin bash}'
  * Nun öffnet sich jedes Konsolenfenster als CygWin Konsole
