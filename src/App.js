import React from 'react'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Approutes from './Approutes'
import Routepage2 from './Routepage2'
// import Recatpaginate from 'react-paginate'
 const App = () => {
  const handlepageclick=()=>{
    console.log('clicked')
  }
  return (
    <>
   
       <Router>
       <Navbar/>
                <Routes>
                    <Route path='/page1' element=<Approutes/> />
                    <Route path='/page2' element=<Routepage2/> />
                </Routes>
            </Router>
            
    </>
  )
}
export default App
