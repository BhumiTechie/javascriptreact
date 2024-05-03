import React, { useState } from 'react'

const Show = () => {
	const[vaild, setvaild] = useState(false);
	console.log(vaild);
  return (
	<div>
<h1 className='mb-10'>Show</h1>
    <button onClick={()=> setvaild} className='py-2 '></button>
	</div>
  )
}

export default Show