import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import App from './App'
import Form from './Form'
import Child from './Child'

function MainRoute() {
  return (
    <div>
        <Link to="/"> / - app component </Link> <br />
        <Link to="/form"> /forms - form component </Link> <br />
        <Link to="/child"> /child - child component </Link> <br />
        <hr />
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/form" element={<Form/>} />
            {/* <Route path="/child" element={<Child/>} /> */}
            <Route path="/users/:username" element={<Child/>} />
        </Routes>
    </div>
  )
}

export default MainRoute