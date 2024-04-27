'use client'

import { UiButton } from '@/components/ui/UiButton/UiButton'
import { EButtonTheme } from '@/components/ui/UiButton/ui-button.interface'
import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export function AuthForm () {
    const { register, handleSubmit, reset } = useForm<IAuthForm>({
        mode: 'onChange'
    })

    const [isLoginForm, setIsLoginForm] = useState(false)

    const { push, replace } = useRouter()

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
        onSuccess() {
            toast.success('Successfully login!')
            reset()
            replace('/') // cтраница со списком слов
            console.log(12331232123);
            
        },
        onError(error) {
            console.log(error)
            toast.success('Login failed!')
        }
    })

    const onSubmit:SubmitHandler<IAuthForm> = data => {
        mutate(data)
    }

    return (
        <form action=''  onSubmit={handleSubmit(onSubmit)} className='form'>
            <label className='input'>
                <span className='input__title'>Email</span>
                <input className='input__input' type='email' {...register('email', {
                    required: 'Field is required'
                })} />
                {/* { errors.email && <span className='field-error'>{errors.email.message}</span>} */}
            </label>

            <label className='input'>
                <span className='input__title'>Password</span>
                <input className='input__input' type='password' {...register('password', {
                    required: 'Field is required'
                })} />
                {/* { errors.email && <span className='field -error'>{errors.email.message}</span>} */}
            </label>

            <div className='d-flex gap-s'>
                <UiButton onClick={() => setIsLoginForm(true)} type='submit'>
                    Login
                </UiButton>
                <UiButton theme={EButtonTheme.bordered} onClick={() => setIsLoginForm(false)} type='submit'>
                    Register
                </UiButton>
            </div>
        </form>
    )
}