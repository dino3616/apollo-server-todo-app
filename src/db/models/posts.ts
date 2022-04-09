import { InputMaybe } from '../../types/generated/graphql';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', PostSchema);

export default Post;

export interface NewPost {
    title: string;
    body: string;
}

export interface UpdatePost {
    title?: InputMaybe<string>;
    body?: InputMaybe<string>;
}
