
// import './App.css';
import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
// import Home from './pages/Home';
function App() {
  const [input, setinput] = useState("")
  const [addinput, setaddinput] = useState([])
  const [message, setmessage] = useState("")
  const inputchange=(e)=>{
    
    setinput(e.target.value)
    setmessage("")
    
  }
  const AddInput=(e)=>{
    setinput(e.target.value)
    // localStorage.setItem("data",addinput)
    if(input.length){
      setaddinput([input,...addinput])
      // localStorage.setItem("data",addinput)
      // addinput.reverse()
      setinput("")
      setmessage("")
      // console.log(message)
      
    }else{
      setmessage("Please write something")
    }
    setinput("")
    
  }
  const DeleteAll=()=>{
    
    setaddinput([])
    
  }
  const deletemessage=()=>{
    setmessage("")
  }
  const  Deletelm =(e,i)=>{
  //  console.log(e,i)
   let tempArray = [...addinput]
   tempArray.splice(i, 1)
   setaddinput(tempArray)
  
  }
 
 
  return (
 <div className='w'>
  <h3 className='text-primary mx-3 bg-light p-2 '> My ToDo App</h3>
<div className='container shadow  mb-2  rounded mx-2 d-flex p-2 bg-success w-50 '>
 <input type="text" className=" m-2 p-2 my-2" placeholder="please write your todo" onChange={inputchange}/>
 <button className='btn btn-info mx-2 ' onClick={AddInput}>Add</button>
 <button className='btn btn-danger mx-2' onClick={DeleteAll}>Delete all</button><br/>
 
</div>
<h4 className='mx-3 text-danger  w-25 p-2 '> {message}</h4><b onClick={deletemessage}>{}</b>
{
// console.log(localStorage.getItem(data))
  addinput.map((e,i)=>{
    return (
     <div className='mx-2 w-50'>
       <div className='bg-info shadow  mb-2 bg-info rounded' key={i}>
     <div className=' p-2 my-2  d-flex justify-content-between'>
     <b className='mx-2 mt-2'>{`${i+1}. ${e}`}  </b>
      <button className='btn btn-danger' onClick={()=>Deletelm(e,i)}>Delete</button>
     </div>
      </div>
     </div>
    )
  })
}

 </div>
  );
}

export default App;
