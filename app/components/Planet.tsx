const Planet = (color: {color: string}) => {
  return (
    <div className={`bg-[${color}] ease-in-out duration-100 hover:scale-125 h-[50px] w-[50px] sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px] rounded-full`}></div>
  )
}

export default Planet