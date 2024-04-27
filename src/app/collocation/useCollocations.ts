import { collocationService } from '@/services/collocation.service'
import { ICollocationResponse } from '@/types/collocations.types'
import { useQuery } from '@tanstack/react-query'

export function useCollocations () {
    const { data } = useQuery({
		queryKey: ['collocation'],
		queryFn: () => collocationService.getAll()
	})

    const items:ICollocationResponse[] = data?.data || []

    return items
}