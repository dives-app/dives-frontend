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

## Storybook

(temporarily not working, skip this section)

Launch Storybook:

```shell
yarn storybook
```

Open [http://localhost:5001](http://localhost:5001) with your browser to see the Storybook.

## CI/CD

Each push to main triggers build and deploy on Google Cloud Run and the website becomes available at
[dives-txvot44owa-ez.a.run.app/](https://dives-txvot44owa-ez.a.run.app/) (unfortunately until we
have a custom domain we're unable to change the address)

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
