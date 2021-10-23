import Image  from "next/image";
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
 } from "@heroicons/react/solid";
import { 
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
 } from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/client"
function Header() {
    const [session] = useSession()
    console.log(session);
    return (
        <div className="bg-gray-400">

        <div className="flex  sticky top-0 z-50 bg-white items-center
        p-2  shadow-md">
            
            <div className="flex items-center">

            {/* Header left */}

            <Image src="https://links.papareact.com/5me"
                width={40}
                height={40}
                layout="fixed"
            />
            <div className="flex ml-2 rounded-full bg-gray-100 p-2 ">
                <SearchIcon className="h-6 text-gray-600" />
                <input className="hidden md:inline-flex flex-shrink items-center ml-2 bg-transparent 
                    outline-none placeholder-gray-500" 
                    type="search" placeholder="Search Facebook" />
            </div>
            </div>
            {/* Header center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2 p-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Header right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* { console.log(session.user)} */}
                {/* Image goes here */}
                {session ? <Image 
                    onClick={signOut}
                    src={`${session.user.image}`}
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    layout="fixed"
                /> : ""}
                <p className="whitespace-nowrap font-semibold px-2  ">{session?.user?.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
        </div>
    )
}

export default Header
