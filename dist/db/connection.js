"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const DATABASE_URL = process.env.MONGO_URL;
if (typeof DATABASE_URL === 'undefined') {
    console.error('Error: environment variable "MONGO_URL" is not set.');
    process.exit(1);
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default
        .connect(DATABASE_URL)
        .then((connection) => {
        console.log(`MongoDB Connected ${connection.connection.host} ✨`);
    })
        .catch((error) => {
        console.error(`Error: DB connection error.\ndetail...${error.message}`);
        process.exit(1);
    });
});
exports.default = connectDB;
//# sourceMappingURL=connection.js.map