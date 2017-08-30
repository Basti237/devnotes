# Notizen zu Maven

## Auflistung aller Module (inkl. Submodule) eines Projektes
  * mvn org.qunix:structure-maven-plugin:modules

## Einzelnes Modul bauen
  * mvn clean install -pl :<module-name>
    * z.B.  mvn clean install -pl :platform-artifact-userapi
