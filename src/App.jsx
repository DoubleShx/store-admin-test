import './App.css';
import LoginPage from './pages/loginPage/login';
import Layout from './components/layout/layout';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import {   BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch, 
  Navigate,
  useNavigate} from 'react-router-dom';
import TheContent from './components/TheContent';


function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const cookie = new Cookies()
  const navigate = useNavigate()

  useEffect(() => {
    console.log('login')
    if (!cookie.get('access_token')) {
      setLoggedIn(false)
      navigate('/login')
    }
  }, [])
  return (
    <div className="App" >

    
      {/* <Routes>
        <Route exact path="/" element={<LoginPage />}>
        </Route>
        <Route exact path="/users" element={<LoginPage />}>
        </Route>
        <TheContent />
      </Routes> */}
      <TheContent />
      <Layout /> 
      
           
    </div>
  );
}

export default App;
