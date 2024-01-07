import React,{useState} from 'react'

function Form() {
    let [username, setUsername] = useState("");
    let [pwd, setPwd] = useState("");

    const submitHandler = (event)=>{
        event.preventDefault();
        console.log('Username: ', username)
        console.log('pwd: ', pwd)
        console.log('Form submitted successfully!')
    }
  return (
    <div>
        <form>
            <h1>Upgrad membership form</h1>
            <input type="text"  placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)} /> <br />
            <input type="password" placeholder='Enter password' onChange={(e)=>setPwd(e.target.value)} /> <br />
            <button onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Form