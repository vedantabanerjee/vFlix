import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState ('');
    const [name, setName] = useState ('');
    const [password, setPassword] = useState ('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);


    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="flex px-10 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                    <h2 className="text-white text-xl py-1.5 px-1 font-bold ">| vflix Streaming Service</h2>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center lg:w-2/5 lg:max-h-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold text-center">
                            {variant === 'login' ? 'Sign in' : 'Sign up'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                            <Input 
                                label="Username"
                                onChange={(ev:any)=>setName(ev.target.value)}
                                id="name"
                                value={name}
                            />
                            )}
                            <Input 
                                label="Email"
                                onChange={(ev:any)=>setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input 
                                label="Password"
                                onChange={(ev:any)=>setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />
                        </div>
                        <button className="bg-pink-700 py-3 text-white rounded-md w-full mt-10 hover:bg-pink-900 transition">
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time on vflix dude?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account UwU!' : 'Login?'} 
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Auth;