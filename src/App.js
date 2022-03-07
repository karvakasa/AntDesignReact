import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SingleItem from "./SingleItem"
import ItemsFetching from "./ItemsFetching"
import './App.css'

function App() {

  const [data, setData] = useState([])

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Router>
        <Routes>
          <Route exact path="/" element={
            <ItemsFetching 
              setData={setData}
              data={data}
            />
          }/>
          <Route path="/giftTarget/:id" element={
            <SingleItem
              data={data}
            />
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
