import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface City {
  id: number;
  service_id?: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  zipe_code?: string;
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
        // Set default image if image is null or undefined
        const updatedCities = (data as City[]).map(city => ({
          ...city,
          image: city.image ?? '/city_semple_image.jpg',
        }));
        setCities(updatedCities || []);
        console.log('Loaded cities:', updatedCities);
        setError(null);
      }
      setLoading(false);
    };
    fetchCities();
  }, []);

  // Add filter function for name or zip code
  const findCities = (search: string) => {
    const lowerSearch = search.toLowerCase();
    return cities.filter(city =>
      city.name.toLowerCase().includes(lowerSearch) ||
      (city.zipe_code?.toLowerCase().includes(lowerSearch) ?? false)
    );
  };

  return { cities, loading, error, findCities };
} 