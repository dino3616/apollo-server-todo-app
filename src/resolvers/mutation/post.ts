import { MutationResolvers } from '../../types/generated/graphql';
import {
    createPost as create,
    updatePost as update,
    removePost as remove,
} from '../../db/controllers/posts';

export const createPost: MutationResolvers['createPost'] = async (
    parent,
    args,
    context,
    info
) => {
    const createdPost = await create(args.newPost);
    return createdPost;
};

export const updatePost: MutationResolvers['updatePost'] = async (
    parent,
    args,
    context,
    info
) => {
    const updatedPost = await update(args.id, args.updatePost);
    return updatedPost;
};

export const deletePost: MutationResolvers['deletePost'] = async (
    parent,
    args,
    context,
    info
) => {
    const deletedPost = await remove(args.id);
    return deletedPost;
};
