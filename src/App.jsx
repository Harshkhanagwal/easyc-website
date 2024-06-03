import React from 'react'
import Home from './Pages/Home'
import Aside from './Components/Aside/Aside'

import { useContext } from 'react';
import { Globalcontext } from './Context/Context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './Pages/Subpages/Overview';
import Header from './Components/Header/Header';
import Array from './Pages/Subpages/Array';

const App = () => {
  const { aside, SetAside } = useContext(Globalcontext);

  return (
    <>

      <Router>

        <Header />


        <div className="main">

          <Aside state={aside} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guide/overview' element={<Overview />} />
            <Route path='/guide/array' element={<Array />} />
            <Route path='/*' element={<h1>ERROR</h1>} />
          </Routes>
          {/*  */}
        </div>

      </Router>

    </>
  )
}

export default App