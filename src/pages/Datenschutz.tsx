import Layout from "@/components/Layout";

const Datenschutz = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Datenschutz</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                Datenschutzhinweise
              </h2>
              <p className="text-xl text-white/90">
                Diese Datenschutz-Information gilt für die Datenverarbeitung auf der Webseite www.alphaweld.de
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              
              <h2 className="text-2xl font-bold mb-6 text-foreground">Verantwortlicher</h2>
              <div className="mb-8">
                <p className="font-semibold">Alphaweld GmbH</p>
                <p>Geisweider Str. 130</p>
                <p>D-57078 Siegen</p>
                <p><strong>Geschäftsführer:</strong> Herr Jianhua Yin</p>
                <p><strong>Tel.:</strong> +49 271 317897-0</p>
                <p><strong>Fax:</strong> +49 271 317897-29</p>
                <p><strong>E-Mail:</strong> info@alphaweld.de</p>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">Beim Besuch der Website</h3>
              <p className="mb-4">
                Beim Aufrufen unserer Website info@alphaweld.de werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung, in der Regel nach Ablauf einer Woche, gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
              </ul>
              <p className="mb-4">
                Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
                <li>Aufklärung etwaiger missbräuchlicher Seitenzugriffe (DoS/DDoS-Attacken o.ä.)</li>
                <li>zu weiteren administrativen Zwecken</li>
              </ul>
              <p className="mb-4">
                Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DS-GVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In der Regel verwenden wir die erhobenen Daten nicht zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen. Dies behalten wir uns allenfalls für den Fall vor, dass dies erforderlich wird, um missbräuchliche Seitenzugriffe aufzuklären.
              </p>
              <p className="mb-8">
                Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste ein (dazu siehe Cookies und Analyse-Tools)
              </p>

              <h3 className="text-xl font-semibold mb-4 text-foreground">Bei Nutzung unseres Kontaktformulars</h3>
              <p className="mb-4">
                Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.
              </p>
              <p className="mb-4">
                Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DS-GVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.
              </p>
              <p className="mb-8">
                Die für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Weitergabe von Daten</h2>
              <p className="mb-4">
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-8">
                <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DS-GVO ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DS-GVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben</li>
                <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DS-GVO eine gesetzliche Verpflichtung besteht</li>
                <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DS-GVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist</li>
              </ul>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Cookies</h2>
              <p className="mb-4">
                Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.
              </p>
              <p className="mb-4">
                Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht.
              </p>
              <p className="mb-4">
                Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal eingeben zu müssen.
              </p>
              <p className="mb-4">
                Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe Analyse-Tools). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht.
              </p>
              <p className="mb-4">
                Cookies setzen wir ausschließlich ein, wenn Sie uns eine entsprechende Einwilligung hierzu erteilt haben, Art. 6 Abs. 1 lit. a DS-GVO. In diesem Falle verarbeiteten wir die darüber erhobenen Daten zu den oben genannten Zwecken.
              </p>
              <p className="mb-8">
                Sie können Ihren Browser so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Analyse-Tools</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">Tracking-Tools</h3>
              <p className="mb-8">
                Die im Folgenden aufgeführten und von uns eingesetzten Tracking-Maßnahmen werden ausschließlich nach Ihrer hierzu erteilten Einwilligung auf Grundlage des Art. 6 Abs. 1 S. 1 lit. a DS-GVO durchgeführt. Mit den daraufhin zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Die jeweiligen Datenverarbeitungszwecke und Datenkategorien sind aus den Hinweistexten zu den entsprechenden Tracking-Tools zu entnehmen.
              </p>

              <h3 className="text-xl font-semibold mb-4 text-foreground">Google Analytics</h3>
              <p className="mb-4">
                Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden Optimierung unserer Seiten nutzen wir Google Analytics, ein Webanalysedienst der Google Inc. (https://www.google.de/intl/de/about/) (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; im Folgenden „Google"). Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Verarbeitungen führen wir ausschließlich auf der Grundlage Ihrer uns zuvor erteilten Einwilligung durch (dazu s.o. unter Cookies)
              </p>
              <p className="mb-4">
                Google Analytics erstellt für uns pseudonymisierte Nutzungsprofile. Die durch den Google Analytics-Cookie erzeugten Informationen über Ihre Benutzung dieser Website wie
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Browser-Typ/-Version</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer-URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p className="mb-4">
                werden an einen Server von Google in den USA übertragen und dort gespeichert. Die Informationen werden verwendet, um die Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu Zwecken der Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten zu erbringen. Auch werden diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google zusammengeführt. Die IP-Adressen werden anonymisiert, so dass eine Zuordnung nicht möglich ist (IP-Masking).
              </p>
              <p className="mb-4">
                Sie können die Installation der Cookies durch eine entsprechende Einstellung der Browser-Software auch nach einer zuvor erteilten Einwilligung jederzeit wieder unterbinden; wir weisen jedoch darauf hin, dass in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich genutzt werden können.
              </p>
              <p className="mb-4">
                Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) sowie die Verarbeitung dieser Daten durch Google unterbinden, indem Sie ein Browser-Add-on herunterladen und installieren (https://tools.google.com/dlpage/gaoptout?hl=de).
              </p>
              <p className="mb-4">
                Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen Endgeräten, können Sie die Erfassung durch Google Analytics zudem unterbinden, indem Sie auf diesen Link (https://support.google.com/analytics/answer/6004245?hl=de) klicken. Es wird ein Opt-out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur in diesem Browser und nur für unsere Website und wird auf Ihrem Gerät abgelegt. Löschen Sie die Cookies in diesem Browser, müssen Sie das Opt-out-Cookie erneut setzen.
              </p>
              <p className="mb-4">
                Weitere Informationen zum Datenschutz im Zusammenhang mit Google Analytics finden Sie etwa in der Google Analytics-Hilfe (https://support.google.com/analytics/answer/6004245?hl=de).
              </p>
              <p className="mb-8">
                Google hat sich dem EU-US Privacy Shield unterworfen, https://www.privacyshield.gov/EU-US-Framework.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Betroffenenrechte</h2>
              <p className="mb-4">Sie haben das Recht:</p>
              <ul className="list-disc list-inside space-y-4 mb-6">
                <li>
                  <strong>gemäß Art. 15 DS-GVO</strong> Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;
                </li>
                <li>
                  <strong>gemäß Art. 16 DS-GVO</strong> unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
                </li>
                <li>
                  <strong>gemäß Art. 17 DS-GVO</strong> die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;
                </li>
                <li>
                  <strong>gemäß Art. 18 DS-GVO</strong> die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DS-GVO Widerspruch gegen die Verarbeitung eingelegt haben;
                </li>
                <li>
                  <strong>gemäß Art. 20 DS-GVO</strong> Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;
                </li>
                <li>
                  <strong>gemäß Art. 7 Abs. 3 DS-GVO</strong> Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen;
                </li>
                <li>
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DS-GVO verarbeitet werden, <strong>gemäß Art. 21 DS-GVO</strong> Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.
                </li>
              </ul>
              <p className="mb-4">
                Darüber hinaus haben Sie ein allgemeines Beschwerderecht bei der für Sie zuständigen Datenschutzaufsichtsbehörde. Die für uns zuständige Behörde ist die „Landesbeauftragte für den Datenschutz Nordrhein-Westfalen".
              </p>
              <p className="mb-8">
                Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an info@alphaweld.de
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Datensicherheit</h2>
              <p className="mb-4">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
              </p>
              <p className="mb-8">
                Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Datenschutz bei Bewerbungen und im Bewerbungsverfahren</h2>
              <p className="mb-4">
                Der für die Verarbeitung Verantwortliche erhebt und verarbeitet die personenbezogenen Daten von Bewerbern zum Zwecke der Abwicklung des Bewerbungsverfahrens. Die Verarbeitung kann auch auf elektronischem Wege erfolgen. Dies ist insbesondere dann der Fall, wenn ein Bewerber entsprechende Bewerbungsunterlagen auf dem elektronischen Wege, beispielsweise per E-Mail oder über ein auf der Internetseite befindliches Webformular, an den für die Verarbeitung Verantwortlichen übermittelt.
              </p>
              <p className="mb-4">
                Schließt der für die Verarbeitung Verantwortliche einen Anstellungsvertrag mit einem Bewerber, werden die übermittelten Daten zum Zwecke der Abwicklung des Beschäftigungsverhältnisses unter Beachtung der gesetzlichen Vorschriften gespeichert.
              </p>
              <p className="mb-8">
                Wird von dem für die Verarbeitung Verantwortlichen kein Anstellungsvertrag mit dem Bewerber geschlossen, so werden die Bewerbungsunterlagen zwei Monate nach Bekanntgabe der Absageentscheidung automatisch gelöscht, sofern einer Löschung keine sonstigen berechtigten Interessen des für die Verarbeitung Verantwortlichen entgegenstehen. Sonstiges berechtigtes Interesse in diesem Sinne ist beispielsweise eine Beweispflicht in einem Verfahren nach dem Allgemeinen Gleichbehandlungsgesetz (AGG).
              </p>

              <h2 className="text-2xl font-bold mb-6 text-foreground">Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="font-semibold mb-4">Stand: Mai 2018</p>
              <p className="mb-8">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Datenschutz;