export class User{
    id?:number;
    pseudo:string;
    email:string;
    mdp: string;
    datInscription: Date;
    token:string;
    admin:boolean;

    constructor(pseudo:string, email:string, mdp:string, dateInscription:Date, id?:number){
        this.pseudo = pseudo;
        this.email = email;
        this.mdp = mdp;
        this.datInscription = dateInscription;
        this.id = id;
    }
}