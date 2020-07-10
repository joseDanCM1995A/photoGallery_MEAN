// configuración de multer
import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination: 'uploads', // carpeta dónde se va a almacenar
    filename: (req, file, cb) => { 
        cb(null, Date.now() + path.extname(file.originalname)); // no retorna ningún error, nombre que tomará el archivo
    }
})

export default multer({storage}); // importando solo storage que es la configuración de multer