import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface PlaceBasic {
  id: number;
  city_id?: number;
  position?: number;
  ludocid?: string;
  place_id?: string;
  kgmid?: string;
  data_id?: string;
  title?: string;
  slug: string;
  address?: string;
  phone?: string;
  rating?: number;
  reviews?: number;
  reviews_link?: string;
  review_text?: string;
  website?: string;
  domain?: string;
  gps_latitude?: number;
  gps_longitude?: number;
  type?: string;
  types?: string[];
  open_state?: string;
  hours?: string;
  open_hours?: any;
  thumbnail?: string;
}

export function usePlaceBasic() {
  const [places, setPlaces] = useState<PlaceBasic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('place_basic')
        .select('*');
      if (error) {
        setError(error.message);
        setPlaces([]);
      } else {
        const parsedData = (data as PlaceBasic[]).map(place => ({
          ...place,
          open_hours: typeof place.open_hours === 'string'
            ? JSON.parse(place.open_hours)
            : place.open_hours
        }));
        setPlaces(parsedData || []);
        setError(null);
      }
      setLoading(false);
    };
    fetchPlaces();
  }, []);

  return { places, loading, error };
} 