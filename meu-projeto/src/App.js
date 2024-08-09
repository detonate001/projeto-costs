import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Footer from './components/layout/Footer'

import Container from './components/layout/Container'
import Barnav from './components/layout/Barnav'
import Projects from './components/pages/Projects'



function App() {
  return (
 <Router>
  <Barnav/>
 <div>
 ;/
 </div>
 <Container customClass="minHeight"> 
             <Routes>
            <Route path='/' exact='true' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/projects' element={<Projects/>}></Route>
            <Route path="/newproject" element={<NewProject />}/> 
          </Routes>
          </Container>
     <Footer/>
 </Router>

  );
}

export default App;