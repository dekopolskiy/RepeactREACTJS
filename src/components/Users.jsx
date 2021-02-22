import React from 'react';
import axios from 'axios'
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length == 0) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => props.setUsers(response.data));
    }

    return (
        <div className={styles.allUsers}>
            {props.users.map(i => {
                return (
                    <div className={styles.user}>
                        {`${i.name}, email: ${i.email}, phone: ${i.phone}`}
                    </div>
                )
            })}
        </div>
    )

}


export default Users;