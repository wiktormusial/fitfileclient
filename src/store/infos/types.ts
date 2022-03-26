export interface Infos {
    avg_speed: number,
    coords: {x: number, y: number}[],
    data_end: string,
    data_start: string,
    distance: number,
    duration: string,
}

export interface InfosState {
    status: "idle" | "succeeded" | "loading"
    error: string
    data: Infos
}