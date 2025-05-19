// server/models/Topic.js
import mongoose from 'mongoose';

const TopicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    isPinned: { type: Boolean, default: false }
});

const Topic = mongoose.model('Topic', TopicSchema);
export default Topic;