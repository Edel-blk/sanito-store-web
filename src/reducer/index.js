 const initialState = {
    articles: ['Datos de inventario'], 
    categories: []
 }
 
 export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_CATEGORY':
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }    
        default: return {...state}    
    }
}