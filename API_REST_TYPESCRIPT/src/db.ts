//configuración de la bd
import { connect } from 'mongoose';
export async function starConnection(){
    await connect('mongodb://localhost/photogallery',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DB - ok');
}