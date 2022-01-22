import React from 'react';
import { useState } from 'react';
import './App.css';

interface Note{
  id:string,
  title:string,
  text:string,
  color:string,
  date:string 
}

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id : (new Date).toString(),
    title: "Meetings",
    text: "Schedule meetings with QA Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);



  return (
    <div className="App">
    
    </div>
  );
}

export default App;
