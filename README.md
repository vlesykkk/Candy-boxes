# Indy Chocolate Shop – React candy game

## Run it
```
npm install
npm run dev        # open http://localhost:5173
```

## Before you submit
1. Replace the placeholder JPGs in `src/assets/candy/` with your real photos (same file names).
2. Update the `calories` (and names/descriptions) in `src/data/candyData.js` from the shop's table. The numbers in there are placeholders.

## How the components are wired together
- `main.jsx` loads Bootstrap CSS and renders `<App />`.
- **App** imports the array in `data/candyData.js` and passes it down as the `candies` prop to `CandyContainer`, with a header.
- **CandyContainer** (the parent) does two jobs: it uses `candies.map()` to render one `CandyCard` per candy inside a Bootstrap grid, and it holds the state `selectedCandy` (`useState(null)`).
- **CandyCard** (the child) is purely presentational. It receives a `candy` prop, shows the small image and the name, and has a "Calories" button. On click it calls `onShowCalories(candy)`, a function the container passed in as a prop (`setSelectedCandy`). Data flows down by props; events flow up by callbacks.
- **CandyModal** receives `selectedCandy` as its `candy` prop. When it is `null` nothing renders; when a candy is set the Bootstrap modal appears with the calories. Closing calls `onClose`, which sets the state back to `null`.

Because the state lives in the container, the 10 cards share one modal instead of each having its own.

```
App ─(candies)→ CandyContainer ─(candy, onShowCalories)→ CandyCard
                      │  selectedCandy state
                      └─(candy, onClose)→ CandyModal
```
