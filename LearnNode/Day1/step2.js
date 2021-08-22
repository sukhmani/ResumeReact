var f = "Me";
var l = "qaws";


function ffn(f,l)
{
    return f + " " + l;
};

// console.log(ffn(f,l));

//console.log(module.exports);

//module.exports.one = "p";
module.exports = {
fname : f,
lname : l,
ffn: ffn
};