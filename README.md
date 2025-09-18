# Astro Starter Kit: Minimal

```sh
bun create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment to Vercel

This project is configured for seamless deployment to Vercel. The `vercel.json` file contains all necessary configurations for SSR deployment.

### Steps to Deploy:

1. **Install Vercel CLI** (optional, for local testing):
   ```sh
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel, or
   - Use Vercel CLI: `vercel`

3. **Build Configuration**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Runtime**: 20.x

### Key Features:
- ✅ Server-Side Rendering (SSR) support
- ✅ Automatic static asset optimization
- ✅ Security headers configured
- ✅ Node.js 20.x runtime
- ✅ TailwindCSS integration

### Environment Variables:
Add any environment variables in your Vercel dashboard under Project Settings > Environment Variables.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
