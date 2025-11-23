import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Shield, Leaf, Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                {t('about.subtitle')}
              </h2>
              <p className="text-xl mb-8 text-white/90">
                {t('about.motto')}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {t('about.intro')}
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Quality */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{t('about.values.quality.title')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t('about.values.quality.description')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {(t('about.values.quality.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <blockquote className="mt-6 border-l-4 border-primary pl-4 text-sm italic">
                      "{t('about.values.quality.quote')}"
                    </blockquote>
                  </CardContent>
                </Card>

                {/* Sustainability */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Leaf className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{t('about.values.sustainability.title')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t('about.values.sustainability.description')}
                    </p>
                    <p className="font-semibold mb-3">{t('about.values.sustainability.principles')}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {(t('about.values.sustainability.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Responsible Sourcing */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{t('about.values.sourcing.title')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      <strong>{t('about.values.sourcing.subtitle')}</strong>
                    </p>
                    <p className="text-sm mb-3">{t('about.values.sourcing.description')}</p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {(t('about.values.sourcing.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Integrity */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{t('about.values.integrity.title')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t('about.values.integrity.description')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {(t('about.values.integrity.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Continuous Improvement */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{t('about.values.improvement.title')}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {t('about.values.improvement.description')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                      {(t('about.values.improvement.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">{t('about.downloads.title')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{t('about.downloads.items.policy')}</h4>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/documents/Alphaweld_Lieferkettenpolitik.pdf" download>
                        {t('about.downloads.download')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{t('about.downloads.items.sourcing')}</h4>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/documents/Alphaweld_Erklaerung_Rohstoffbeschaffung.pdf" download>
                        {t('about.downloads.download')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-elegant hover:shadow-industrial transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold mb-2">{t('about.downloads.items.minerals')}</h4>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/documents/Alphaweld_Bericht_ueber_Konfliktmineralien_2024.pdf" download>
                        {t('about.downloads.download')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  {t('about.downloads.footer')}
                </p>
                <Button asChild>
                  <a href="/contact">{t('common.contact')}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;