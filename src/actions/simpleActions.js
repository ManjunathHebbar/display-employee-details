// simpleAction function to get user details
export const simpleActions = (value) => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: value
    })
    
}

// userchangeAction function
export const userChangeActions = (value) => dispatch => {
    dispatch({
        type: 'SIMPLE_CHANGE',
        payload: value
    })
    
}
