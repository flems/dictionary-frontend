export interface ICollocation {
    name: string,
    defenition: string,
    example?: string | null,
    translation?: string | null
}

export interface ICollocationResponse extends ICollocation{
    id: string
}

// export interface ICollocationResponse extends IBase {
// 	name: string
// 	priority?: EnumTaskPriority
// 	isCompleted: boolean
// }