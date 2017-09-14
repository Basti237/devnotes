# Internationalisierung in Spring
Um In Spring Anwendungen internationalisierte Ausgaben machen zu können, ist es zunächst notwendig, die folgenden zwei Konfigurationen vorzunehmen (in einer Config-Bean):
```java
@Bean
public LocaleResolver localeResolver() {
    final SessionLocaleResolver resolver = new SessionLocaleResolver();
    resolver.setDefaultLocale(Locale.ENGLISH);
    return resolver;
}

@Bean
public ResourceBundleMessageSource messageSource() {
    final ResourceBundleMessageSource source = new ResourceBundleMessageSource();
    /* Pfad und Name der MessageProperties -> messages.properties */
    source.setBasename("meine/sprachen/messages");
    source.setDefaultEncoding("UTF-8");
    source.setUseCodeAsDefaultMessage(true);
    source.setFallbackToSystemLocale(false);
    return source;
}
```
Dabei wird für die `ResourceBundleMessageSource` festgelegt, dass die Sprachdateien unter `meine/sprachen` zu finden sind, wobei diese den Basisnamen `mesages` aufweisen. Zudem wird festgelegt, dass als Encoding `UTF-8` genutzt werden soll, und die System-Locale nicht als Fallback genutzt werden soll, wenn eine Locale angefragt wird, für welche keine Sprachdatei existiert.
Die Sprachdateien müssen dabei wiefolgt aufgebaut sein: `<Basisname>[_Sprache].properties`. Die Sprachdateie ohne Angabe einer Sprache entspricht dabei dem Default, welcher genutzt wrd, wenn keine Sprachdatei für eine angegebene Locale gefunden werden kann. Im Beispiel liegen folgende Sprachdateien im Ordner `meine/sprachen`:

```javascript
mesages.properties
mesages_de.properties
mesages_en.properties
```

Der Aufbau der Datei entspricht dabei dem normalen Aufbau einer Property-Datei, bestehend aus Key-Value-Paaren. Platzhalter werden dabei durch geschweifte Klammern und einem Index, beginnend bei null, dargestellt. Folgender Ausschnitt zeigt eine beispielhafte message.propertie Datei.

```javascript
my.message.key.with.args: Ein Message- mit einem Platzhalter {0} und einem zweiten {1}
my.normal.message.key=Ein normaler Message-Key
```

Für die Nutzung der lokalisierten Texte ist es zunächst erforderlich die `MessageSource` per `Autowire` einzubinden. Anschließend kann über `MessageSource#getMessage` der entsprechende Message-Key abgerufen werden unter angabe der entsprechenden Locale sowie einem Objekt-Array, welches für die Auflösung der Platzhalter dient. Eine beispielhafte Nutzung im folgenden Codeausschnitt angegeben.

```java
@Autowire
private MessageSource messageSource;

/**
 * Liefert den lokalisierten Text anhand der Locale.
 *
 * @param key Message-Key
 * @param args Argumente für Message-Key
 * @param locale zu nutzende Locale
 * @return lokalisierter String
 */
public String getLocalizedText(final String key, final Object[] args, final Locale locale) {
    messageSource.getMessage(key, args, locale);
}
```
