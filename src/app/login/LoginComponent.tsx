'use client'
import { SubmitLoginForm } from "@/actions/actions";
import { useState } from "react"
// icons
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ProvidersComponent from "./ProvidersComponent";

// -----

export default function LoginComponent() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    return (
        <div className="flex flex-col items-center mx-auto">
            {/* <h1 className="my-5 text-3xl font-bold font-serif">MeuSaas</h1> */}
            <div className="mt-0 rounded-lg border bg-white border-gray-400 shadow text-black flex flex-col p-5 w-full max-w-[500px]">
                <div className="mb-5">
                    <h2 className="text-2xl text-amber-600 font-bold">{isLogin ? "Welcome" : "Sign Up"}</h2>
                    <p className="text-amber-900">{isLogin ? "Log in with your username and password." : "Sign up for free."}</p>
                </div>
                
                <form action={SubmitLoginForm}
                className='flex flex-col'
                >
                    <div className="flex flex-col">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="outline-gray-300 outline-2 rounded-md pl-2 py-2 shadow focus:outline-amber-600 duration-300 ease-in-out mt-1" placeholder="Username" />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="outline-gray-300 outline-2 rounded-md pl-2 py-2 shadow focus:outline-amber-600 duration-300 ease-in-out mt-1" placeholder="••••••••••" />
                    </div>
                    {!isLogin && <div className="flex flex-col mt-2">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" className="outline-gray-300 outline-2 rounded-md pl-2 py-2 shadow focus:outline-amber-600 duration-300 ease-in-out mt-1" placeholder="••••••••••" />
                    </div>}
                    <button type='submit' className="bg-amber-600 hover:bg-amber-500 active:bg-amber-600 duration-300 ease-in-out text-white py-3 rounded-md cursor-pointer font-bold mt-5">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                {isLogin && (
                    <ProvidersComponent />
                )}

                {isLogin && <p className="text-center text-gray-600 mt-5">By continuing, you agree to our Terms of Use and Privacy Policy.</p>}
            </div>
            <p className="text-gray-800 mt-5">{isLogin ? "Don't have an account?" : "Already have an account?"}  
                <span className="font-semibold text-black hover:underline cursor-pointer"
                onClick={() => { setIsLogin(!isLogin) }}
            >{isLogin ? ' Sign up' : ' Log in'}</span>.
            </p>
        </div>
    )
}
