import Image from "next/image";
import { signIn} from 'next-auth/client'
function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit="contain"
            />
            <button onClick={signIn} className="text-white bg-blue-600 text-center rounded-full p-5 cursor-pointer">Login with facebook</button>
        </div>
    )
}

export default Login
