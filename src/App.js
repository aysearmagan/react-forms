import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import MyForm from './components/MyForm';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthPlace, setBirthPlace] = useState('');

  const submitHandler=({newName,newSurname,newEmail,newBirthYear,newBirthPlace})=>{
    setName(newName)
    setSurname(newSurname)
    setEmail(newEmail)
    setBirthYear(newBirthYear)
    setBirthPlace(newBirthPlace)

  }
  return (
    <div className="App">
      welcome {name}
   <MyForm submitHandler={submitHandler}/>
    </div>
  );
}

export default App;
