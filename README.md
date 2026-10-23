# Photo Gallery

## Run

```bash
npm install
npm run dev
```

## File structure

```
src/
  components/   Gallery, SearchBar, PhotoCard, and HeartIcon
  hooks/        useFetchPhotos and useFavorites
  utils/        localStorage helpers
  App.jsx       page title and Gallery
```

- `useFetchPhotos` loads the photos and tracks loading and error state.
- The favourites reducer adds or removes a photo ID with one `TOGGLE` action.
- `useCallback` keeps the search handler stable for the memoized search input.
- `useMemo` only filters photos when the list or search text changes.
