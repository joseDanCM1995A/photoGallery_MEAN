// lógica de programaciṕon de las rutas

import {Request, Response} from 'express';
import Photo from '../models/Photo' // modelo de nuestra bd
import fs from 'fs-extra' // para eliminar las fotos
import path from 'path' // para la paths de las fotos


export async function getPhotos(req: Request, res: Response): Promise<Response>{ // Respuesta basada en una promesa
   const allPhotos = await Photo.find(); // mandando a llamar todas las fotos
   return res.json(allPhotos);
}

export async function getPhoto(req: Request, res: Response): Promise<Response>{ // Respuesta basada en una promesa
    const photo = await Photo.findById(req.params.id); // mandando a llamar una sola foto
    return res.json(photo);
}

export async function deletePhoto(req: Request, res: Response): Promise<Response> { // Respuesta basada en una promesa
    const photoDeleted = await Photo.findByIdAndRemove(req.params.id); // mandando a llamar una sola foto
    if(photoDeleted){ // asegurando de que si exista la foto eliminda
       await fs.unlink(path.resolve(photoDeleted.imagePath)); // eliminando la foto del servidor // resolve te da toda la ruta absoluta 
    }
    return res.json({
        mesasge: 'deleted photo',
        photoDeleted
    });
}

export async function updatePhoto(req: Request, res: Response): Promise<Response> { // Respuesta basada en una promesa
    const {title, description} = req.body; // los datos a actualizar
    const photoUpdated = await Photo.findByIdAndUpdate(req.params.id,{
        title,
        description
    },{new: true}); // para que me regrese el dato actualizado

    return res.json({
        mesasge: 'successfully updated photo',
        photoUpdated
    });
}


export async function createPhoto(req: Request, res: Response): Promise<Response>{ //  Respuesta basada en una promesa
    const {title, description} = req.body; // extrayendo title y description del request
    // contruyendo el documento
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    }
    const photo = new Photo(newPhoto); // almacenando el documento en una instancia del modelo
    await photo.save(); // guardando en la bd

    // retornando la respuesta del json después de guardar
    return res.json({
        message: 'Photo successfully saved',
        photo
    });
}
