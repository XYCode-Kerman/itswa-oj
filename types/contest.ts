export interface OJContest {
    contest_id: string,
    ccf_file: string,
    start_time: string   // format: date-time
    end_time: string     // format: date-time
}

export interface OJProblem {
    problem_id: string
    name: string,
    background?: string,
    description: string,
    input_format: string,
    output_format: string,
    source_file_name: string,
    languages: 'CPP'[],
}