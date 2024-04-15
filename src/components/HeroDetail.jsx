import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material'; 
import HeroPage from './HeroPage'; 

export const HeroDetail = () => {
  const { id } = useParams(); // Obtén el ID del héroe de los parámetros de la URL
  const [hero, setHero] = useState({
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: '',
  });

  useEffect(() => {
    if (id) {
      setHero({
        superhero: 'Batman',
        publisher: 'DC Comics',
        alter_ego: 'Bruce Wayne',
        first_appearance: 'Detective Comics #27',
        characters: 'Bruce Wayne',
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero(prevHero => ({
      ...prevHero,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del héroe:', hero);
  };

  return (
    <HeroPage title={id ? 'Editar Héroe' : 'Crear Nuevo Héroe'}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Superhéroe"
          type="text"
          name="superhero"
          value={hero.superhero}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Editorial"
          type="text"
          name="publisher"
          value={hero.publisher}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Alter Ego"
          type="text"
          name="alter_ego"
          value={hero.alter_ego}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Primera Aparición"
          type="text"
          name="first_appearance"
          value={hero.first_appearance}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Personajes"
          type="text"
          name="characters"
          value={hero.characters}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          {id ? 'Guardar Cambios' : 'Crear Héroe'}
        </Button>
      </form>
    </HeroPage>
  );
};
