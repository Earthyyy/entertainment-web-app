import React, { useState } from 'react'



import { getIcon } from '../utils/utils';

const TrendingCard = ({item}) => {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className='w-[240px]  h-[140px] tablet:w-[470px]  tablet:h-[230px] relative  px-4 py-4 flex flex-col justify-end cursor-pointer flex-shrink-0 rounded-lg overflow-hidden'>

        {/* Background Image Section */}
        <img src={new URL(item.thumbnail.trending.small, import.meta.url).href} alt={item.title} className='absolute inset-0 w-full h-full z-10  desktop:hidden' />

        <img src={new URL(item.thumbnail.trending.large, import.meta.url).href} alt={item.title} className='absolute inset-0 w-full h-full z-10  hidden desktop:block' />


        {/* Bookmark Section */}
        <div className='w-8 h-8 bg-[#10141E80] rounded-full z-20 absolute top-2 right-2 tablet:top-4 tablet:right-6 flex items-center justify-center cursor-pointer group/bookmark hover:bg-white' onClick={() => setBookmarked(prevState => !prevState)}>
            {bookmarked ? <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path className='group-hover/bookmark:fill-black' d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z" fill="#FFF"/></svg> : <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path className='group-hover/bookmark:stroke-black' d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" fill="none" strokeWidth={1.5}/></svg>}
        </div>

        {/* Content Section */}
        <div className='z-20 flex items-center justify-between'>
            <div className=''>
              <div className='flex gap-2 font-light text-[13px] tablet:body-md opacity-75 text-white items-center '>
                <span>{item.year}</span>
                <span>·</span>
                <div className='flex gap-[6px] items-center'>
                  
                  {getIcon(item.category)}
                  <span>{item.category}</span>
                </div>
                <span className=''>·</span>
                <span className=''>{item.rating}</span>
              </div>
              <h3 className='text-[#F9FAFB] text-[.9375rem] font-medium tablet:heading-sm'>{item.title}</h3>
            </div>

        </div>
    </div>
  )
}

export default TrendingCard