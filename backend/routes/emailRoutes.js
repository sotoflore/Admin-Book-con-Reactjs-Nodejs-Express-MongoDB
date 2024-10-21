const express = require('express');
const Email = require('../models/Email');

const router = express.Router();

// Ruta para crear un nuevo correo
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    const newEmail = new Email({ name, email, message });
    try {
        await newEmail.save();
        res.status(201).send('Email guardado');
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Ruta para obtener todos los correos
router.get('/', async (req, res) => {
    try {
        const emails = await Email.find().sort({ createdAt: -1 });
        res.json(emails);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const email = await Email.findByIdAndUpdate(id, { status }, { new: true });
        if (!email) {
            return res.status(404).send({ message: 'Email not found' });
        }
        res.send(email);
    } catch (error) {
        res.status(500).send({ message: 'Error updating email status', error });
    }
});

// Ruta para eliminar un correo
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const email = await Email.findByIdAndDelete(id);
        if (!email) {
            return res.status(404).send({ message: 'Email not found' });
        }
        res.send({ message: 'Email deleted' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting email', error });
    }
});


module.exports = router;
