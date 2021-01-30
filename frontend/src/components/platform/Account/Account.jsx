import React, { useState } from 'react'
import axios from 'axios'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import Drawer from '../../layout/Drawer/Drawer'
import RegisterForm from './RegisterForm'


const URL = "http://localhost:3003/api/users"


function Account(props) {

    const initialUser = { name: '', password: ''}
    const [user, setUser] = useState(initialUser)

    const registerNewUser = () => {

        // const username = user.name
        // const password = user.password

        if(user.name && user.password) {
            axios.post(URL, { ...user })
                .then(resp => {
                    console.log('novo usuario')
                    // console.log(user)
                    setUser(initialUser)
                })
                .then(resp => axios.get(URL).then(resp => console.log(resp)))
        }
    }

    return (
            <div>
                <List >
                    <a href={`#${props.title.toLowerCase()}`} key={`${props.title.toLowerCase()}`} >
                        <ListItem button >
                            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary={props.title} />
                        </ListItem>
                    </a>
                    <Divider />
                    <ListItem>
                        <RegisterForm 
                            handleClick={() => registerNewUser()}
                            user={user}
                            setUser={(a) => setUser(a)} /> 
                    </ListItem>
                </List> 
            </div>
    )
}

export default Account