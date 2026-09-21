# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Use Node.js 24.21.0 and npm 12.0.2. With [nvm](https://github.com/nvm-sh/nvm) installed, select the pinned Node version, install the pinned npm version, and install dependencies from the lockfile:

```bash
nvm install
nvm use
npm install --global npm@12.0.2
npm ci
```

The `.nvmrc` file pins Node.js. `package.json` declares the Node.js and npm versions and checks them before npm install, CI, and run commands. Docker uses the same versions.

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Use the same Node.js and npm versions on your host. Deploy the output of `npm run build` along with the Express server and package files:

```
├── package.json
├── package-lock.json
├── server.js
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

Install production dependencies with `npm ci --omit=dev`, then start the server with `npm start`.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
