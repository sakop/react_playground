export default function (state = {count: 0, then: new Date().getTime(), now: new Date().getTime()}, action) {
    if (action.type === "UPDATE_TIME") {
        return {now: action.payload.now, then: action.payload.then, count: state.count + 1};
    }else if(action.type==="FETCHING"){
        return {now: "fetching", then: "fetching", count: state.count};
    }
    return state;
}