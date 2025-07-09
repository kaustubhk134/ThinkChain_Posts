# 🧠 ThinkChain Posts

A simple RESTful blog post application built with Node.js, Express, and EJS that allows users to create, view, edit, and delete posts.

## Features

- 🚀 Create new posts with username and content
- 👀 View all posts in a clean interface
- 🔍 View individual posts in detail
- ✏️ Edit existing posts
- 🗑️ Delete posts
- 🎨 Stylish UI with custom CSS
- 📱 Responsive design

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: EJS (Embedded JavaScript templates)
- **Styling**: CSS
- **Package Manager**: npm
- **Other Dependencies**:
  - UUID for unique post IDs
  - Method-Override for RESTful routes
  - Express for server and routing

## Folder Structure
```bash
ThinkChain-Posts/
├── index.js            # Main server file
├── package.json        # Project dependencies
├── public/
│   └── style.css       # Stylesheet
├── views/
│   ├── edit.ejs        # Edit post page
│   ├── index.ejs       # Main posts page
│   ├── new.ejs         # Create new post page
│   └── show.ejs        # Post detail page
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repository and submit a pull request.    

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kaustubhk134/ThinkChain_Posts.git

2. Navigate to the project directory:
   ```bash
   cd ThinkChain-Posts
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node index.js
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000/posts
   ```
