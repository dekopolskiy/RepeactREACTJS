import React from 'react';
import axios from 'axios'
import styles from './UsersClass.module.css'


class UsersClass extends React.Component {
    //теряешь контекст this.loadUsers, отдаешь как функцию, как колбэк
    render() {
        return (
            <div>
                <button onClick={this.loadUsers.bind(this)}>load users</button> 
                <div className={styles.allUsers}>
                    { 
                    this.props.users.map(i => {
                        return (
                            <div className={styles.user}>
                                {`${i.name}, email: ${i.email}, phone: ${i.phone}`}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    loadUsers() {
        if (this.props.users.length == 0) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => this.props.setUsers(response.data));
        }
    }
}


export default UsersClass;