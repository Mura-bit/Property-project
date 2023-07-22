import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementHandler = () => {
        setCounter(counter + 10)
    }
    const decrementHandler = () => {
        setCounter(counter - 10)
    }
    const resetHandler = () => {
        setCounter(counter - counter)
    }
    const multipleHandler = () => {
      setCounter(counter * 2);
    };
    const devideHandler = () => {
        setCounter(counter / 2)
    }
  return (
    <>
      <h1 className="text-3xl text-center mt-5 mb-5">Counter</h1>
      <p className="text-4xl text-center mb-10">{counter}</p>
      <div className="flex flex-row justify-center gap-20">
        <button
          className=" w-32 h-10 bg-slate-900 text-slate-100 rounded-lg"
          onClick={decrementHandler}
        >
          -10
        </button>
        <button
          className=" w-32 h-10 bg-slate-900 text-slate-100 rounded-lg"
          onClick={incrementHandler}
        >
          +10
        </button>
        <button
          className=" w-32 h-10 bg-slate-900 text-slate-100 rounded-lg"
          onClick={multipleHandler}
        >
           x2
        </button>
        <button
          className=" w-32 h-10 bg-slate-900 text-slate-100 rounded-lg"
          onClick={devideHandler}
        >
          /2
        </button>
        <button
          className=" w-32 h-10 bg-slate-900 text-slate-100 rounded-lg"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;