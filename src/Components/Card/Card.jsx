import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Cardpersonajes = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
  image={character.img || noImage}
  alt={`IMAGEN DEL PERSONAJE ${character.name || "desconocido"}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name || "Nombre no disponible"}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>Estilo de respiración:</strong>{" "}
            {character.breathing_style || "No disponible"}
            <br />
            <strong>Afiliación:</strong>{" "}
            {character.affiliation || "No disponible"}
            <br />
            <strong>Rango:</strong> {character.rank || "No disponible"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Cardpersonajes;
