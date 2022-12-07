import React, {useContext} from "react";
import "./index.css"
import {FavoritesContext} from "../../../Provider/FavoritesProvider";
const StarRating = ({item, keyItem, active}) => {
    const {addAsFavorite, removeAsFavorite} = useContext(FavoritesContext);

    const setRate = () => {
        if(active){
            removeAsFavorite(keyItem, item.name);
        } else {
            addAsFavorite(keyItem, item)
        }
    }
    return (
        <div className="star-rating">
                    <div className={"button-animated"}
                        className={active ? "on" : "off"}
                        onClick={() => setRate()}
                    >
                        <span className="star">&#9733;</span>
                    </div>
        </div>
    );
};

export default StarRating;
