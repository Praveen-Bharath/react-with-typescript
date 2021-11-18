import React,{ useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name:string;
    age:number;
    url:string;
    note?:string;
  }[]
} 

function App() {
   const [people,setPeople]= useState<IState["people"]>([
    {
      name: "M S Dhoni",
      age: 35,
      url: "https://c.ndtvimg.com/2021-04/1lrriqc8_ms-dhoni-bcciipl_625x300_20_April_21.jpg",
      note: "World Best Captain, Best Wicket keeper and Best Finisher",
    },
      ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
