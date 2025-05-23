import express from 'express';
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.js';
import PrivateMessage from '../models/PrivateMessage.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/', auth, [
    check('content', 'Content is required').not().isEmpty(),
    check('receiverId', 'Receiver is required').not().isEmpty()
], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { content, receiverId } = req.body;

        const receiver = await User.findById(receiverId);
        if (!receiver) {
            return res.status(404).json({ msg: 'Receiver not found' });
        }

        const newMessage = new PrivateMessage({
            content,
            senderId: req.user.id,
            receiverId
        });

        const message = await newMessage.save();

        const populatedMessage = await PrivateMessage.findById(message._id)
            .populate('senderId', 'username profilePicture');

        res.json(populatedMessage);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

export default router;