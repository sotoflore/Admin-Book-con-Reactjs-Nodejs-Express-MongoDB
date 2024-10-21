const Book = require('../models/Book');

// Controlador para obtener todos los libros
exports.getAllBooks = async (req, res) => {
    try {
        let query = {}
        if (req.query.category) {
            query.category = req.query.category;
        }
        const books = await Book.find(query).sort({ createdAt: -1 });
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros' });
    }
};

// Controlador para crear un nuevo libro
exports.createBook = async (req, res) => {
    const { title, author, description, price, language, category } = req.body;

    if (!title || !author || !description || !price || !language || !category) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const newBook = await Book.create({ title, author, description, price, language, category});
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el libro' });
    }
};

// Controlador para obtener un libro por ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el libro' });
    }
};

// Controlador para actualizar un libro por ID
exports.updateBook = async (req, res) => {
    const { title, author, description, price, language, category } = req.body;

    if (!title || !author || !description || !price || !language || !category) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, description, price, language, category  },
            { new: true, runValidators: true }
        );
        if (!updatedBook) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el libro' });
    }
};

// Controlador para eliminar un libro por ID
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Libro no encontrado' });
        res.json({ message: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el libro' });
    }
};

