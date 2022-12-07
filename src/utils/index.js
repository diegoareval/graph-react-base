export const isExistElement = (arr = [], comparedValue)=> {
    return arr.some(elem => elem === comparedValue)
}

export const isExistOnFavorites = (list, obj)=> {
    return list.includes(obj)
}
