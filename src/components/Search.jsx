import React from 'react'

import magnifyingGlass from '../assets/icon-search.svg';



const Search = ({active}) => {
  
  let placeholder;
  if (active === 'home') {
    placeholder = 'Search for movies or TV series'
  } else if (active === 'movies') {
    placeholder = 'Search for movies'
  } else if (active === 'series') {
    placeholder = 'Search for TV series'
  } else if (active === 'bookmarks') {
    placeholder = 'Search for a bookmarked shows'
  }





  return (
    <div className='bg-transparent flex gap-6 items-start mx-4 tablet:mx-6 desktop:mt-16 desktop:mx-0 desktop:mr-8'>
      <img src={magnifyingGlass} className='w-6 h-6 cursor-pointer tablet:w-8 tablet:h-8 hover:opacity-70' />

      <div className='flex-1 relative pb-[14px]'>
      <input type="text" name="search" id="search" placeholder={placeholder} className='bg-transparent w-full  outline-none  body-md text-white 
      border-none caret-primary peer tablet:heading-md'/>
      <div className='transition-all ease-out duration-500  absolute bottom-0 left-0 w-0 h-[1px] bg-accent  peer-focus:w-full'></div>
      </div>


    </div>
  )
}

export default Search