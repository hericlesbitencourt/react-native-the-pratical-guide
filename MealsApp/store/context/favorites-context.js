import { createContext } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});


export function FavoritesContextProvider({children}) {
  return (
    <Favorites.Provider>{children}</Favorites.Provider>
  )
}