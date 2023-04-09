import React from 'react'
import TrendingCard from './TrendingCard';
import { useSelector } from 'react-redux';





const Trending = () => {
  const shows = useSelector(state => state.shows.list);
  const trending = shows.filter(item => item.isTrending === true)
  return (
    <div className='flex flex-col gap-4 overflow-hidden'>
        <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Trending</h2>
        <div className='flex gap-4 desktop:gap-10 w-full overflow-x-auto scrollbar-hide'>
          {trending.map((item, index) => (
            <TrendingCard key={index} item={item}/>
          ))}
        </div>
    </div>
  )
}

export default Trending