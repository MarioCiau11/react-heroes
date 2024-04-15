import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import HeroPage from './HeroPage';



// eslint-disable-next-line react/prop-types
const HeroList = ({ heroes = [] }) => {
  return (
    <HeroPage title="Lista de Héroes">
      <List>
        {heroes.map((hero) => (
          <ListItem key={hero.id} button component={Link} to={`/hero/${hero.id}`}>
            <ListItemText primary={hero.name} />
          </ListItem>
        ))}
      </List>
      <Button component={Link} to="/hero/create" variant="contained" color="primary">
        Crear Nuevo Héroe
      </Button>
    </HeroPage>
  );
};

export default HeroList;
