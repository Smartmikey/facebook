import firebase from "firebase";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";

function InputBox() {
    const [session] = useSession()
    const inputRef = useRef(null)
    const filePicker = useRef(null)
    const [imageToPost, setimageToPost] = useState(null)
    const sendPost = e => {
        e.preventDefault()

        if(!inputRef.current.value) return

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if(imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url")
                removeImage()

                uploadTask.on("state_change", null, err => console.error(err), ()=> {
                    storage.ref(`posts/${doc.id}`).getDownloadURL().then(url => {
                        db.collection(`posts`).doc(doc.id).set({
                            postImage: url,
                        }, {merge: true})
                    })
                })
            }
        })

        inputRef.current.value = ""
    }

    const addImageToPost = e => {
         const reader = new FileReader()
         if(e.target.files[0]){
             reader.readAsDataURL(e.target.files[0])
         }

         reader.onload = readerEvent => {
             setimageToPost(readerEvent.target.result)
         }
    }

    const removeImage = ()=> {
        setimageToPost(null)
    }
    

    return (
        <div className="bg-white rounded-2xl p-2 shadow-md text-gray-500 text-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                {session?.user?.image && (<Image
                    src={session?.user?.image}
                    className="rounded-full "
                    width={40}
                    height={40}
                    layout="fixed" 
                    />)}

                    {/* <Image
                    src={session?.user?.image}
                    className="rounded-full "
                    width={40}
                    height={40}
                    layout="fixed" 
                    /> */}
                    <form className="flex flex-1">
                        <input 
                            type="text"
                            ref={inputRef}
                            className="flex-grow rounded-full h-12 bg-gray-100 px-5 focus:outline-none"
                            placeholder={`What's on your mind ${session?.user?.name}`}
                        />
                        <button type="submit" hidden onClick={sendPost} >Submit</button>
                    </form>

                    {imageToPost && (
                        <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 
                        transition duration-150 transform hover:scale-105 cursor-pointer"> 
                            <img className="h-10 object-contain" src={imageToPost} />
                            <p className="text-xs text-red-500 text-center">Remove</p>
                        </div>
                    )}
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="InputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm lg:text-base">Live Video</p>
                </div>
                <div className="InputIcon" onClick={()=> filePicker.current.click()}>
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input type="file" hidden onChange={addImageToPost} ref={filePicker} />
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
