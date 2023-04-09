import React from 'react'
import ShowCard from './ShowCard'
import { useSelector } from 'react-redux'


const Movies = () => {
  const shows = useSelector(state => state.shows.list);
  const movies = shows.filter(item => item.category === 'Movie')
  return (
    <div className='flex flex-col gap-4 overflow-hidden px-4 tablet:px-6'>
      <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Movies</h2>
      <div className='flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide'>
        {movies.map((item, index) => (
          <ShowCard item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Movies