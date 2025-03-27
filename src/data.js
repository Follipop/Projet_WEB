// src/data.js
export const forumData = {
    categories: [
      {
        id: 1,
        name: "Technologie",
        topics: [
          {
            id: 1,
            title: "React vs Vue",
            comments: [
              { id: 1, userId: 1, user: "Alice", content: "Je préfère React pour sa flexibilité et sa grande communauté." },
              { id: 2, userId: 2, user: "Bob", content: "Vue est plus facile à apprendre pour les débutants, selon moi." },
              { id: 3, userId: 3, user: "Charlie", content: "Les deux ont leurs avantages, mais React est plus adapté pour les gros projets." },
            ],
          },
          {
            id: 2,
            title: "Les dernières tendances en IA",
            comments: [
              { id: 4, userId: 4, user: "David", content: "L'IA générative comme ChatGPT change complètement la donne." },
              { id: 5, userId: 5, user: "Eve", content: "Oui, mais il faut faire attention à l'éthique et à la confidentialité des données." },
              { id: 6, userId: 6, user: "Frank", content: "Je suis impatient de voir comment l'IA va évoluer dans les 5 prochaines années." },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Science",
        topics: [
          {
            id: 3,
            title: "Les trous noirs",
            comments: [
              { id: 7, userId: 7, user: "Grace", content: "Les trous noirs sont fascinants, mais on en sait encore si peu." },
              { id: 8, userId: 8, user: "Heidi", content: "La théorie de la relativité d'Einstein a vraiment ouvert la voie à leur compréhension." },
              { id: 9, userId: 9, user: "Ivan", content: "Est-ce qu'on pourra un jour voyager à travers un trou noir ?" },
            ],
          },
          {
            id: 4,
            title: "Le réchauffement climatique",
            comments: [
              { id: 10, userId: 10, user: "Jack", content: "Il faut agir maintenant avant qu'il ne soit trop tard." },
              { id: 11, userId: 11, user: "Karen", content: "Les énergies renouvelables sont la clé pour réduire notre empreinte carbone." },
              { id: 12, userId: 12, user: "Liam", content: "Mais comment convaincre les grandes entreprises de changer leurs pratiques ?" },
            ],
          },
        ],
      },
      // Ajoutez d'autres catégories ici...
    ],
  };