export interface HelloWorldResponseDto {
    status: number;
    message: string;
    data: any;
}
export interface CreateStudentDto {
    id: number;
    name: string;
    email: string;
}