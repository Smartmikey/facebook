import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
    const [session] = useSession()

    const sendPost = e => {
        e.preventDefault()
    }
    return (
        <div className="bg-white rounded-2xl p-2 shadow-md text-gray-500 text-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    className="rounded-full "
                    src={session?.user?.image}
                    width={40}
                    height={40}
                    layout="fixed" 
                    />
                    <form className="flex flex-1">
                        <input 
                            type="text"
                            className="flex-grow rounded-full h-12 bg-gray-100 px-5 focus:outline-none"
                            placeholder={`What's on your mind ${session?.user?.name}`}
                        />
                        <button type="submit" hidden onClick={sendPost} >Submit</button>
                    </form>
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="InputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
                </div>
                <div className="InputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>
                <div className="InputIcon">
                    <EmojiHappyIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
