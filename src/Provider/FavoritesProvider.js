import React, {createContext, useState} from "react";
import {isExistElement} from "../utils";

const initialState = {
    countries: [], languages: [], continents: []
}
export const FavoritesContext = createContext(initialState);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(initialState);

   const addAsFavorite = (key="countries", data)=> {
       if(favorites[key].length > 0){
           const list = favorites[key];
           const exist = isExistElement(list, data);
           if(exist) return;
       }
       setFavorites({...favorites, [key]: [...favorites[key], data] })
   }


   const removeAsFavorite = (key = "countries", nameToRemove)=> {
       const list = favorites[key];
       const filteredItems = list.filter(item => item.name !== nameToRemove);
       setFavorites({...favorites, [key]: filteredItems })
   }
    return (
        <FavoritesContext.Provider value={{ favorites, removeAsFavorite, addAsFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};
