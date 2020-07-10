"use strict";
// lógica de programaciṕon de las rutas
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPhoto = exports.updatePhoto = exports.deletePhoto = exports.getPhoto = exports.getPhotos = void 0;
const Photo_1 = __importDefault(require("../models/Photo")); // modelo de nuestra bd
const fs_extra_1 = __importDefault(require("fs-extra")); // para eliminar las fotos
const path_1 = __importDefault(require("path")); // para la paths de las fotos
async function getPhotos(req, res) {
    const allPhotos = await Photo_1.default.find(); // mandando a llamar todas las fotos
    return res.json(allPhotos);
}
exports.getPhotos = getPhotos;
async function getPhoto(req, res) {
    const photo = await Photo_1.default.findById(req.params.id); // mandando a llamar una sola foto
    return res.json(photo);
}
exports.getPhoto = getPhoto;
async function deletePhoto(req, res) {
    const photoDeleted = await Photo_1.default.findByIdAndRemove(req.params.id); // mandando a llamar una sola foto
    if (photoDeleted) { // asegurando de que si exista la foto eliminda
        await fs_extra_1.default.unlink(path_1.default.resolve(photoDeleted.imagePath)); // eliminando la foto del servidor // resolve te da toda la ruta absoluta 
    }
    return res.json({
        mesasge: 'deleted photo',
        photoDeleted
    });
}
exports.deletePhoto = deletePhoto;
async function updatePhoto(req, res) {
    const { title, description } = req.body; // los datos a actualizar
    const photoUpdated = await Photo_1.default.findByIdAndUpdate(req.params.id, {
        title,
        description
    }, { new: true }); // para que me regrese el dato actualizado
    return res.json({
        mesasge: 'successfully updated photo',
        photoUpdated
    });
}
exports.updatePhoto = updatePhoto;
async function createPhoto(req, res) {
    const { title, description } = req.body; // extrayendo title y description del request
    // contruyendo el documento
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };
    const photo = new Photo_1.default(newPhoto); // almacenando el documento en una instancia del modelo
    await photo.save(); // guardando en la bd
    // retornando la respuesta del json después de guardar
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
}
exports.createPhoto = createPhoto;
