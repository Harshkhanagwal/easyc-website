import React from 'react'
import Home from './Pages/Home'

import { useContext } from 'react';
import { Globalcontext } from './Context/Context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Overview from './Pages/Subpages/Overview';
import Header from './Components/Header/Header';
import Array from './Pages/Subpages/Array';
import Queue from './Pages/Subpages/Queue';
import Stack from './Pages/Subpages/Stack';
import Linkedlist from './Pages/Subpages/Linkedlist';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Download from './Pages/Subpages/Download';

const App = () => {

  return (
    <>

      <Router>

        <Header />


        <div className="main">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/guide/' element={<Overview />} />
            <Route path='/guide/overview' element={<Overview />} />
            <Route path='/guide/download' element={<Download />} />
            <Route path='/guide/array' element={<Array />} />
            <Route path='/guide/queue' element={<Queue />} />
            <Route path='/guide/Stack' element={<Stack />} />
            <Route path='/guide/Linkedlist' element={<Linkedlist />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
          {/*  */}
        </div>

      </Router>

    </>
  )
}

export default App