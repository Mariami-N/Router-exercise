
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import Form from './components/Form';
import Error from './components/Error';
import Navigation from './components/Navigation';
import UserPage from './components/UserPage';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navigation/> */}
    <Routes>
      
      <Route path='/' element = {<Navigation/>}>
        <Route path='Home' element = {<Home/>}/>
        <Route path ='about' element = {<About/>}/>
        <Route path ='users' element = {<Users/>}/>
        <Route path = 'users/:userID' element = {<UserPage />}/>
        <Route path ='Form' element = {<Form/>}/>
        <Route path ='*' element = {<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
    

}

export default App;