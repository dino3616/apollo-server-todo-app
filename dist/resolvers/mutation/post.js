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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = void 0;
const posts_1 = require("../../db/controllers/posts");
const createPost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const createdPost = yield (0, posts_1.createPost)(args.newPost);
    return createdPost;
});
exports.createPost = createPost;
const updatePost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPost = yield (0, posts_1.updatePost)(args.id, args.updatePost);
    return updatedPost;
});
exports.updatePost = updatePost;
const deletePost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedPost = yield (0, posts_1.removePost)(args.id);
    return deletedPost;
});
exports.deletePost = deletePost;
//# sourceMappingURL=post.js.map