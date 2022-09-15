import Head from 'next/head'
import { AuthLogin } from '../../components'
export default function Login() {
    return (
        <>
            <Head>
                <title>GCash Login</title>
            </Head>
            <AuthLogin />
        </>
    )
}