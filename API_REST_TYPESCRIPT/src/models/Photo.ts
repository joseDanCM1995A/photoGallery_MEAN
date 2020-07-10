import {Schema, model, Document} from 'mongoose';

const schemaPhoto = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
});

// interface para que ts nos ayude al formato que debe de seguir nuestro modelo
interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string
}

// exportando el modelo para poder ser importado en otras secciones
export default model<IPhoto>('Photo', schemaPhoto);