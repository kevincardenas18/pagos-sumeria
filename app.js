const express = require("express");
const env = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();
app.use(cookieParser());
env.config({ path: "./config.env" });

// Define el puerto por defecto
const DEFAULT_PORT = 3000;

// Asigna el puerto predeterminado si no se proporciona en la variable de entorno
const PORT = process.env.PORT || DEFAULT_PORT;

app.use(express.json());

// Configura CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Adjunta tu manejador de rutas después de la configuración de CORS
app.use(require("./router/route"));

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto', PORT);
});
