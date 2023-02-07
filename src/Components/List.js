import React from 'react';
import '../App.css';
import { Item } from './Item.js';

export const List = ({ language, setLanguage }) => {
  const elements = language.map((lang) => (
    <Item key={lang.id} id={lang.id} name={lang.name} language={language} setLanguage={setLanguage} />
  ));

  return (
    <div>
      <ul className='list-group'>{elements}</ul>
    </div>
  );
};

export default List;