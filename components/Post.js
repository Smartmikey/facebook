import Image from "next/image";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/client";

function Post({name, message, email, image, postImage, timestamp}) {
    const [session] = useSession()

    return (
        <div className="flex flex-col">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
            {session?.user?.image && (<Image
                    src={session?.user?.image}
                    className="rounded-full "
                    width={40}
                    height={40}
                    layout="fixed" 
                    />)}
                {/* <img src={image} width={40} height={40} className="rounded-full" /> */}
                <div>
                    <p className="font-medium">{name}</p>
                    <p>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div>
            <p className="pt-4">{message}</p>
            </div>

            {
                postImage && (
                    <div className="relative h-56 md:h-96 bg-white">
                    <Image
                    
                    src={postImage}
                    objectFit="cover"
                    layout="fill"
                    />
            </div>
                    )
                }

                {/* Footer section */}
                <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
                    <div className="InputIcon rounded-none rounded-bl-2xl">
                        <ThumbUpIcon className="h-5" />
                        <p className="text-xs sm:text-base">Like</p>
                    </div>
                    <div className="InputIcon rounded-none">
                        <ChatAltIcon className="h-5" />
                        <p className="text-xs sm:text-base">Comment</p>
                    </div>
                    <div className="InputIcon rounded-none rounded-br-2xl">
                        <ShareIcon className="h-5" />
                        <p className="text-xs sm:text-base">Share</p>
                    </div>
                </div>
        </div>
    )
}

export default Post
