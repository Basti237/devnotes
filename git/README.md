# Notizen zu git
## Konfiguration
* Nutzername und E-Mail konfigurieren
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
* Proxy definieren (in .gitconfig)
```
# HTTP Proxy
[http]
	proxy = <proxy_host>:<proxy_port>
# HTTPS Proxy
[https]
	proxy = <proxy_host>:<proxy_port>
```
* Shortcuts definieren (in .gitconfig)
```
# Einleiten der Shortcuts
[alias]
# Shortcut ohne Textausgabe
	st    = status
# Shortcut mit Textausgabe
	ste   = !echo = git status && git status
```
* Definition von Farben (in .gitconfig)
```
[color]
  ui = true
[color "diff"]
  #meta = yellow white
  frag = magenta bold
  #old = red bold
  #new = green bold
[color "status"]
  #added = yellow
  changed = red bold
  untracked = yellow
```
## Arbeiten mit eigenem Branch
* Branch auschecken
```
/* Listet die Branches auf (ohne r Option nur die lokalen, mit die remote). */
$ git branch [-r]
-- Checkt den angegebenen Brnach auschecken. */
$ git checkout <branchname>
/* Merged den angegebenen Brnach in den aktuellen. */
$ git merge [brnach]
/* Historie des Brnaches anzeigen. */
$ git log
/* lokalen Branch löschen (mit -D statt -d wird das löschen erzwungen,
 * beispielsweise bei vorhandenen Commits, welche nicht gepusht wurden, notwendig). */
$ git branch -d <brnachname>
/* Löscht den angegebenen remote Branch. */
$ git push origin --delete <branchname>
```
* Status des aktuellen Stands abfragen
```
/* Anzeige von gelöschten, hinzugefügten und geänderten Dateien. */
$ git status
/* Anzeige aller konkreten Änderungen. */
$ git diff
/* Anzeige der konkreten Änderungen einer Dateien. */
$ git diff <file>
```
* Alle Änderungen oder die einer einzelnen Datei verwerfen
```
$ git reset [file]
```
* Commits auf Branch nur am Ende (Merge-Commits nicht zwischendrinn)
```
/* Uncommitede Änderungen stashen. */
$ git stash
/* Aktuellen Stand abholen. */
$ git fetch
/* rebase auf Head des Haupzweiges. */
$ git rebase origin/development
/* Bei Merge-Fehlern, diese lösen und hinzufügen. */
$ git add <file>
/* Rebase weiterführen. */
$ git rebase --continue
/* Uncommittete Änderungen aus Stash holen. */
$ git stash pop
/* git push mit force, um Branchhistorie neu zu schreiben. */
$ git push --force
```
* Commit erstellen
```
/* Hizufügen zu Commit (* fügt alle Änderungen hinzu). */
$ git add [file]
/* Entfernt hinzugefügte datei wieder. */
$ git remove [file]
/* Commit erstellen. */
$ git commit -m "[Beschreibung]"
```
* Änderungen von remote abrufen und aktualisieren
```
/* Äanderungen abrufen. */
$ git pull
/* Lokale Änderungen an Remote senden. */
$ git push
```
