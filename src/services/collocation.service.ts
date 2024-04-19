import { axiosWithAuth } from '@/api/interceptors'
import { ICollocation } from '@/types/collocations.types'

class CollocationService {
    private BASE_URL = '/collocation'

    async getAll () {
        const response = await axiosWithAuth.get(this.BASE_URL)
        return response
    }

    async updateCollocation (id: string, data: ICollocation) {
        const response = await axiosWithAuth.put(
            `${this.BASE_URL}/${id}`,
            data
        )

        return response
    }

    async createCollocation (data: ICollocation) {
        const response = await axiosWithAuth.post(
            this.BASE_URL,
            data
        )

        return response
    }

    async deleteCollocation (id: string) {
        const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
    }
}

export const collocationService = new CollocationService()