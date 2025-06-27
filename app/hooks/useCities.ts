import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface City {
  id: number;
  service_id?: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export function useCities() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('cities')
        .select('*');
      if (error) {
        setError(error.message);
        setCities([]);
      } else {
        setCities((data as City[]) || []);
        setError(null);
      }
      setLoading(false);
    };
    fetchCities();
  }, []);

  return { cities, loading, error };
} 