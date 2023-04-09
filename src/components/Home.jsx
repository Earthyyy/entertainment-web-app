import React from 'react'
import Trending from './Trending'
import Recommended from './Recommended'



const Home = () => {

  return (
    <div className='px-4 grid gap-6 overflow-hidden tablet:px-6'>
      <Trending />
      <Recommended />
    </div>
  )
}

export default Home