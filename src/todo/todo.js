





function TodoList (props){

    

    return ( 
        <div>
           
            <h1>Taches à faire</h1>
            <div>{props.tacheAfaire}</div>
            

            <h2>Taches en cours</h2>
            <div>{props.tacheEncours}</div>
            

            <h2>Taches terminée</h2>
            <div>{props.tacheTerminée}</div>
           
              
        </div>
        
    ); 
}       

        
            
          

export default TodoList