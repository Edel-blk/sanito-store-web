export function addCategory(info){
    return {type: 'ADD_CATEGORY', payload: info}
}

export function addArticles(info){
    return {type: 'ADD_ARTICLE', payload: info}
}