import { IsNotEmpty } from "class-validator";

export class CreatePostDto {
    @IsNotEmpty()
    company: string;
    
    nation: string;
    region: string;
    position: string;
    bonus: number;
    content: string;
    skill: string;
}