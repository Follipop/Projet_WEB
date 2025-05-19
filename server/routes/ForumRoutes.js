// server/routes/forumRoutes.js
import express from 'express';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.js';
import Category from '../models/Category.js';
import Topic from '../models/Topic.js';
import Comment from '../models/Comment.js';

const router = express.Router();

// Get all categories
router.get('/categories', async(req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 });
        res.json(categories);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get topics by category
router.get('/topics/:categoryId', async(req, res) => {
    try {
        const topics = await Topic.find({ categoryId: req.params.categoryId })
            .populate('authorId', 'username profilePicture')
            .sort({ isPinned: -1, createdAt: -1 });
        res.json(topics);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get topic with comments
router.get('/topic/:topicId', async(req, res) => {
    try {
        // Increment view count
        await Topic.findByIdAndUpdate(req.params.topicId, { $inc: { views: 1 } });

        const topic = await Topic.findById(req.params.topicId)
            .populate('authorId', 'username profilePicture');

        const comments = await Comment.find({ topicId: req.params.topicId })
            .populate('authorId', 'username profilePicture')
            .sort({ createdAt: 1 });

        res.json({ topic, comments });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Create a new topic
router.post('/topics', auth, [
    check('title', 'Title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('categoryId', 'Category is required').not().isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { title, content, categoryId } = req.body;

        const newTopic = new Topic({
            title,
            content,
            categoryId,
            authorId: req.user.id
        });

        const topic = await newTopic.save();
        res.json(topic);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a comment
router.post('/comments', auth, [
    check('content', 'Content is required').not().isEmpty(),
    check('topicId', 'Topic is required').not().isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { content, topicId } = req.body;

        const newComment = new Comment({
            content,
            topicId,
            authorId: req.user.id
        });

        const comment = await newComment.save();

        // Populate author info before sending response
        const populatedComment = await Comment.findById(comment._id)
            .populate('authorId', 'username profilePicture');

        res.json(populatedComment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a comment
router.delete('/comments/:id', auth, async(req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);

        if (!comment) {
            return res.status(404).json({ msg: 'Comment not found' });
        }

        // Check user is the author
        if (comment.authorId.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await comment.remove();
        res.json({ msg: 'Comment removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;