import React from 'react'
import { InputGroup } from 'react-bootstrap/InputGroup';
import {  } from "../App.css";
import { v4 as uuidv4 } from 'uuid';


export const Form = ({lang, setLang, language, setLanguage}) => { 

    const handleInput = (e) =>{
        setLang({...lang, id: uuidv4(), name: e.target.value})
    }

    const handleAdd = (e) => {
        e.preventDefault()
        setLanguage([...language, lang])
        setLang({id: null, name: "", learned: false})
    }
  return (
    <div className="input-group">
      <input type="text" placeholder="Name of the ...." onInput={handleInput} value={lang.name}/>
      <button onClick={handleAdd} className="btn btn-outline-secondary" type="button">Add</button>
      </div>
  )
}
