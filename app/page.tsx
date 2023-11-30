import NavBar from '../app/components/NavBar'
export default function Home() {
  return (
    <div className='flex h-screen flex-col md:flex-row justify-center'>
      <NavBar></NavBar>
      <h1 className='main_header'>Yealt`s Home</h1>   
     </div>   
  )
}
