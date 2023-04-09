import { useParams, useSearchParams } from 'react-router-dom'
import ShowCard from './ShowCard';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const shows = useSelector(state => state.shows.list);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  let { section } = useParams();
  let results;

  switch (section) {
    case 'movies':
      results = shows.filter(item => item.category === 'Movie');
      break;
    case 'series':
      results = shows.filter(item => item.category === 'TV Series');
      break;
    case 'bookmarks':
      results = shows.filter(item => item.isBookmarked);
      break;
    default:
      results = shows;
      break;
  }

  results = results.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  return (
      <div className='flex flex-col gap-4 overflow-hidden px-4'>
        <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Found {results.length} for `{query}` </h2>
        <div className='flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide'>
          {results.map((item, index) => (
            <ShowCard item={item} key={index} />
          ))}
        </div>
      </div>
    
  )
}

export default SearchResults