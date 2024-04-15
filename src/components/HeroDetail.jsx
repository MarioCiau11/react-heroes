import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'; // Importa Axios

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
    const fetchData = async () => {
      try {
        if (id) {
          // Realiza una solicitud GET al servidor para obtener los detalles del héroe correspondiente al ID
          const response = await axios.get(`http://localhost:3001/heroes/${id}`);
          // Establece el estado del héroe con los detalles obtenidos
          setHero(response.data);
        }
      } catch (error) {
        console.error('Error fetching hero details:', error);
      }
    };

    fetchData();
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
      const url = id ? `http://localhost:3001/heroes/${id}` : 'http://localhost:3001/heroes';
      const method = id ? 'PUT' : 'POST';
      const response = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        data: hero,
      });
      if (response.status === 200 || response.status === 201) {
        const message = id ? '¡Héroe actualizado con éxito!' : '¡Héroe creado con éxito!';
        Swal.fire({
          icon: 'success',
          title: message,
          text: 'El héroe ha sido actualizado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        console.error('Error:', response.statusText);
        Swal.fire({
          icon: 'error',
          title: '¡Oops!',
          text: 'Hubo un error al guardar los cambios',
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Hubo un error de red al intentar guardar los cambios',
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
        {/* //agregar un botón para cancelar la acción */}
        <Button
          variant="contained"
            sx={{ marginLeft: '10px', background: 'red' }}
          onClick={() => window.history.back()}
        >
          Cancelar
        </Button>
      </form>
    </HeroPage>
  );
};
