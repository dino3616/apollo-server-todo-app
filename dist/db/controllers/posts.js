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
exports.removePost = exports.updatePost = exports.createPost = exports.findPostsByTitle = exports.findPostById = exports.allPosts = void 0;
const posts_1 = __importDefault(require("../models/posts"));
const allPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.find();
});
exports.allPosts = allPosts;
const findPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.findOne({ _id: id });
});
exports.findPostById = findPostById;
const findPostsByTitle = (title) => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.find({ title: title });
});
exports.findPostsByTitle = findPostsByTitle;
const createPost = (newPost) => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.create(newPost);
});
exports.createPost = createPost;
const updatePost = (id, updatePost) => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.findOneAndUpdate({ _id: id }, updatePost);
});
exports.updatePost = updatePost;
const removePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return posts_1.default.findOneAndDelete({ _id: id });
});
exports.removePost = removePost;
//# sourceMappingURL=posts.js.map