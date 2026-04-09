import React, { useState } from 'react'

function Counters  ()  {

  const [count, setCount] = useState(10);
  // if (count <0) {

  //   alert ("Value is reached in -ve");
  //   setCount = 10;
  // }

  function increment (){
    if (count + 2 > 50){
      alert ("Value goes greater than 50");

      setCount (10);
      return ;
    }
    setCount (count +2);
  }

    function decrement (){
    if (count - 2 < 0){
      alert ("Value cannot go negetive");

      setCount (10);
      return ;
    }
    setCount (count - 2);
  }
    function mutifly (){
    if (count * 2 >50){
      alert ("Value goes greater than 50");

      setCount (10);
      return ;
    }
    setCount (count *2);
  }
    function division (){
    if (count <= 0){
      alert ("Cannot division when values is zero or negative ");

      setCount (10);
      return ;
    }
    setCount (Math.floor(count / 2 ));
  }

  return (

    <div>
      <h1>count : {count} </h1>

      <button 
     className='bg-red-300 w-[10vh] h-[5vh] mr-5'
      onClick={increment}
      >
        +
      </button>

          <button 
     className='bg-red-300 w-[10vh] h-[5vh] mr-5'
      onClick={decrement}
      >
        -
      </button>
          <button 
      className='bg-red-300 w-[10vh] h-[5vh] mr-5'
      onClick={mutifly}
      >
        *
      </button>
          <button 
      className='bg-red-300 w-[10vh] h-[5vh]'
      onClick={division}
      >
        /
      </button>


    </div>
  )

}

export default Counters
