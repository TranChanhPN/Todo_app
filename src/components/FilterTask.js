import React, { useState } from 'react';

import {connect} from 'react-redux';
import { queryTask } from '../store/actions/todoActions';

const  Filtertask=({ query,queryTask }) =>{
    const [queryString, setQueryString] = useState(query);



    const queryString_Changed = e => {
        setQueryString(e.target.value)
    }
    const queryString_KeyUp = e => {
        if (e.keyCode === 13) {
            Query_Click();
        }
    }
    const Query_Click = e => {
        queryTask(queryString);


    }



    return (
        <div className='query'>
            <input type='text' value={queryString} onChange={queryString_Changed} onKeyUp={queryString_KeyUp} />
            <button type="button" onClick={Query_Click}>Query</button>
        </div>

    )
}

const mapStateToProps = state =>({
    query: state.todoList.query,
})

export default connect(mapStateToProps,{queryTask})(Filtertask)
