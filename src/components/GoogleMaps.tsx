import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface GoogleMapsProps {
  address: string;
  className?: string;
}

const GoogleMaps = ({ address, className = "" }: GoogleMapsProps) => {
  const { t } = useTranslation();
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBvOkBw3cLx7cLx7cLx7cLx7cLx7cLx7cL&q=${encodedAddress}`;

  return (
    <div className={`relative ${className}`}>
      {/* Static Map Preview */}
      <div className="relative w-full h-64 bg-gradient-to-br from-muted/30 to-muted/50 rounded-lg overflow-hidden shadow-lg">
        {/* Map-like background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-muted/20"></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Location marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -top-1 -left-1 w-10 h-10 bg-primary/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Address overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <p className="text-sm font-semibold text-foreground">{t('maps.company')}</p>
            <p className="text-xs text-muted-foreground">{t('maps.address')}</p>
          </div>
        </div>
        
        {/* Open in Google Maps button */}
        <div className="absolute top-4 right-4">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            asChild
          >
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-3 w-3" />
              <span className="text-xs">{t('maps.open')}</span>
            </a>
          </Button>
        </div>
      </div>
      
      {/* Alternative: Embedded Map (commented out as it requires API key) */}
      {false && (
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        />
      )}
    </div>
  );
};

export default GoogleMaps;
