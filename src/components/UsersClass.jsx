import React from 'react';
import axios from 'axios'
import styles from './Users.module.css'


class UsersClass extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.allUsers}>

                    {this.users.map(i => {
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
}


export default UsersClass;