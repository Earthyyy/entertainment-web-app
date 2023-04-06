import {
  Link,
  Route,
  Routes
} from 'react-router-dom';

// import the missing components from ./components
import {
  Navbar,
  Search,
  Home,
  SearchResults,
  Movies,
  Series,
  Bookmarks
} from './components'
import { useState } from 'react';



function App() {
  const [active, setActive] = useState("home");


  return (
    <div className="App">
      <div className="bg-secondary flex flex-col desktop:flex-row h-screen gap-8">
        <div className='tablet:px-[25px] tablet:pt-[23px] desktop:p-0 desktop:py-8 desktop:pl-8 flex-shrink-0'>
          <Navbar active={active} setActive={setActive} />
        </div>
        <main className='flex flex-col gap-6 flex-1 overflow-hidden'>
          <Search active={active} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<SearchResults/>}/>
            <Route path="/movies" element={<Movies/>}/> 
            <Route path="/series" element={<Series/>}/>
            <Route path="/bookmarks" element={<Bookmarks/>}/>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App