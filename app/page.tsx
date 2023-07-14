import Image from 'next/image'
import Navbar from '@/Components/Layout/Navbar'
import Home from '@/Components/Home/Home'
import PopUp from '@/Components/Home/PopUp'
import Description from '@/Components/Description/Description'
const HomePage=()=> {
  return (
    <main className='m-2'>
      <Navbar />
      <Home />
    </main>
 
  )
}
export default HomePage