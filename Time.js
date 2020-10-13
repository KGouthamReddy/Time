import React, { useState } from 'react'

const App = ()=>{
    let Time = new Date().toLocaleTimeString();
    const [ctime , settime]=useState(Time);
    const UpTime = () =>{
        Time = new Date().toLocaleTimeString();
        settime(Time);
    }
setInterval(UpTime,1000);
return(
    <>
    <h2> &copy; Goutham Reddy</h2>
    <div>
    <h1>{ctime}</h1>
    </div>
</>
)};
export default App;
