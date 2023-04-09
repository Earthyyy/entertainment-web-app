import ShowCard from "./ShowCard"
import { useSelector } from "react-redux"



const Bookmarks = () => {
  const shows = useSelector(state => state.shows.list);
  const bookmarkedMovies = shows.filter(item => item.category === 'Movie' && item.isBookmarked === true)
  const bookmarkedSeries = shows.filter(item => item.category === 'TV Series' && item.isBookmarked === true)



  return (
    <div className='grid gap-6 px-4 overflow-y-auto scrollbar-hide tablet:px-6'>
      <div className="grid gap-4">
        <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Bookmarked Movies</h2>
        <div className='flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide'>
          {bookmarkedMovies.map((item, index) => (
            <ShowCard item={item} key={index} />
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Bookmarked Series</h2>
        <div className='flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide'>
          {bookmarkedSeries.map((item, index) => (
            <ShowCard item={item} key={index} />
          ))}

        </div>
      </div>
    </div>
      )
}

      export default Bookmarks