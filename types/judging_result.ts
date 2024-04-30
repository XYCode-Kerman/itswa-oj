import type { CheckPoint, Status } from "./checkpoint";


export interface CheckPointResult {
    ckpt: CheckPoint,
    score: number,
    status: Status,
    output: string,
    time: number
}