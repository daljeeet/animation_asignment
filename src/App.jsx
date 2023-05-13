import Section_1 from './components/Section-1/Section_1'
import Section_2 from './components/Section-2/Section_2'
export default function App() {
  return (
    <div className=" text-white bg-black">
      {/* Dummy Div to create some dummy space at top */}
    <div className='h-[50vh]'>
      <h3 className='text-center py-20 text-xl' > Hii.. Please Scroll down</h3>
      <h3 className='text-4xl  animate-bounce text-center'>&#x2193;</h3>
    </div>
      <Section_1/> 
      <Section_2/>
    <div>
      <h3 className='text-center py-20' > * * * * * * * * * *  end  * * * * * * * * * *</h3>
    </div>
    </div>
  )
}