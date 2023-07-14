import Search from '@/Components/Search/Search';
import Navbar from '@/Components/Layout/Navbar';



const page=()=> {
  return (
    <main className='max-w-[2000px] m-auto mx-2'>
    <Navbar />
   <Search />
    </main>
  )
}
export default page;