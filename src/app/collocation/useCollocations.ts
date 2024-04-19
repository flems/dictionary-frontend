import { collocationService } from '@/services/collocation.service'
import { ICollocation } from '@/types/collocations.types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function useCollocations () {
    // const { data } = useQuery({
    //     queryKey: ['collocation'],
    //     queryFn: () => collocationService.getAll()
    // })

    const { data } = useQuery({
		queryKey: ['collocation'],
		queryFn: () => collocationService.getAll()
	})

    const items:ICollocation[] = data?.data || []
    // const [items, setItems] = useState<ICollocation[] | undefined>(data?.data)

    return items
}