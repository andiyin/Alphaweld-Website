import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";

const Impressum = () => {
  return (
    <Layout>
      <PageHeader breadcrumb={[{ label: "Impressum" }]} title="Impressum" />

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          {/* Company facts */}
          <aside className="md:col-span-4 lg:col-span-3">
            <dl className="border-t border-ink text-[0.9375rem] md:sticky md:top-[calc(var(--header-h)+2rem)]">
              <div className="border-b border-line py-5">
                <dt className="eyebrow text-ink/50">Persönlich haftend:</dt>
                <dd className="mt-3 leading-relaxed text-ink">
                  ALPHAWELD GmbH
                  <br />
                  Geisweider Str. 130
                  <br />
                  D-57078 Siegen
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="eyebrow text-ink/50">Geschäftsführer:</dt>
                <dd className="mt-3 text-ink">Jianhua Yin</dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="eyebrow text-ink/50">Kontakt</dt>
                <dd className="mt-3 space-y-1 text-ink/80">
                  <p><span className="text-ink">Tel.:</span> + 49 (0) 271 317897-0</p>
                  <p><span className="text-ink">Fax:</span> + 49 (0) 271 317897-29</p>
                  <p>
                    <span className="text-ink">E-Mail:</span>{" "}
                    <a href="mailto:info@alphaweld.de" className="link-draw text-ink">info@alphaweld.de</a>
                  </p>
                </dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="eyebrow text-ink/50">Steuernummer</dt>
                <dd className="mt-3 text-ink/80">Ust.-ID-Nr.: DE 815056755</dd>
              </div>
              <div className="border-b border-line py-5">
                <dt className="eyebrow text-ink/50">Gerichtsbarkeit</dt>
                <dd className="mt-3 text-ink/80">Amtsgericht Siegen, HRB 8760</dd>
              </div>
            </dl>
          </aside>

          {/* Statements */}
          <div className="legal md:col-span-8 lg:col-span-7 lg:col-start-6">
            <h2>Haftungsausschluss:</h2>
            <p>
              Wir prüfen und aktualisieren die Informationen auf unseren Webseiten regelmäßig. Gleichwohl können sich von
              uns nicht bemerkte Veränderungen ergeben. Wir übernehmen deshalb keine Haftung oder Garantie für die
              Aktualität, Richtigkeit und Vollständigkeit der von uns zur Verfügung gestellten Informationen. Gleiches gilt
              auch für alle anderen Webseiten, auf die wir mittels Hyperlink verweisen. Wir sind für den Inhalt solcher
              Seiten, die aufgrund einer von uns gesetzten Verbindung erreicht werden können, nicht verantwortlich. Wir
              behalten uns außerdem das Recht vor, die bereitgestellten Informationen zu ändern oder zu ergänzen.
            </p>

            <h2>Copyright:</h2>
            <p>
              Inhalt und Struktur unserer Webseiten sind urheberrechtlich geschützt. Die Vervielfältigung von Informationen
              oder Daten, insbesondere die Verwendung von Texten, auch nur auszugsweise, oder Bildern bedarf unserer
              vorherigen Zustimmung.
            </p>

            <h2>Google-Analytics:</h2>
            <p>
              Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google") Google Analytics
              verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der
              Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung
              diese Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort
              gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über
              die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der
              Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an
              Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google
              verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
              können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir
              weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
              voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
              Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck
              einverstanden.
            </p>

            <h2>Deaktivierung von Google Analytics:</h2>
            <p>
              Mit dem Browser-Add-on zur Deaktivierung von Google Analytics haben Sie mehr Kontrolle darüber, welche Daten zu
              aufgerufenen Websites von Google Analytics erfasst werden. Es ist für Internet Explorer (7 und 8), Mozilla
              Firefox (3.5 und höher) und Google Chrome (4.x und höher) verfügbar.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
