'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import './add-from.scss'
import { ICollocation } from '@/types/collocations.types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { collocationService } from '@/services/collocation.service'

export function AddForm () {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm<ICollocation>()


    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: ICollocation) => collocationService.createCollocation(data),
        onSuccess() {
            toast.success('Successfully added!')
            reset()
        },
        onError(error) {
            console.log(error)
            toast.error('Fail')
        }
    })

    const onSubmit:SubmitHandler<ICollocation> = (data) => {
        // to do
        mutate(data)
        // console.log(data);
    }

    return (
        <form action='' onSubmit={handleSubmit(onSubmit)} className='add-form'>

            <label className='textarea'>
                <span className='textarea__title'>Enter a word or phrase</span>
                <textarea className='textarea__textarea' {...register('name', {
                    required: 'Field is required'
                })} />
                { errors.name && <span className='field-error'>{errors.name.message}</span>}
            </label>

            <label className='textarea'>
                <span className='textarea__title'>Enter a defenition</span>
                <textarea className='textarea__textarea' {...register('defenition', {
                    required: 'Field is required'
                })} />
                { errors.defenition && <span className='field-error'>{errors.defenition.message}</span>}
            </label>

            <label className='textarea'>
                <span className='textarea__title'>Enter a example</span>
                <textarea className='textarea__textarea' {...register('example', {
                })} />
            </label>

            <label className='textarea'>
                <span className='textarea__title'>Enter a translation</span>
                <textarea className='textarea__textarea' {...register('translation', {
                })} />
            </label>

            <button className='button' type='submit'>Send</button>
        </form>
    )
}