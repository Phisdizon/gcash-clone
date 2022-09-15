import Link from 'next/link'
export default function Register() {
    return (
        <div className="w-screen h-screen bg-gcash-blue px-6">
            <div className="flex flex-col w-full ">
                <img
                    src="/assets/images/gcash.png"
                    alt="gcash"
                    className="h-60 object-contain" />

                <div className="flex flex-col gap-1 py-2">
                    <span className="text-white">Enter your mobile number</span>
                    <div className="flex flex-row gap-1 border-b border-gcash-secondary-blue p-1">
                        <span className="font-medium text-base text-white border-r border-gcash-secondary-blue pr-4">+63</span>
                        <input
                            pattern="[0-9]*"
                            type={'tel'}
                            maxLength={12}
                            className="w-full outline-none transition-all appearance-none bg-transparent text-white text-base font-medium" />
                    </div>
                    <span className="text-white text-sm">Available for all networks!</span>
                </div>

                <div className="mt-16 flex flex-col gap-4">
                    <p className="text-center text-sm text-white">
                        By tapping next, we'll collect your mobile number's network information to be able to send you a One-Time Password (OTP).
                    </p>
                    <Link href={'/auth/otp'} passHref>
                        <a
                            className="bg-white px-3 py-2 rounded-full text-gcash-blue text-base text-center tracking-wide">Next</a>
                    </Link>
                </div>
            </div>
            <div className='fixed bottom-0 w-full left-0 px-6 py-2'>
                <div className='flex justify-between items-center'>
                    <Link href={'#'} passHref>
                        <a className='text-white text-xs'>Help Center</a>
                    </Link>
                    <span className='text-gcash-secondary-blue text-xs'>v5.56.0:595</span>
                </div>
            </div>
        </div>
    )
}