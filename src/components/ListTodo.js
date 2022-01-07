import React, { useEffect } from 'react'
// import ProTypes from 'prop-types'
import { connect } from 'react-redux'

import { getListTask } from '../store/actions/todoActions'
import Itemtodo from './ItemTodo'



const Listtodo = ({ todoList,query, getListTask }) => {
    useEffect(() => {
        getListTask()
    }, []);


    return (
        <div>
            <ul>
                {console.log('query is')}
                {console.log(query)};
                {console.log('query is')}
                {todoList
                .filter(item=>item.tittle.includes(query))
                .map(item => (<Itemtodo key={item.id} item={item}></Itemtodo>

                ))}
            </ul>

        </div>
    )
}
const mapStateToProps = state => ({
    todoList: state.todoList.todoList,
    query: state.todoList.query,
})
export default connect(mapStateToProps, { getListTask })(Listtodo)


