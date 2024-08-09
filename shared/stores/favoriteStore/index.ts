import { create } from "zustand";



export type FavoriteState = {
    favorite: Array<number> | [];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
};

export const useFavoriteStore = create<FavoriteState>(
  (set): FavoriteState => ({
    favorite: [],
    addFavorite: (id: number) =>
      set((state) => ({ favorite: [...state.favorite, id] })),
    removeFavorite: (id: number) =>
      set((state) => {
        return { favorite: [...state.favorite.filter((item) => item !== id)] };
      }),
  })
);