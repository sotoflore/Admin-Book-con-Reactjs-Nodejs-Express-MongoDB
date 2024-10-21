const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticateUser = require('../middleware/authenticateUser');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
// Aplicar el middleware de autenticación a todas las rutas del router
router.use(authenticateUser);

router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;