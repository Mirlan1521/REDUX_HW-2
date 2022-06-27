import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNameAction, clearNameAction, createUserAction} from "../../actions/Actions";
import {clear} from "@testing-library/user-event/dist/clear";

const MainPage = () => {

    const dispatch = useDispatch();
    const  users = useSelector(state => state.users.users);
    const  name = useSelector(state => state.users.name);
    const  clear = useSelector(state => state);


    const  createUser = () => {
        dispatch((createUserAction(name)))
        dispatch(clearNameAction(name))

    }
    const  changeInput = (e) =>{
        dispatch((addNameAction(e.target.value)))
    }
    // const  clearInput = () =>{
    //     dispatch(clearNameAction(clear))
    // }
    return (
        <div>
            main page
            <div>
                <input type="text" onChange={changeInput} value={name}  />
                <button onClick={createUser} >create user</button>
            </div>
            <ul>
                <li>USERS:</li>
                {users.map((user, key )=><li key={key}>{user}</li>)}
            </ul>
        </div>
    );
};

export default MainPage;