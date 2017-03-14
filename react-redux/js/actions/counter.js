module.exports = {
    onIncrement: {
        type: "INCR"
    },
    onDecrement: {
        type: "DECR"
    },
    onIncrementIfOdd: (dispatch, getState) => {
        let count = getState().counter.count;
        if (count % 2 == 1) {
            dispatch({
                type: "INCR"
            });
        }
        return;
    },
    onIncrementIfAsync: ()=> {
        return (dispatch) => {
            setTimeout(()=> {
                dispatch({
                    type: "INCR"
                });
            }, 1000)
        }
    }
};