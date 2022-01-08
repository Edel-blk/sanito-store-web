 const initialState = {
    articles: [], 
    categories: []
 }
 
 export default function rootReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_CATEGORY':
            console.log('ACTION GREEN', action)
            return {
                ...state,
                categories: action.payload
            }
        case 'ADD_ARTICLE':
            console.log('ACTION RED', action)
            return {
                ...state,
                articles: action.payload
            } 
        default: return {...state}    
    }
}