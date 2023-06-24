

const HeaderItem = ({name,Icon}:any) => {
  return (
    <div className='text-white flex gap-3 items-center text-[15px] font-semibold cursor-pointer  hover:underline underline-offset-8 mb-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
