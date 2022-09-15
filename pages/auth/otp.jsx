import Head from 'next/head'
import { Otp } from '../../components'
export default function Authentication() {
    return (
        <>
            <Head>
                <title>Authentication</title>
            </Head>
            <Otp />
        </>
    )
}