import { useState } from 'react';
import './App.css';

function App() {
  let date = new Date();
  const weekDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const [toDos,setToDos] = useState([]);
  const [toDo,setToDo] = useState('');
  console.log(toDos)
  return (
  <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {weekDayNames[date.getDay()]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setToDo(event.target.value)} onKeyDown={(event)=>{
          if(event.key==="Enter" && toDo.trim() !== ''){
            setToDos([...toDos,{id: Date.now(),task:toDo,status:false}])
            setToDo('')
          }
        }} type="text" placeholder="🖊️ Add item..." />
        {/* <i onClick={()=>setToDos([...toDos,{id: Date.now(),task:toDo, status:false}])} className="fas fa-plus"></i> */}
        <i onClick={()=>{
            if(toDo.trim()!==''){
              setToDos([...toDos,{id: Date.now(),task:toDo, status:false}])
              setToDo('')
            }
          }
        } className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((data)=>{
            return(
            <div className="todo">
              <div className="left">
                <input checked={data.status} onChange={(e)=>{
                 setToDos(toDos.map((obj)=>
                  obj.id === data.id ? {...obj,status : e.target.checked} : obj
                 )) 
                  console.log(data)
                }} type="checkbox" name="" id=""/>
                {
                  data.status ? <p><s>{data.task}</s></p> : <p>{data.task}</p>
                }
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>setToDos(toDos.filter(obj => obj.id !== data.id))}></i>
              </div>
            </div>
            )
          })
        }
      </div>
    </div> 
  );
}

export default App;
