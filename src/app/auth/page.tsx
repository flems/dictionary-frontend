import type { Metadata } from 'next'
import { Auth } from './Auth'

// import { LoginForm } from '@/views/LoginForm/LoginForm'

export const metadata: Metadata = {
    title: 'Auth'
}

export default function AuthPage () {
    return <Auth />
}