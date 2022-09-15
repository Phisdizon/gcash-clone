import Link from "next/link"
import { MdArrowBack } from 'react-icons/md'
const input = Array.from({ length: 6 })
export default function Auth() {
    return (
        <div className="w-screen h-screen bg-white p-3">
            <div className="flex flex-col">
                <div className="flex gap-5 items-center px-3 py-2.5">
                    <Link passHref href={"/"}>
                        <a>
                            <MdArrowBack size={'1.25rem'} />
                        </a>
                    </Link>
                    <span className="font-medium">Authentication</span>
                </div>
                <div className='flex flex-col justify-center items-center p-5 mt-10 gap-2'>
                    <img
                        src='/assets/images/reg-phone-with-sms.png'
                        alt='phone-sms' />
                    <p className='text-center text-sm font-normal'>Great! We sent a 6 digit <br /> authentication code to yout number<br />09123456789</p>
                </div>
                <div className="flex justify-center items-center px-36">
                    <div className="grid grid-cols-6 gap-2">
                        {input.map((_, i) => (
                            <input
                                key={i}
                                id={`otp-${i}`}
                                type={'text'}
                                maxLength={1}
                                onInput={(e) => {
                                    if (e.nativeEvent.inputType !== "deleteContentBackward" && i + 1 !== 6) {
                                        document.getElementById(`otp-${i + 1}`).focus()
                                    }
                                    if (e.nativeEvent.inputType === "deleteContentBackward" && i !== 0) {
                                        document.getElementById(`otp-${i - 1}`).focus()
                                        console.log(i - 1)
                                    }
                                }}
                                className="border-b border-zinc-500 active:border-none focus:outline-none text-center p-1 font-medium text-lg" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-2 w-full left-0 right-0 flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-xs">Need new code?</span>
                    <span className="text-xs text-blue-600">Resend now</span>
                </div>
                <Link passHref href={'/auth/login'}>
                    <a className="bg-gcash-blue mx-3 text-white text-center font-medium px-3 py-2 rounded-full cursor-pointer">
                        Submit
                    </a>
                </Link>
            </div>
        </div>
    )
}