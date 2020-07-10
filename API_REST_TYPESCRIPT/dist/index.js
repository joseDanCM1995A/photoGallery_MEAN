"use strict";
// lanzamiento de la app
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = require("./db");
async function main() {
    db_1.starConnection();
    await app_1.default.listen(app_1.default.get('port'));
    console.log('server - ok', app_1.default.get('port'));
}
main();
