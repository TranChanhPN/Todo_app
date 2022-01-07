import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
    completeTask,
    deleteTask,
} from '../store/actions/todoActions'

const Itemtodo = ({ item, completeTask, deleteTask }) => {
    const btnComplete_Click = () => {
        completeTask(item.id)
    }
    const btnDelete_Click = () => {
        deleteTask(item.id)
    }
    console.log(item);
    return (
        <li className={item.complete ? 'completed' : ''}>

            {item.tittle}
            {item.complete}
            <div>
                {!item.complete && <button onClick={btnComplete_Click}>Complete </button>}
                <button onClick={btnDelete_Click}>Delete </button>
            </div>

        </li>
    )
}

Itemtodo.propTypes = {
    item: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, {
    completeTask,
    deleteTask,
})(Itemtodo);


