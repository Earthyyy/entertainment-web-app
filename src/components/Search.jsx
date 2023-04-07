import React from 'react'

import magnifyingGlass from '../assets/icon-search.svg';
import { useNavigate } from 'react-router-dom';



const Search = ({ active }) => {

  const navigate = useNavigate();


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

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.q.value;
    navigate(`/search?q=${query}`);
  }





  return (

    <form action='search' className='bg-transparent flex gap-6 items-start mx-4 tablet:mx-6 desktop:mt-16 desktop:mx-0 desktop:mr-8' onSubmit={handleSubmit}>

      {/* Wrap the img below in a button tag and remove all the default styling from the button */}

      <button>
        <img src={magnifyingGlass} className='w-6 h-6 cursor-pointer tablet:w-8 tablet:h-8 hover:opacity-70' />
      </button>

      <div className='flex-1 relative pb-[14px]'>
        <input type="text" name="q" id="q" placeholder={placeholder} className='bg-transparent w-full  outline-none  body-md text-white 
      border-none caret-primary peer tablet:heading-md'/>
        <div className='transition-all ease-out duration-500  absolute bottom-0 left-0 w-0 h-[1px] bg-accent  peer-focus:w-full'></div>
      </div>


    </form>
  )
}

export default Search