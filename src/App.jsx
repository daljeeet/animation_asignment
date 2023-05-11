import Section_1 from './components/Section-1/Section_1'
import Section_2 from './components/Section-2/Section_2'
export default function App() {
  return (
    <div className=" text-white bg-black">
      {/* Dummy Div to create some dummy space at top */}
    <div className='h-[140vh]'></div>
      <Section_1/>
    <div className='h-[140vh]' ></div>
    <div>
      <Section_2/>
    </div>
    </div>
  )
}