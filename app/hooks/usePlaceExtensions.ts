import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface PlaceExtension {
  id: number;
  place_id?: number;
  extension_title?: string;
  extension_items?: any;
}

export function usePlaceExtensions() {
  const [extensions, setExtensions] = useState<PlaceExtension[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('place_extensions')
        .select('*');
      if (error) {
        setError(error.message);
        setExtensions([]);
      } else {
        setExtensions((data as PlaceExtension[]) || []);
        setError(null);
      }
      setLoading(false);
    };
    fetchExtensions();
  }, []);

  return { extensions, loading, error };
} 