

export default class Person{
   public city:string = "Default City";
    private secret:string = "mission";
   
   constructor(ncity:string){
        this.city = ncity;
    }
    saycity(){
        return this.city;
    }
}

let person = new Person("abc");
console.log(person.saycity()); 

interface IHero{
//private _secret;
firstname:string;
lastname:string;
fullname():string;
age:number;
}

class Hero extends Person implements IHero {
    private _secret:string = "My secret mission";
    constructor(public firstname:string, public lastname:string, cty:string){  
        super(cty);
    }
    static superPower(){
        return "I can Fly";
    }
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    get secret():string{
        return this._secret;
    }
    set secret(nsecret:string){
        this._secret = nsecret;
    }
};
