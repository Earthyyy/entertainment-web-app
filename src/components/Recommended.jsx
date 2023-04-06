import ShowCard from "./ShowCard"


const Recommended = ({items}) => {
  return (
    <div className='grid gap-6 overflow-hidden'>
      <h2 className='text-white text-[1.25rem] font-light tablet:heading-lg'>Recommended</h2>


      {/* <Card/> */}
      <div className="flex gap-[0.9375rem] tablet:gap-[29px] desktop:gap-10 flex-wrap overflow-y-auto scrollbar-hide">
        {items.map((item, index) => (
          <ShowCard key={index} item={item} />
        ))}
      </div>
      

    </div>
  )
}

export default Recommended