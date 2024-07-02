# Blog Post Management System

## Overview
This project is a simple blog post management system built using Express.js. It allows users to create, read, update, and delete blog posts. The project demonstrates the use of Express for server-side routing and axios for making HTTP requests.

## Technologies Used
- Node.js
- Express.js
- Body-Parser
- Axios

## Features
- **Create a New Post**: Users can create a new blog post.
- **Read Posts**: Users can view all posts or a specific post by ID.
- **Update a Post**: Users can update an existing post.
- **Delete a Post**: Users can delete a specific post.

## Usage
1. Ensure you have two terminals or command prompts open.
2. In the first terminal, navigate to the `index.js` file directory and start the backend server:
    ```bash
    node index.js
    ```
3. In the second terminal, navigate to the `server.js` file directory and start the frontend server:
    ```bash
    node server.js
    ```

## Endpoints

### Backend (port 3300)
- **GET /posts**: Fetch all blog posts.
- **GET /posts/:id**: Fetch a specific post by ID.
- **POST /posts**: Create a new post.
- **PATCH /posts/:id**: Update an existing post.
- **DELETE /posts/:id**: Delete a specific post.

### Frontend (port 3200)
- **GET /**: Main page displaying all blog posts.
- **GET /new**: Page for creating a new post.
- **GET /edit/:id**: Page for editing an existing post.
- **POST /api/posts**: Endpoint for creating a new post.
- **POST /api/posts/:id**: Endpoint for updating an existing post.
- **GET /api/posts/delete/:id**: Endpoint for deleting a specific post.

## Challenges
- Implementing the frontend and backend interaction.
- Handling errors and edge cases gracefully.
