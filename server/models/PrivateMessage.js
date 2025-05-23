import mongoose from 'mongoose';

const PrivateMessageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    isRead: { type: Boolean, default: false }
});

const PrivateMessage = mongoose.model('PrivateMessage', PrivateMessageSchema);
export default PrivateMessage;