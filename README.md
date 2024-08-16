# Posts Frontend

This is a repo that contains the client application for the Posts project.

- The client is a React app bootstrapped with Vite.
- The server is a Nest.js application.

## Posts - A Simplified Social Media Platform

Posts is a minimalistic clone of <https://posts.cv/>, which is itself a simplified and scaled-down alternative to X (formerly known as Twitter). We built this clone solely for educational purposes. The following features are planned (and some are already implemented):

- User authentication
- Ability to create text, image, or combined posts
- Ability to follow other users
- Ability to like and comment on posts
- "Highlights" tab: posts from those you follow
- "Everyone" tab: all posts in reverse chronological order

## Getting Started

To get started with this project, follow these steps:

1. **Prerequisites**: Make sure you have Git, Node, and PNPM (the new package manager for Node) installed. If you don't have PNPM, you can install it globally with `npm install -g pnpm`. Additionally, you need to have Docker set up and running to spin up a local Postgres server. If you're new to Docker, you can refer to [this helpful guide](https://docs.docker.com/get-started/).
2. **Repository Setup**: Clone the repository and navigate to the root folder in the terminal.
3. **Dependencies**: Run `pnpm install` to install the dependencies for the client.
4. **Environment Configuration**: Add a `.env` file, similar to the `.env.example` file, and fill in the required environment variables.
5. **Database Setup**: The repo for the backend can be found at https://github.com/rachael-p/posts-api. 
6. **Run Locally**: To start the client, run `pnpm start:app`. 