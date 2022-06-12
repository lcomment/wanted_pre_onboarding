export class PostListDto {
    id: number;
    company: string;
    nation: string;
    region: string;
    position: string;
    bonus: number;
    skill: string;

    constructor(
        id: number, 
        company: string, 
        nation: string, 
        region: string, 
        position: string, 
        bonus: number, 
        skill: string
    ){
        this.id = id;
        this.company = company;
        this.nation = nation;
        this.region = region;
        this.position = position;
        this.bonus = bonus;
        this.skill = skill;
    }
}