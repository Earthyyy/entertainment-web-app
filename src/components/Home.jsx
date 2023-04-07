import React from 'react'
import Trending from './Trending'
import Recommended from './Recommended'


const Home = ({items}) => {
  return (
    <div className='px-4 grid gap-6 overflow-hidden'>
      <Trending items={items}/>
      <Recommended items={items} />
    </div>
  )
}

export default Home