import './App.css'
import LineChat from './component/LiineChat/LineChat'
import Navbar from './component/Navbar/Navbar'
import Phones from './component/Phones/Phones'
import PriceOption from './component/PriceOption/PriceOption'

function App() {


  return (
    <>
      <div className='container mx-auto my-10'>
        <Navbar></Navbar>
        <PriceOption></PriceOption>
        <LineChat></LineChat>
        <Phones></Phones>
      </div>

    </>
  )
}

export default App
