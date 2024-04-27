import { AuthForm } from '@/views/AuthForm/AuthForm'
import type { Metadata } from 'next'
// import { Auth } from './Auth'

// import { LoginForm } from '@/views/LoginForm/LoginForm'

export const metadata: Metadata = {
    title: 'Auth'
}

export default function AuthPage () {
    return <AuthForm />
}