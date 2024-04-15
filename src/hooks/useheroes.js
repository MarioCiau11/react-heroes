import { useState, useEffect } from 'react';
import axios from 'axios';

const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/heroes'); // url del endpoint
        setHeroes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching heroes:', error);
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  return { heroes, loading };
};

export default useHeroes;
