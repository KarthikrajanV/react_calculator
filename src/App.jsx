import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faDivide } from '@fortawesome/free-solid-svg-icons';


const App = () => {

  const [result, setResult] = useState('')

  const handleEqual = () => {
    try {
      const evaluatedRes = eval(result)
      setResult(evaluatedRes.toString())
    } catch (error) {
      setResult('Syntax Error')
    }
  }

  return (
    <div className=' bg-black min-h-screen lg:bg-[#f7fee7]'>
      <section className=' bg-black my-0 mx-auto rounded-xl lg:my-12 w-[350px] h-[650px]'>
        <div className='w-full h-1/4 hidden:border border-gray-50 text-white p-5 pb-0 flex justify-end' >
          <span className='mt-auto text-3xl'>{result}</span>
        </div>
        <div className='hidden:border border-red-400 m-3 mt-16'>
          <div className='grid grid-cols-4  ml-2 gap-5 gap-y-7' >
            <button onClick={() => { setResult('') }} className='operator'>C</button>
            <button onClick={() => { setResult(result + '%') }} className='operator'>%</button>
            <button onClick={() => { setResult(result.substring(0, result.length - 1)) }} className='operator'><FontAwesomeIcon icon={faDeleteLeft} /></button>
            <button onClick={() => { setResult(result + '/') }} className='operator'><FontAwesomeIcon icon={faDivide} /></button>
            <button onClick={() => { setResult(result + 7) }} className='number'>7</button>
            <button onClick={() => { setResult(result + 8) }} className='number'>8</button>
            <button onClick={() => { setResult(result + 9) }} className='number'>9</button>
            <button onClick={() => { setResult(result + '*') }} className='operator'>x</button>
            <button onClick={() => { setResult(result + 4) }} className='number'>4</button>
            <button onClick={() => { setResult(result + 5) }} className='number'>5</button>
            <button onClick={() => { setResult(result + 6) }} className='number'>6</button>
            <button onClick={() => { setResult(result + '-') }} className='operator'>-</button>
            <button onClick={() => { setResult(result + 1) }} className='number'>1</button>
            <button onClick={() => { setResult(result + 2) }} className='number'>2</button>
            <button onClick={() => { setResult(result + 3) }} className='number'>3</button>
            <button onClick={() => { setResult(result + '+') }} className='operator'>+</button>
            <button onClick={() => { setResult(result + '00') }} className='number'>00</button>
            <button onClick={() => { setResult(result + 0) }} className='number'>0</button>
            <button onClick={() => { setResult(result + '.') }} className='number'>.</button>
            <button onClick={handleEqual} className='equal'>=</button>
          </div>
        </div>
      </section>
    </div >
  )
}

export default App
