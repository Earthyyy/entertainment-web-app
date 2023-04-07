import React from 'react'
import ShowCard from './ShowCard'

const Series = ({items}) => {
  const series = items.filter(item => item.category === 'TV Series')
  return (
    <div className='flex flex-col gap-4 overflow-hidden px-4'>
      <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>TV Series</h2>
      <div className='flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide'>
        {series.map((item, index) => (
          <ShowCard item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Series