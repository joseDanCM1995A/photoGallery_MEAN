"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.starConnection = void 0;
//configuración de la bd
const mongoose_1 = require("mongoose");
async function starConnection() {
    await mongoose_1.connect('mongodb://localhost/photogallery', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DB - ok');
}
exports.starConnection = starConnection;
