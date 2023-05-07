import { useState } from 'react';
import { sculptureList } from './data'

function App() {
  const [currentSculpture, setcurrentSculpture] = useState(0)
  const [showDescription, setshowDescription] = useState(false)
  return <div>
    <button
      disabled={currentSculpture < 1 ? true : false}
      onClick={() => {
        if (currentSculpture > 0) {
          setcurrentSculpture((prevState) => prevState - 1)
        }
      }
      }
    >Previous</button>
    <button
      disabled={currentSculpture === sculptureList.length - 1 ? true : false}
      onClick={() => {
        if (currentSculpture < sculptureList.length - 1) {
          setcurrentSculpture((prevState) => prevState + 1)
        }
      }}
    >Next</button>
    <div>
      <h2>{sculptureList[currentSculpture].name}</h2>
      <img src={sculptureList[currentSculpture].url} alt='sculpture' />
      <div>
        <button onClick={() => setshowDescription(!showDescription)}>{showDescription ? 'Hide' : 'Show'} description</button>
        {showDescription && <p> {sculptureList[currentSculpture].description}</p>}
      </div>
    </div>
  </div >
}
export default App;

