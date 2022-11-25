import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';
import "./css/InputName.css"

const InputName = () => {
    //Para controlar el input el estado siempre va en "" vacias
    const [ userName, setUserName ] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const enterName = () => {
        // alert(userName)
        dispatch(changeName(userName));
        navigate("/pokedex")
    }
    return (
        <div className='inputPage'>
            <input className='inputText'
            type="text" 
            onChange={e => setUserName(e.target.value)} 
            value={userName}
            placeholder="Your Name" />
            <button className='btnInputHome' onClick={enterName}>Enter</button>
        </div>
    );
};

export default InputName;