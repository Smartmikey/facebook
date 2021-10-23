import Image from "next/image";

function Contact({src, name}) {
    return (
        <div className="flex items-center space-x-3 mb-3 relative
            cursor-pointer p-2 hover:bg-gray-200 rounded-full">
            <Image 
                src={src}
                className="rounded-full"
                objectFit="cover"
                layout="fixed"
                width={50}
                height={50}
            />
        <p>{name}</p>

        <div className="absolute bottom-2 left-7 bg-green-400 rounded-full h-3 w-3" />
        </div>

    )
}

export default Contact
