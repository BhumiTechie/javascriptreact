import React, { useEffect, useRef } from 'react'

const Home = () => {
	const focusRef = useRef(null);
	useEffect(()=>{
		console.log("Home.jsx Mounted");
		focusRef.current.focus();
		// api call

  return () =>{
	console.log("Home.jsx Unmounted")
   }
	}, []);

	console.log("Home.jsx Loaded!");
  return (
	<div>
		<input
		 ref={focusRef}
		 className='border py-2 px-4'
		 placeholder='Username'
		 type='text'
		/>
		<br/> <br/>
		<input
		 ref={focusRef}
		 className='border py-2 px-4'
		 placeholder='email'
		 type='text'
		/>
	</div>
  )
}

export default Home