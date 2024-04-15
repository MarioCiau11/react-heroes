import { useState, useEffect } from 'react';
import axios from 'axios';

const useHeroById = (id) => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/heroes/${id}`); // Endpoint con el id
        const data = response.data;
        setHero(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching hero details:', error);
        setLoading(false);
      }
    };

    if (id) {
      fetchHero();
    }
  }, [id]);

  return { hero, loading };
};

export default useHeroById;
