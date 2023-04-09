import {
  Route,
  Routes
} from 'react-router-dom';


import {
  Navbar,
  Search,
  Home,
  SearchResults,
  Movies,
  Series,
  Bookmarks
} from './components'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setShows } from './features/showsSlice/showsSlice';




function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => dispatch(setShows(data)))
  }, [])




  return (
    <div className="App">
      <div className="bg-secondary flex flex-col desktop:flex-row h-screen gap-8">
        <div className='tablet:px-[25px] tablet:pt-[23px] desktop:p-0 desktop:py-8 desktop:pl-8 flex-shrink-0'>
          <Navbar />
        </div>
        <main className='flex flex-col gap-6 flex-1 overflow-hidden'>
          <Search />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:section?" element={<SearchResults />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
