 import mongoose from 'mongoose';0

const schema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User" ,
        required : true,
    },
    latestMessage:{
        type: String,
        default: "New Chat",
    },
},
{
    timestamps: true,

}
);

export const Chat = mongoose.model("Chat",schema);