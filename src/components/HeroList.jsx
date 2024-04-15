import React from "react";
import { Link } from "react-router-dom";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import HeroPage from "./HeroPage";
import useHeroes from "../hooks/useheroes";

const HeroList = () => {
  const { heroes, loading } = useHeroes();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <HeroPage title="Lista de Héroes">
      <Button
        component={Link}
        to="/hero/create"
        variant="contained"
        color="primary"
        sx={{ marginBottom: "20px" }}
      >
        Crear Nuevo Héroe
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#f0f0f0" }}>
              <TableCell>Superhéroe</TableCell>
              <TableCell>Editorial</TableCell>
              <TableCell>Alter Ego</TableCell>
              <TableCell>Primera Aparición</TableCell>
              <TableCell>Personajes</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {heroes.map((hero) => (
              <TableRow key={hero.id}>
                <TableCell>{hero.superhero}</TableCell>
                <TableCell>{hero.publisher}</TableCell>
                <TableCell>{hero.alter_ego}</TableCell>
                <TableCell>{hero.first_appearance}</TableCell>
                <TableCell>{hero.characters}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Button
                      component={Link}
                      to={`/hero/${hero.id}/edit`}
                      variant="contained"
                      sx={{ backgroundColor: "#FFA500", color: "#ffffff" }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#f44336", color: "#ffffff" }}
                    >
                      Eliminar
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HeroPage>
  );
};

export default HeroList;
