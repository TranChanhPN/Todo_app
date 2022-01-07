const initialState={
    todoList:[],
    query: '',
}

const todoReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_LIST_TASK':
            return {
                ...state,
                todoList: action.payload.todoList,
                query: action.payload.query
            }
        case 'COMPLETE_TASK':
            return{
                ...state,
                todoList: state.todoList.map(item =>{
                    if(item.id === action.payload) {
                        item.complete=! item.complete;
                        console.log(`item sau khi sua: ${item.complete}`);
                    }
                    return item
                }),
            }
        case 'ADD_TASK':
            return {
                ...state,
                todoList: [...state.todoList,action.payload]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                todoList:state.todoList.filter(item=>item.id !== action.payload)
            }
        case 'QUERY_TASK':
            return {
                ...state,
                query:action.payload,
            }
        default:
            return state
    }
}

export default todoReducer;