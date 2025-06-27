import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export interface PlaceImage {
  id: number;
  place_id?: number;
  image_url?: string;
}

export function usePlacesImages() {
  const [images, setImages] = useState<PlaceImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('places_images')
        .select('*');
      if (error) {
        setError(error.message);
        setImages([]);
      } else {
        setImages((data as PlaceImage[]) || []);
        setError(null);
      }
      setLoading(false);
    };
    fetchImages();
  }, []);

  return { images, loading, error };
} 