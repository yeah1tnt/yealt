import NavBar from '../app/components/NavBar'
export default function Home() {
  
  const title = `Yealt's Home`;
  const description = `Portfolio`;

  return (
    <div className='flex h-screen flex-col md:flex-row justify-center'>
      <NavBar title={title} description={description}></NavBar>
     </div>   
  )
}
