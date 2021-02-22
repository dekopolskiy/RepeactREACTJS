


let initial = {
    users: [],
}

const users_reducer = (state = initial, action) => {
    switch (action.type) {
        case 'SET-USERS':
            return {
                users: [...action.users]
            }
        default:
            return state;
    }
}



export default users_reducer;