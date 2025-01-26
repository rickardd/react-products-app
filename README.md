# Run Commands

- Use `npm run dev` to start the React server.
- Use `npm run test` to run the tests.

## Tech Stack

Considering the short deadline, I used React as it was the most fresh in my mind. I utilized:

- Zustand
- Vitest
- TypeScript

The Zustand store holds state properties, including setting, getting, and manipulating state. This approach simplifies all components, as they primarily render the store state. I didn't use `useMemo` or `useCallback` because there were no unnecessary re-renders.

## Regarding unnecessary re-renders,

If I use the store like this:

```javascript
const { products, setCategories, selectedCategories } = useStore();
```

the component will re-render each time the store updates, even if we don't use those properties in this component.

However, if we subscribe to each store property like this, the component will only render when any of these properties change.

```typescript
const products = useStore((state) => state.products);
const setCategories = useStore((state) => state.setCategories);
const selectedCategories = useStore((state) => state.selectedCategories);
```

This reduces the need of useMemo and useCallback

## Other

Unfortunately, I didn't have time to complete the entire test. What remains is the implementation of infinite scrolling.
