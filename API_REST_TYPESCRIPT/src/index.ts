// lanzamiento de la app

import app from './app'
import {starConnection} from './db'

async function main(){
    starConnection();
    await  app.listen(app.get('port'));
    console.log('server - ok', app.get('port'))
}
main();