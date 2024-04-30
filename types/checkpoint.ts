export interface CheckPoint {
    input: string,
    answer: string,
    ckpt_score: number | 10,
    input_type: 'STDIN' | 'FILE',
    output_type: 'STDOUT' | 'FILE',
    input_file?: string,
    output_file?: string,
}

export type Status = 'AC' | 'WA' | 'CE' | 'RE' | 'TLE' | 'MLE' | 'OLE' | 'JIE'