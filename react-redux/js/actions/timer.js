let updateAction = (dispatch, getState)=> {
    let payload = {then: getState().timer.now};
    dispatch({type: "FETCHING"});
    return fetch("http://localhost:8082/date")
        .then((response)=> response.json())
        .then((json)=> {
            payload.now = json.now;
            dispatch({
                type: "UPDATE_TIME",
                payload: payload
            });
        });

};

export default updateAction;