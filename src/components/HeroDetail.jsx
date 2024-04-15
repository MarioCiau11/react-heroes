import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/heroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });
      if (response.ok) {
        // Muestra un SweetAlert de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Héroe creado con éxito!',
          showConfirmButton: false,
          timer: 1500, // Cierra automáticamente después de 1.5 segundos
        });
        
        // Redirigir a la lista de héroes después de crear uno nuevo
        setTimeout(() => {
          window.location.href = '/';
        }, 1500); // Redirige después de 1.5 segundos
      } else {
        console.error('Error al crear el héroe:', response.statusText);
        // Muestra un SweetAlert de error
        Swal.fire({
          icon: 'error',
          title: '¡Oops!',
          text: 'Hubo un error al crear el héroe',
        });
      }
    } catch (error) {
      console.error('Error de red:', error);
      // Muestra un SweetAlert de error
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Hubo un error de red al intentar crear el héroe',
      });
    }
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
