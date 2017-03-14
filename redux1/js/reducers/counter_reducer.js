export default function counter(state = {count: 1}, action) {
    console.log("changed ", action.type);
    switch (action.type) {
        case "INCR":
            return {count: ++state.count};
        case "DECR":
            return {count: --state.count};
        default:
            return state;
    }
}