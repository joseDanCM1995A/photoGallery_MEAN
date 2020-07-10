"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express"); // importando el manejador de rutas
const Photo_controller_1 = require("../controllers/Photo.controller"); // importando las clases desde el controlador
const multer_1 = __importDefault(require("../libs/multer")); // importando multer 
const router = express_1.Router(); // instanciando el enrutador
// nuestra ruta principal es (/api)--- ya después de esto vienen todas las siguientes
router.route('/photos') // ruta principal(/api) -- esta ruta va despues del api /api/photos
    .post(multer_1.default.single('image'), Photo_controller_1.createPhoto) // multer es un middleware // tomará el campo llamado image del frontend
    .get(Photo_controller_1.getPhotos); // opteniendo los datos
router.route('/photos/:id') // ruta para una solo foto por id
    .get(Photo_controller_1.getPhoto) // opteniendo los datos
    .delete(Photo_controller_1.deletePhoto) // eliminando la foto
    .put(Photo_controller_1.updatePhoto);
exports.default = router;
