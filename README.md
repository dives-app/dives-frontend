<h1 align="center">
  dives-frontend
</h1>

## Getting Started

First, go into your "projects" directory.

Clone this repo:

```shell
git clone https://github.com/dives-app/dives-frontend.git
# or if you use SSH key
git clone git@github.com:dives-app/dives-frontend.git
# or GH CLI
gh repo clone dives-app/dives-frontend
```

Create your own `.env.development` file:

```shell
cp .env.sample .env.development
```

If you run your backend GraphQL Endpoint on a different address, you can adjust it in this file.

Now you can run the NextJS development server:

```bash
yarn dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the app.

### Other useful commands

`yarn build-start` - builds and starts the app locally (with local API)

`yarn gen` - to run [`graphql-code-generator`](https://www.graphql-code-generator.com/)

`yarn analyze` - runs bundle analyzer and generates reports in `.next/analyze`

`yarn as` - short for "analyze and start" - runs `yarn analyze` and serves it using [`http-server`](https://www.npmjs.com/package/http-server) (install it globally if you want to use this command)

`yarn clean` - removes `node_modules` and `.next` folders

## CI/CD

Each push to main triggers build and deploy on Google Cloud Run and the website becomes available at
[dives-txvot44owa-ez.a.run.app](https://dives-txvot44owa-ez.a.run.app/).

## Knowledge base

Next.js:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js/)

Storybook:

- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)
- [Learn Storybook](https://www.learnstorybook.com/) - tutorials
- [Component Driven](https://www.componentdriven.org/) - website about component driven user
  interfaces
