import { MdErrorOutline, MdBackspace } from 'react-icons/md'
import { useState } from 'react'
import Link from 'next/link'
const input = Array.from({ length: 4 })
export default function AuthLogin() {
    const [pin, setPin] = useState('')
    return (
        <div className="w-screen h-screen bg-gcash-blue">
            <div className="flex flex-col w-full ">
                <img
                    src="/assets/images/gcash.png"
                    alt="gcash"
                    className="h-60 object-contain" />
                <div className="flex gap-1 justify-center items-center">
                    <span className="text-gcash-secondary-blue text-xs">0905 234 1234</span>
                    <span className="text-xs text-white">Change Number</span>
                </div>
                <div className="mt-3 flex flex-col gap-1 justify-center items-center">
                    <span className="text-sm font-medium tracking-wider text-white">Enter your MPIN</span>
                    <div className="flex gap-1 items-center text-white">
                        <MdErrorOutline size={'1rem'} />
                        <span className="text-xs">Never share your MPIN or OTP with anyone.</span>
                    </div>
                </div>
                <div className='flex flex-col mt-3'>
                    <div className='flex gap-1.5 justify-center items-center mx-20'>
                        {input.map((_, i) => (
                            <span
                                key={i}
                                className={`${i + 1 === pin.length} rounded-full w-4 h-4 border transition-all`} />
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 mt-5'>
                        <div className='flex gap-2'>
                            <button className="pin_btn">1</button>
                            <button className="pin_btn">2</button>
                            <button className="pin_btn">3</button>
                        </div>
                        <div className='flex gap-2'>
                            <button className="pin_btn">4</button>
                            <button className="pin_btn">5</button>
                            <button className="pin_btn">6</button>
                        </div>
                        <div className='flex gap-2'>
                            <button className="pin_btn">7</button>
                            <button className="pin_btn">8</button>
                            <button className="pin_btn">9</button>
                        </div>
                        <div className='flex gap-2'>
                            <button className="bg-gcash-blue-dark rounded-full h-12 w-12 text-center text-xl font-bold opacity-0"></button>
                            <button className="pin_btn">0</button>
                            <button className="!bg-transparent pin_btn flex justify-center items-center">
                                <MdBackspace size={'1.5rem'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-1 left-0 right-0 grid grid-cols-3  px-3 w-full'>
                <Link href={'#'} passHref>
                    <a className='text-white text-xs text-left'>Help Center</a>
                </Link>
                <span className='text-gcash-secondary-blue text-xs text-center'>v5.56.0:595</span>
                <Link href={'#'} passHref>
                    <a className='text-white text-xs text-right'>Forgot MPIN</a>
                </Link>
            </div>
        </div>
    )
}