const todoList = [
    { id: 1, tittle: 'Task 1', complete: true },
    { id: 2, tittle: 'Task 2', complete: false },
    { id: 3, tittle: 'Task 3', complete: true },
    { id: 4, tittle: 'Task 4', complete: false },
    { id: 5, tittle: 'Task 5', complete: true },
]
const query ='';

export const getListTask = () => dispatch => {
    dispatch({
        type: 'GET_LIST_TASK',
        payload: {todoList,query}
    })
}
export const completeTask = id => dispatch => {
    dispatch({
        type: 'COMPLETE_TASK',
        payload: id,
    })
}
export const deleteTask = id => dispatch => {
    dispatch({
        type: 'DELETE_TASK',
        payload: id,
    })
}
export const addTask = newTask => dispatch => {
    dispatch({
        type: 'ADD_TASK',
        payload: newTask,
    })
}
export const queryTask = queryString => dispatch => {
    dispatch({
        type: 'QUERY_TASK',
        payload: queryString,
    })
}

