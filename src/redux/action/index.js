export const IncrementCart = (value) =>{
    return (dispatch)=>{
            dispatch({
                type: "Increment",
                payload: value
            })
    }
}

export const DecrementCart = (value) =>{
    return (dispatch)=>{
        dispatch({
            type: "Decrement",
            payload: value
        })
}
}