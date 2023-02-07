import React from 'react'
import '../App.css'
import { Button } from 'react-bootstrap/Button';

export const List = ({language}) => {
    const deleteLang = (id) => {
        const filterlanguage = language.filter(lang => lang.id !== id)
        setLanguage("")
    }
    const elements = language.map(lang => <li className="list-group-item list-group-item-primary" key={lang.id}>
        {lang.name}
        <div className='divlist'>
        <button onClick={() => deleteLang(lang.id)} type="button" className="btn btn-outline-success">Learned</button>
        <button type="button" className="btn btn-outline-dark">Rename</button>
        </div>
        </li>
        )

  return (
    <div>
       <ul className="list-group">
         {elements}
       </ul>
    </div>
  )
}

export default List