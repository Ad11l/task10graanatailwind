import Pics from '@/Components/pics'
import Navbar from '../Components/Navbar.jsx'
import '@/styles/globals.css'
import Features from '@/Components/features.jsx'
import Red from '@/Components/red.jsx'

export default function App() {
  return (
<>
  <Navbar/>
  {/* <Red/> */}
  <Pics/>
  <Features/>
</>
  )
}
