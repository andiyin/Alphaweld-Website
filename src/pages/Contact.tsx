import { useState } from "react";
import Layout from "@/components/Layout";
import GoogleMaps from "@/components/GoogleMaps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomDropdown from "@/components/ui/custom-dropdown";
import { Phone, Mail, MapPin, Clock, Printer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    street: "",
    houseNumber: "",
    country: "",
    email: "",
    zip: "",
    city: "",
    message: "",
    type: "support" // Set default to "Technischer Support"
  });

  // Dropdown options for contact type
  const contactTypeOptions = [
    { value: "anfrage", label: t('contact.form.types.general') },
    { value: "support", label: t('contact.form.types.support') },
    { value: "vertrieb", label: t('contact.form.types.sales') },
  ];
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.form.messageSent'),
      description: t('contact.form.messageDescription'),
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      houseNumber: "",
      country: "",
      email: "",
      zip: "",
      city: "",
      message: "",
      type: "support"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        {/* Hero Section */}
        <section className="bg-gradient-secondary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h1>
              <p className="text-lg text-white/90">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">{t('contact.form.title')}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t('contact.form.subtitle')}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Contact Type */}
                    <div>
                      <Label htmlFor="type">{t('contact.form.typeRequired')}</Label>
                      <CustomDropdown
                        options={contactTypeOptions}
                        value={formData.type}
                        onValueChange={(value) => handleInputChange("type", value)}
                        placeholder={t('contact.form.selectPlaceholder')}
                        required
                      />
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">{t('contact.form.firstNameRequired')}</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{t('contact.form.lastNameRequired')}</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <Label htmlFor="company">{t('contact.form.company')}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <Label htmlFor="street">{t('contact.form.address')}</Label>
                      <Input
                        id="street"
                        placeholder={t('contact.form.addressPlaceholder')}
                        value={`${formData.street} ${formData.houseNumber}, ${formData.zip} ${formData.city}, ${formData.country}`.trim().replace(/^,\s*|,\s*$/g, '')}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Simple parsing - in a real app you'd want more sophisticated parsing
                          const parts = value.split(',');
                          if (parts.length >= 3) {
                            const streetParts = parts[0].trim().split(' ');
                            const street = streetParts.slice(0, -1).join(' ');
                            const houseNumber = streetParts[streetParts.length - 1] || '';
                            const zip = parts[1].trim().split(' ')[0] || '';
                            const city = parts[1].trim().split(' ').slice(1).join(' ') || '';
                            const country = parts[2].trim() || '';
                            
                            handleInputChange("street", street);
                            handleInputChange("houseNumber", houseNumber);
                            handleInputChange("zip", zip);
                            handleInputChange("city", city);
                            handleInputChange("country", country);
                          } else {
                            handleInputChange("street", value);
                          }
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email">{t('contact.form.emailRequired')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>


                    {/* Message */}
                    <div>
                      <Label htmlFor="message">{t('contact.form.messageRequired')}</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button type="submit" className="w-full">
                        {t('contact.form.send')}
                      </Button>
                      <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                          {t('contact.form.spamProtection')}
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right side: Container for Map + Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Google Maps */}
              <div>
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      {t('contact.location.title')}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{t('contact.location.subtitle')}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <GoogleMaps 
                      address="Geisweider Str. 130, 57078 Siegen, Deutschland"
                      className="w-full"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Cards */}
              <div className="grid grid-cols-1 gap-4">
                
                {/* Address Card */}
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      {t('contact.location.address')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">Alphaweld GmbH</p>
                      <p className="text-sm text-muted-foreground">Geisweider Str. 130</p>
                      <p className="text-sm text-muted-foreground">D-57078 Siegen</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2 w-full text-xs"
                        asChild
                      >
                        <a 
                          href="https://www.google.com/maps/search/?api=1&query=Geisweider+Str.+130%2C+57078+Siegen%2C+Deutschland"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="h-3 w-3 mr-1" />
                          {t('contact.location.openMaps')}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Details */}
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      {t('contact.details.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs">{t('contact.details.phone')}</p>
                        <a href="tel:+4927131789770" className="text-primary hover:underline text-xs">
                          +49 (0)271 317897-0
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Printer className="h-3 w-3 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs">{t('contact.details.fax')}</p>
                        <p className="text-xs text-muted-foreground">+49 (0)271 317897-29</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-xs">{t('contact.details.email')}</p>
                        <a href="mailto:welding@alphaweld.de" className="text-primary hover:underline text-xs">
                          welding@alphaweld.de
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base font-semibold">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      {t('contact.hours.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{t('contact.hours.weekdays')}</span>
                        <span className="font-semibold text-xs">{t('contact.hours.time')}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Hotline - Full Width */}
                <Card className="shadow-elegant border-0 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className="p-2 bg-primary/20 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-primary text-lg">{t('contact.hotline.title')}</h3>
                    </div>
                    <p className="text-2xl font-bold mb-1 text-foreground">+49 (0)271 317897-0</p>
                    <p className="text-sm text-muted-foreground">{t('contact.hotline.time')}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Additional Info Section */}
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">{t('contact.why.title')}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {(t('contact.why.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-elegant border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">{t('contact.response.title')}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{t('contact.response.description')}</p>
                    <p>{t('contact.response.urgent')}</p>
                    <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                      <p className="text-primary font-semibold text-sm">{t('contact.response.emergency')}</p>
                      <p className="text-xs text-muted-foreground">{t('contact.response.emergencyDesc')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;