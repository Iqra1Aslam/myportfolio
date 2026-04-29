import useEffect from 'react';

import { useState } from 'react';
counst [count,setCount]=useState(0);

useEffect(()=>{
    console.log("welcmoe")

},[count])
function useUpdate()
{
setCount(count++)
}
return(
    <h1>count update </h1>
)