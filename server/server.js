import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import forumRoutes from './routes/forumRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';
import 'dotenv/config';

import Category from './models/Category.js';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/messages', messageRoutes);


async function initializeDatabase() {
    try {
        const categories = [
            { name: 'Technologie', description: 'Discussions sur les nouvelles technologies' },
            { name: 'Art', description: 'Tout ce qui concerne les arts visuels et créatifs' },
            { name: 'Photographie', description: 'Partagez vos photos et conseils photo' },
            { name: 'Jeux vidéo', description: 'Actualités et discussions sur les jeux vidéo' },
            { name: 'Cuisine', description: 'Recettes et techniques culinaires' },
            { name: 'Voyages', description: 'Conseils et récits de voyage' }
        ];

        // Vérifie si des catégories existent déjà
        const existingCategories = await Category.countDocuments();

        if (existingCategories === 0) {
            // Insertion des catégories si la base est vide
            await Category.insertMany(categories);
            console.log('Catégories initialisées avec succès');
        }
    } catch (error) {
        console.error('Erreur lors de l\'initialisation des catégories:', error);
    }
}

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/forumDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connecté à MongoDB');
        initializeDatabase();
    })
    .catch(err => console.error('Échec de connexion à MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));