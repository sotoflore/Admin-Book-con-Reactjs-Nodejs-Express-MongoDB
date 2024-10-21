const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/dataBase');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');

const server = express();

// Conectarse a la base de datos
conectarDB();

server.use(express.json());
server.use(cors());

server.use('/api/auth',authRoutes)
server.use('/api/books', bookRoutes);
server.use('/api/emails', emailRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Conectado en el puerto ${PORT}`);
})