import Post, { NewPost, UpdatePost } from '../models/posts';

export type PostType = {
    _id: string;
    title: string;
    body: string;
    createdAt: number;
    updatedAt: number;
};

export const allPosts = async () => {
    return Post.find();
};

export const findPostById = async (id: string) => {
    return Post.findOne({ _id: id });
};

export const findPostsByTitle = async (title: string) => {
    return Post.find({ title: title });
};

export const createPost = async (newPost: NewPost) => {
    return Post.create(newPost);
};

export const updatePost = async (id: string, updatePost: UpdatePost) => {
    return Post.findOneAndUpdate({ _id: id }, updatePost);
};

export const removePost = async (id: string) => {
    return Post.findOneAndDelete({ _id: id });
};
