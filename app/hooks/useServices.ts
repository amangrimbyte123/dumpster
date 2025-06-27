import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface Service {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  service_facilities?: string[];
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('services')
        .select('*');
      if (error) {
        setError(error.message);
        setServices([]);
      } else {
        // Ensure service_facilities is always an array
        const normalized = (data as any[]).map((service) => ({
          ...service,
          service_facilities: Array.isArray(service.service_facilities)
            ? service.service_facilities
            : typeof service.service_facilities === 'string' && service.service_facilities.startsWith('[')
              ? JSON.parse(service.service_facilities)
              : typeof service.service_facilities === 'string'
                ? service.service_facilities.split(',').map((f: string) => f.trim())
                : [],
        }));
        setServices(normalized);
        setError(null);
      }
      setLoading(false);
    };
    fetchServices();
  }, []);

  return { services, loading, error };
} 