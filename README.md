This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features implemented

1. Home Page with all 1302 pokemon's names rendered
2. Individual page for Pokemons (with navigation back to main page and buttons to add to/remove from roster)
3. Roster sidebar allowing for up to 6 pokemons (names on the roster can also be clicked to navigate to the pokemon's page for easier deletion)

### API and Data

All data in this assignment has been fetched from https://pokeapi.co/, including the sprite images. For the rendering of sprite images, the "front_default" image URL was used.

### Design details

1. For the Pokemon Search Bar, the client component, "Search Bar", was used to dynamically render the search results as the user types. Since there was a need to render the server-side component, "PokemonData" (responsible for fetching the list of all pokemon names on the home page), the server component was passed as a child to the client component, following the composition pattern outlined at https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns.
2. To keep Roster data, a global react Context called "RosterContext" was created to track the state.

