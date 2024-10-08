import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        {/* <Router> */}
          <Navbar/>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          {/* <Routes> */}
            <News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="sports"/>
            {/* <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} page={9} country="in" category="technology" />} />
          </Routes>
        </Router>  */}
      </div>
    )
  }

export default App;

