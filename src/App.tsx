import React ,{ useState } from 'react';
import './App.css';
import { Note } from './Interfaces/NoteInterface';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id : (new Date).toString(),
    title: "Meetings",
    text: "Schedule meetings with QA Team",
    color: "#dfdfdf",
    date: (new Date).toString()
  }]);



  return (
    
  );
}

export default App;
