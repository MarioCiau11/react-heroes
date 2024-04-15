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

  const deleteHero = async (heroId) => {
    try {
      await axios.delete(`http://localhost:3001/heroes/${heroId}`);
      setHeroes(heroes.filter(hero => hero.id !== heroId));
    } catch (error) {
      console.error('Error deleting hero:', error);
    }
  };

  return { heroes, loading, deleteHero };
};

export default useHeroes;
