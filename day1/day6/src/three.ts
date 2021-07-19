let AddPower = function(config:any){
    return function(targetClass:any){
        return class{
            title = new targetClass().title;
            power = config.power;
            herocity = config.city;
        }
    }
}
@AddPower({
    power : 7,
    city : "Gotham"
})
class CommonMan{
    title:string = "Bruce"
}

console.log( new CommonMan() );
