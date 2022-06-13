# gokomodo-frontend-test

> Personal project for Gokomodo frontend test.

## Stack used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://typescriptlang.org/)
- [SWR](https://swr.vercel.app/) for data fetching + caching

## Developing

A Node.js LTS setup with [yarn (v1)](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run unit tests
yarn test
```

## Architecture

### Data fetching

We use [Next.js API routes](https://nextjs.org/docs/api-routes/introduction) to wrap requests heading to the Random User API. Then we use [SWR](https://swr.vercel.app/) for our data-fetching logic, allowing for data fetches to be wrapped in a custom hook.

### Directory structure

- `components/` - UI/layout components that are used globally throughout project.
- `pages/` - Next.js pages contain pages for the web app.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `shared/` - contains helper data, interfaces, and hooks.
