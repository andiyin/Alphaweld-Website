import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import GoogleMaps from "@/components/GoogleMaps";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CustomDropdown from "@/components/ui/custom-dropdown";
import { useToast } from "@/hooks/use-toast";

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
    type: "support", // Set default to "Technischer Support"
  });

  // Dropdown options for contact type
  const contactTypeOptions = [
    { value: "anfrage", label: t("contact.form.types.general") },
    { value: "support", label: t("contact.form.types.support") },
    { value: "vertrieb", label: t("contact.form.types.sales") },
  ];

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.form.messageSent"),
      description: t("contact.form.messageDescription"),
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
      type: "support",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const whyItems = (t("contact.why.items", { returnObjects: true }) as string[]).map((item) =>
    item.replace(/^•\s*/, "")
  );

  return (
    <Layout>
      <PageHeader
        breadcrumb={[{ label: t("contact.title") }]}
        title={t("contact.title")}
        lede={t("contact.subtitle")}
      />

      <section className="py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline justify-between gap-6 border-b border-ink pb-6">
              <h2 className="display-md text-ink">{t("contact.form.title")}</h2>
              <p className="eyebrow hidden text-ink/50 sm:block">{t("contact.form.subtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              <div>
                <Label htmlFor="type">{t("contact.form.typeRequired")}</Label>
                <CustomDropdown
                  options={contactTypeOptions}
                  value={formData.type}
                  onValueChange={(value) => handleInputChange("type", value)}
                  placeholder={t("contact.form.selectPlaceholder")}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-5">
                <div>
                  <Label htmlFor="firstName">{t("contact.form.firstNameRequired")}</Label>
                  <Input
                    id="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">{t("contact.form.lastNameRequired")}</Label>
                  <Input
                    id="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-5">
                <div>
                  <Label htmlFor="company">{t("contact.form.company")}</Label>
                  <Input
                    id="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.form.emailRequired")}</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="street">{t("contact.form.address")}</Label>
                <Input
                  id="street"
                  placeholder={t("contact.form.addressPlaceholder")}
                  value={`${formData.street} ${formData.houseNumber}, ${formData.zip} ${formData.city}, ${formData.country}`
                    .trim()
                    .replace(/^,\s*|,\s*$/g, "")}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Simple parsing - in a real app you'd want more sophisticated parsing
                    const parts = value.split(",");
                    if (parts.length >= 3) {
                      const streetParts = parts[0].trim().split(" ");
                      const street = streetParts.slice(0, -1).join(" ");
                      const houseNumber = streetParts[streetParts.length - 1] || "";
                      const zip = parts[1].trim().split(" ")[0] || "";
                      const city = parts[1].trim().split(" ").slice(1).join(" ") || "";
                      const country = parts[2].trim() || "";

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

              <div>
                <Label htmlFor="message">{t("contact.form.messageRequired")}</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={6}
                  required
                />
              </div>

              <div className="flex flex-col-reverse gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.8125rem] text-muted-foreground">{t("contact.form.spamProtection")}</p>
                <Button type="submit" size="lg" className="sm:min-w-[12rem]">
                  {t("contact.form.send")}
                  <ArrowRight className="group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>

          {/* Details */}
          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="space-y-12 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="eyebrow text-ink/55">{t("contact.location.title")}</h2>
                  <p className="text-[0.8125rem] text-muted-foreground">{t("contact.location.subtitle")}</p>
                </div>
                <GoogleMaps address="Geisweider Str. 130, 57078 Siegen, Deutschland" className="mt-5 w-full" />
              </div>

              <dl className="border-t border-ink text-[0.9375rem]">
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="eyebrow pt-1 text-ink/50">{t("contact.location.address")}</dt>
                  <dd className="col-span-2 leading-relaxed text-ink">
                    <span className="font-medium">Alphaweld GmbH</span>
                    <br />
                    Geisweider Str. 130
                    <br />
                    D-57078 Siegen
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Geisweider+Str.+130%2C+57078+Siegen%2C+Deutschland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-3 flex items-center gap-1.5 text-[0.8125rem] text-ink/70 hover:text-ink"
                    >
                      <span className="link-draw">{t("contact.location.openMaps")}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="eyebrow pt-1 text-ink/50">{t("contact.details.phone")}</dt>
                  <dd className="col-span-2">
                    <a href="tel:+492713178970" className="link-draw text-ink">+49 (0)271 317897-0</a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="eyebrow pt-1 text-ink/50">{t("contact.details.fax")}</dt>
                  <dd className="col-span-2 text-ink/80">+49 (0)271 317897-29</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="eyebrow pt-1 text-ink/50">{t("contact.details.email")}</dt>
                  <dd className="col-span-2">
                    <a href="mailto:welding@alphaweld.de" className="link-draw text-ink">welding@alphaweld.de</a>
                  </dd>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <dt className="eyebrow pt-1 text-ink/50">{t("contact.hours.title")}</dt>
                  <dd className="col-span-2 flex justify-between gap-4 text-ink/80">
                    <span>{t("contact.hours.weekdays")}</span>
                    <span className="font-mono text-[0.8125rem] text-ink">{t("contact.hours.time")}</span>
                  </dd>
                </div>
              </dl>

              <div className="on-ink bg-ink p-8 text-paper">
                <p className="eyebrow flex items-center gap-3 text-paper/60">
                  <span className="h-px w-6 bg-amber" aria-hidden="true" />
                  {t("contact.hotline.title")}
                </p>
                <a href="tel:+492713178970" className="mt-6 block font-display text-[2rem] leading-tight text-paper">
                  +49 (0)271 317897-0
                </a>
                <p className="mt-2 text-sm text-paper/60">{t("contact.hotline.time")}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Additional info */}
      <section className="border-t border-line bg-stone py-16 md:py-24">
        <div className="container grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8">
          <div className="md:pr-12">
            <h2 className="display-sm text-ink">{t("contact.why.title")}</h2>
            <ul className="mt-8 border-t border-line-strong/70">
              {whyItems.map((item, index) => (
                <li key={item} className="flex items-baseline gap-5 border-b border-line-strong/70 py-4 text-[0.9375rem] text-ink/80">
                  <span className="index-num text-ink/40">{String(index + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-12 md:border-l md:border-line-strong/70">
            <h2 className="display-sm text-ink">{t("contact.response.title")}</h2>
            <div className="mt-8 space-y-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
              <p className="text-ink/80">{t("contact.response.description")}</p>
              <p>{t("contact.response.urgent")}</p>
            </div>
            <div className="mt-8 border-l-2 border-amber bg-paper px-6 py-5">
              <p className="text-[0.9375rem] font-medium text-ink">{t("contact.response.emergency")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.response.emergencyDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
