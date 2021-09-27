import logo from './logo.svg';
import './App.css';
import TodoList from './todo/todo';
import { useEffect, useState } from "react";

function App() {

  /* variable d'etat objet  */
  const [taches, setTaches] = useState ({taches:"",state:"En cours"});
  
  /* variable d'etat qui est un tableau */
  const [todoList, setTodoList] = useState ([]);
    
  /* recuperation de ce qu'il y a dans l'input */
  const handleInputTache = (e) =>{
     setTaches({...taches, taches:e.target.value})
  }
  
  /* config du boutton valider , je recup la taches pour la mettre dans le tableau (todoList)  */
  const registerTache = () => {
     setTodoList([...todoList, taches]);
     console.log(todoList)
  };
   
  /*use effect pour mettre à jour le tableau (todoList) a chaque fois qu'on clique le tableau se met à jour   */
  useEffect(() =>{console.log(todoList)},[todoList]);
  
  /* fonction pour switch la tache de a faire à en cours */
  const switchEnCours = (taskToswitch,) =>{
   setTodoList ((todoList) =>
    todoList.map((item) =>
      item === taskToswitch ? {...item, state:"Termine"} : item 
      )
    );
  };

  /*  de en cours à terminer */
  const switchTerminé = (taskToswitch) => {
    setTodoList ((todoList) =>
    todoList.map((item) =>
      item === taskToswitch ? {...item, state :"Supprimé"} : item
      )
    );
  };


   

  const todoEnCours = () => {
    return todoList.map ((insertTaches)=> {
      if (insertTaches.state === "En cours") {
        return (
          <div>
            <p>{insertTaches.taches}</p>
            <button onClick = {()=>switchEnCours(insertTaches)}>
              {insertTaches.state}
            </button>
          </div>
        );
      } else {
        return <div></div>
      }
    }
    )}
   
    const todoTerminee = ()=> {
      return todoList.map ((insert)=> {
        if (insert.state === "Termine") {
          return (
            <div>
              <p>{insert.taches}</p>
              <button onClick = {()=>switchTerminé(insert)}>
              {insert.state}</button>
            </div>
          );
        } 
      });
    };

    const todoSupprimee = ()=> {
        return todoList.map ((done)=> {
          if(done.state === "Supprimé") {
            return (
              <div>
                <p>{done.taches}</p>
              </div>
            );
          }
        });
      }
    
   

  return (
    <div className="App"> 
      
      <h1>To do list</h1>

      <input onChange ={handleInputTache}></input>
      <button onClick = {registerTache}>Ajouter Tâches</button>
             
      <TodoList tacheAfaire={todoEnCours()}
                tacheEncours={todoTerminee()} 
                tacheTerminée={todoSupprimee()}
      />
    </div>
 );
} 

export default App;
