import { Router } from "express"; // importando el manejador de rutas
import { getPhoto, getPhotos, createPhoto, deletePhoto, updatePhoto } from '../controllers/Photo.controller'; // importando las clases desde el controlador
import multer from '../libs/multer' // importando multer 
 
const router = Router(); // instanciando el enrutador
// nuestra ruta principal es (/api)--- ya después de esto vienen todas las siguientes
router.route('/photos') // ruta principal(/api) -- esta ruta va despues del api /api/photos
.post(multer.single('image'),createPhoto)// multer es un middleware // tomará el campo llamado image del frontend
.get(getPhotos); // opteniendo los datos


router.route('/photos/:id') // ruta para una solo foto por id
    .get(getPhoto) // opteniendo los datos
    .delete(deletePhoto) // eliminando la foto
    .put(updatePhoto);

export default router;