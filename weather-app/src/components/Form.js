import React from 'react'

    const Form  = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input type="text"
             value={props.value}
             placeholder="Enter a name of the city"
             onChange= {props.change}/>
            <button>Check weather!</button>
        </form>
    )
}

export default Form
