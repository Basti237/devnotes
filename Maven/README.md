# Notizen zu Maven

## Auflistung aller Module (inkl. Submodule) eines Projektes
  * ```mvn org.qunix:structure-maven-plugin:modules```
    * beispielhafte Auflistung:
    ```
modul-parent
|
\__ modul-submodul-parent
:       |
:       |__ modul-submodul-konkret
```

## Einzelnes Modul bauen
  * mvn clean install -pl :<module-name>
    * z.B.  ```mvn clean install -pl :modul-submodul-konkret```

## Ab einem bestimmten Modul bauen
  * mvn clean install -rf :<module-name>
    * z.B.  ```mvn clean install -rf :modul-submodul-konkret```
