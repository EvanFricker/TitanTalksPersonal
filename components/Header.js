import Image from "next/image";
import {
  SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, HomeIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 ">
      <div className ="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/*left */}
        <div className ="relative w-24 cursor-pointer">
          <Image src="/ful.png" layout="fill" objectFit="contain"/>
        </div>

        {/*center - Search bar */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className='h-5 w-5 text-gray-500'/>
            </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search"/>
          </div>
        </div>

        {/*right */}
        <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn"/>
        <MenuIcon className="h-6 md:hidden cursor-pointer"/>
        <PaperAirplaneIcon className="navBtn"/>
        <PlusCircleIcon className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>
        </div>
        

      </div>
    </div>
  )
}

export default Header