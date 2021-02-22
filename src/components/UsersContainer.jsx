import { connect } from "react-redux";
import UsersClass from "./UsersClass";


const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => { dispatch({ type: 'SET-USERS', users: users }) }
    }

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);


export default UsersContainer;