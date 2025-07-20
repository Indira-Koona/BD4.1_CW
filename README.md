# 🎬 MovieZone API

**MovieZone** is a simple RESTful API built with **Express.js** and **SQLite**. It provides Bollywood movie data with details like title, director, genre, rating, actor, and box office collection. Ideal for learning or creating a mini project based on movies!

## 📁 Project Structure

BD4.1_CW/
├── database.sqlite # SQLite database file
├── index.js # Express.js server
├── seed.js # (Optional) Script to seed initial movie data
└── README.md # Project documentation

## 🚀 Features

- Fetch all Bollywood movies with full details
- Lightweight backend using Express and SQLite
- CORS and JSON enabled
- Easy to extend with filters, search, or additional routes

## 📦 Technologies Used

- Node.js
- Express.js
- SQLite
- CORS Middleware

## 🧪 Sample API Response

**GET** `/movies`

```json
{
  "movies": [
    {
      "id": 1,
      "title": "Dangal",
      "director": "Nitesh Tiwari",
      "genre": "Biography",
      "release_year": 2016,
      "rating": 4.8,
      "actor": "Aamir Khan",
      "box_office_collection": 220
    },
    ...
  ]
}
1. Clone the Repository

git clone https://github.com/your-username/moviezone-api.git
cd moviezone-api

📌 To Do
Add movie filtering (by genre, rating, etc.)

Add movie search by title or actor

Add POST, PUT, DELETE operations

🧑‍💻 Author
Made with ❤️ by Indira Koona
Feel free to contribute or suggest improvements!

📃 License
This project is open source and available under the MIT License.


