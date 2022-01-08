export function addCategory(info){
    return {type: 'ADD_CATEGORY', payload: info}
}

export function addArticles(info){
    console.log('ACTION', info);
    return {type: 'ADD_ARTICLE', payload: info}
}