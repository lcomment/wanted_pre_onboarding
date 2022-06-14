import { IsNotEmpty } from "class-validator";

export class ApplyUserDto {
    postid: number;
    userid: number;
    email: string;

    constructor(
        postid: number,
        userid: number,
        email: string,
    ){
        this.postid = postid;
        this.userid = userid;
        this.email = email;
    }
}