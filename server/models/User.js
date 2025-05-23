import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    joinedDate: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

const User = mongoose.model('User', UserSchema);
export default User;