const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config( { path: '.env' } );
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos por email
        const user = await User.findOne({ email });

        // Si no se encuentra el usuario o la contraseña no coincide, responde con un error
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Si las credenciales son válidas, genera un token JWT y lo devuelve en la respuesta
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error de servidor' });
    }
});

module.exports = router;
