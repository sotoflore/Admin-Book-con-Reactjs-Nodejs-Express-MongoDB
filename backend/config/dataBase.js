const mongoose  = require('mongoose');
require('dotenv').config( { path: '.env' } );

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.BD_MONGO_URL)
    } catch (error) {
        console.log('Error al conectarse a la base de datos');
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB;