import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Impressum = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
              
              <div className="prose prose-lg max-w-none text-foreground space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">Persönlich haftend:</h2>
                  <p>
                    ALPHAWELD GmbH<br />
                    Geisweider Str. 130<br />
                    D-57078 Siegen
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Geschäftsführer:</h2>
                  <p>Jianhua Yin</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Haftungsausschluss:</h2>
                  <p>
                    Wir prüfen und aktualisieren die Informationen auf unseren Webseiten regelmäßig. 
                    Gleichwohl können sich von uns nicht bemerkte Veränderungen ergeben. Wir übernehmen 
                    deshalb keine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit 
                    der von uns zur Verfügung gestellten Informationen. Gleiches gilt auch für alle anderen 
                    Webseiten, auf die wir mittels Hyperlink verweisen. Wir sind für den Inhalt solcher 
                    Seiten, die aufgrund einer von uns gesetzten Verbindung erreicht werden können, nicht 
                    verantwortlich. Wir behalten uns außerdem das Recht vor, die bereitgestellten 
                    Informationen zu ändern oder zu ergänzen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Copyright:</h2>
                  <p>
                    Inhalt und Struktur unserer Webseiten sind urheberrechtlich geschützt. Die Vervielfältigung 
                    von Informationen oder Daten, insbesondere die Verwendung von Texten, auch nur auszugsweise, 
                    oder Bildern bedarf unserer vorherigen Zustimmung.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Google-Analytics:</h2>
                  <p>
                    Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google") 
                    Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert 
                    werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den 
                    Cookie erzeugten Informationen über Ihre Benutzung diese Website (einschließlich Ihrer 
                    IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. 
                    Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um 
                    Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um 
                    weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu 
                    erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, 
                    sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von 
                    Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der 
                    Google in Verbindung bringen. Sie können die Installation der Cookies durch eine 
                    entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch 
                    darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser 
                    Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie 
                    sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor 
                    beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-3">Deaktivierung von Google Analytics:</h2>
                  <p>
                    Mit dem Browser-Add-on zur Deaktivierung von Google Analytics haben Sie mehr Kontrolle 
                    darüber, welche Daten zu aufgerufenen Websites von Google Analytics erfasst werden. 
                    Es ist für Internet Explorer (7 und 8), Mozilla Firefox (3.5 und höher) und Google 
                    Chrome (4.x und höher) verfügbar.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 bg-card border-border sticky top-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">Kontakt</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p><strong>Tel.:</strong> + 49 (0) 271 317897-0</p>
                    <p><strong>Fax:</strong> + 49 (0) 271 317897-29</p>
                    <p><strong>E-Mail:</strong> info@alphaweld.de</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-2">Steuernummer</h3>
                    <p>Ust.-ID-Nr.: DE 815056755</p>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-semibold text-foreground mb-2">Gerichtsbarkeit</h3>
                    <p>Amtsgericht Siegen, HRB 8760</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;