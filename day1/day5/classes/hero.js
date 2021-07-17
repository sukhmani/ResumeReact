import  Human from "./person.js";

export class Hero extends Person{
    firstname = "";
    lastname = "";
    _secret = "My secret mission";
    constructor(fname, lname, cty){
        super(cty);
        this.firstname = fname;
        this.lastname = lname;
    }
    static superPower(){
        return "I can Fly";
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get secret(){
        return this._secret;
    }
    set secret(nsecret){
        this._secret = nsecret;
    }
};