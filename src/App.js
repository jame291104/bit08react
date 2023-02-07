
import './App.css';
import { Title } from "./Components/Title.jsx";
import { useState } from "react";
import { Form } from "./Components/Form.js";
import { List } from "./Components/List";

function App() {
  const [lang, setLang] = useState({id: null, name: "", learned: false})
  const [language, setLanguage] = useState([])

  
  return (
    <div className="App">
      <div className='Container'>
        <Title/>
      <h2>Add the developments languages, frameworks and libraries you want to learn</h2>

      <Form lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} />
      <List lang={lang} setLang={setLang} language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}

export default App;
