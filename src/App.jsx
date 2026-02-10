import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Landingpage from './pages/LandingPage.jsx';
import CreatepostPage from './pages/CreatepostPage.jsx';
import ShowPost from './pages/showPost.jsx';
const App = () => {
  return (
   <Router>
      <Routes>
          <Route path='/' element= {
			      <Landingpage />
		  }/>
          <Route path='/create-post' element= {
			      <CreatepostPage />
		  }/>
          <Route path='/posts' element={
            <ShowPost/>
          } />
      </Routes>
   </Router>
  )
}

export default App