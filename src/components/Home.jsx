import React from 'react'
import Trending from './Trending'
import Recommended from './Recommended'

import items from '../data/data';

const Home = () => {
  return (
    <div className='px-4 grid gap-6 overflow-hidden'>
      <Trending items = {items}/>
      <Recommended items={items} />
    </div>
  )
}

export default Home