import { Post } from "src/entities/Post";

export class DetailPostDto {
    id: number;
    company: string;
    nation: string;
    region: string;
    position: string;
    bonus: number;
    skill: string;
    content: string;
    otherPost: number[];

    constructor(
        id: number, 
        company: string, 
        nation: string, 
        region: string, 
        position: string, 
        bonus: number, 
        skill: string,
        content: string,
        otherPost: number[]
    ){
        this.id = id;
        this.company = company;
        this.nation = nation;
        this.region = region;
        this.position = position;
        this.bonus = bonus;
        this.skill = skill;
        this.content = content;
        this.otherPost = otherPost;
    }
}