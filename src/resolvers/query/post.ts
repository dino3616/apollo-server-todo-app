import { QueryResolvers } from '../../types/generated/graphql';
import {
    allPosts,
    findPostById,
    findPostsByTitle,
} from '../../db/controllers/posts';

export const allPost: QueryResolvers['allPost'] = async (
    parent,
    args,
    context,
    info
) => {
    let start = args.start;
    let range = args.range;
    let end = start + range;

    const listedPost = await (await allPosts()).slice(start, end);

    return listedPost;
};

export const getPost: QueryResolvers['getPost'] = async (
    parent,
    args,
    context,
    info
) => {
    const gotPost = await findPostById(args.id);
    return gotPost;
};

export const listPost: QueryResolvers['listPost'] = async (
    parent,
    args,
    context,
    info
) => {
    let start = args.start;
    let range = args.range;
    let end = start + range;

    const listedPost = await (
        await findPostsByTitle(args.title)
    ).slice(start, end);

    return listedPost;
};
