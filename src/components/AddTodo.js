import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
    addTask,
} from '../store/actions/todoActions'
import { connect } from 'react-redux';



const Addtodo = ({ addTask }) => {

    const [todoTitle, setTodoTitle] = useState(" ");
    const todoTitle_Changed = e => {
        setTodoTitle(e.target.value)
    }
    const todoTitle_KeyUp = e => {
        if (e.keyCode === 13) {
            addTodoTitle_Click();
        }
    }
    const addTodoTitle_Click = e => {
        const newTodo = {
            id: uuidv4(),
            tittle: todoTitle,
            complete: false

        }
        addTask(newTodo);
        setTodoTitle('');


    }


    return (
        <div className='addtodo'>
            <input type='text' value={todoTitle} onChange={todoTitle_Changed} onKeyUp={todoTitle_KeyUp} />
            <button type="button" onClick={addTodoTitle_Click}>Add</button>
        </div>
    )
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, { addTask })(Addtodo)
