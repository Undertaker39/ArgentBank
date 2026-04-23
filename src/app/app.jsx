import { Provider } from 'react-redux'
import { store } from './store.js';
import { BrowserRouter, Route, Routes } from "react-router"
import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'
import Home from '../pages/Home/index.jsx'
import Sign_in from '../pages/Sign_in/index.jsx'
import User from '../pages/User/index.jsx'
import Badway from '../pages/404/index.jsx'

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/sign_in' element={<Sign_in/>}/>
                    <Route path='/user' element={<User/>}/>
                    <Route path='*' element={<Badway/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Provider>
    )
}

export default App