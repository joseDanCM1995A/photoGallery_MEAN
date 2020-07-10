"use strict";
// confifuaración de la aplicación
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // instalar @types/express
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
// initializations
const app = express_1.default();
app.set('port', process.env.PORT || 3000); // setting port
// middlewares
app.use(morgan_1.default('dev')); // watching petitions http
app.use(express_1.default.json()); // for communicationiciones del cliente a nuestro server
app.use(cors_1.default()); // para permitir las pet
// routes
app.use('/api', index_routes_1.default);
// folder for public files and storage files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
