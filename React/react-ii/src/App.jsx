import { useEffect, useState } from 'react'
import Child from './Child'
function App() {
  let [count, setCount] = useState(0);
  let [visible, setVisible] = useState(true);
  
  // case 1: when any of the phase happens
  // useEffect(()=>{
  //   console.log('useEffect is running!!!')
  // });

  // case 2: when mounting happens
  // useEffect(()=>{
  //   console.log('useEffect is running on mounting only')
  // },[]);


  // case 3: when updation is happening
  useEffect(()=>{
    console.log('useEffect is running on updation !!!')
  },[count]);

  
  return (
    <>
     <h1>I am learning about Hooks in react</h1>
     <h2>Value of State(count): {count}</h2>
     <button onClick={()=>setCount(++count)}>Update State</button> <br />
     <button onClick={()=>setVisible(!visible)}>Toggle visibility</button> <br />
     {/* conditional rendering .. */}
     {visible && <Child/>  }
    </>
  )
}

export default App
