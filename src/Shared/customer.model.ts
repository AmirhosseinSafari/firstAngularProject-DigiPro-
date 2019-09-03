export class Customer{

    public Fname : string;
    public Lname: string;
    public email: string;
    public password: string;
    public likedPro: number[];
    public addedPro: number[];
    public isSignin: boolean = false;

    constructor(fname : string , lname : string , Email : string , Password : string , LikedPro : number[] , AddedPro : number[] , IsSignIn : boolean){

        this.Fname = fname;
        this.Lname = lname;
        this.email = Email;
        this.password = Password;
        this.likedPro = LikedPro;
        this.addedPro = AddedPro;
        this.isSignin = IsSignIn;

    }
}