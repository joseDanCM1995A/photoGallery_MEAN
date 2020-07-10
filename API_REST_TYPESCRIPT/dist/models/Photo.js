"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaPhoto = new mongoose_1.Schema({
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
// exportando el modelo para poder ser importado en otras secciones
exports.default = mongoose_1.model('Photo', schemaPhoto);
