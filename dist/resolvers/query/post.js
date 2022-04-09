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
exports.listPost = exports.getPost = exports.allPost = void 0;
const posts_1 = require("../../db/controllers/posts");
const allPost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    let start = args.start;
    let range = args.range;
    let end = start + range;
    const listedPost = yield (yield (0, posts_1.allPosts)()).slice(start, end);
    return listedPost;
});
exports.allPost = allPost;
const getPost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    const gotPost = yield (0, posts_1.findPostById)(args.id);
    return gotPost;
});
exports.getPost = getPost;
const listPost = (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
    let start = args.start;
    let range = args.range;
    let end = start + range;
    const listedPost = yield (yield (0, posts_1.findPostsByTitle)(args.title)).slice(start, end);
    return listedPost;
});
exports.listPost = listPost;
//# sourceMappingURL=post.js.map