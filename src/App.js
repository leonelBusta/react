import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/addUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';



function App() {

    const usersData = [
            { id: uuidv4(), name: 'Leonel', username: 'Bustamante' },
            { id: uuidv4(), name: 'Oscar', username: 'Contresas' },
            { id: uuidv4(), name: 'Bernardo', username: 'Lopez' },
        ]
        //state
    const [users, setUsers] = useState(usersData);
    // add users
    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([...users, user])
    }

    // Delete Users
    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    // Edit
    const [editing, setEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        id: null,
        name: '',
        username: ''
    });
    const editRow = (user) => {
        setEditing(true);
        setCurrentUser({
            id: user.id,
            name: user.name,
            username: user.username
        })
    }
    const upDateUser = (id, upDateUser) => {
        setEditing(false);

        setUsers(users.map(user => (user.id === id ? upDateUser : user)))
    }

    return ( <
        div className = "container" >
        <
        h2 > Team app < /h2> <
        div className = "flex-row" >
        <
        div className = "flex-large" >

        {
            editing ? ( <
                div >
                <
                h3 > Edita usuarios < /h3> <
                EditUserForm currentUser = { currentUser }
                upDateUser = { upDateUser }
                /> <
                /div>
            ) : ( <
                div >
                <
                h3 > Agrega usuarios < /h3> <
                AddUserForm addUser = { addUser }
                />     <
                /div>
            )
        }


        <
        /div> <
        div className = "flex-large" >
        <
        h2 > Vista de usuarios < /h2> <
        UserTable users = { users }
        deleteUser = { deleteUser }

        editRow = { editRow }
        />  <
        /div> <
        /div> <
        /div>
    );
}

export default App;