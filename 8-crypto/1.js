function crypto(password){
    const lengthOfPassword = password.length;
    const part1 = ((password.slice(0,lengthOfPassword/2)).split("")).reverse();
    const part2 = ((password.slice(lengthOfPassword/2)).split("")).reverse();
    const temp = part1[0];
    part1[0] = part2[0];
    part2[0] = temp;
    return (part1.concat(part2)).join("");
}

function check(cryptoPassword,realPassword){
    const lengthOfPassword = cryptoPassword.length;
    const part1 = ((cryptoPassword.slice(0,lengthOfPassword/2)).split(""));
    const part2 = ((cryptoPassword.slice(lengthOfPassword/2)).split(""));
    const temp = part1[0];
    part1[0] = part2[0];
    part2[0] = temp;
    part1.reverse();
    part2.reverse();
    if ((part1.concat(part2)).join("") === realPassword){
        return true;
    }else{
        return false;
    }
}

console.log(crypto('abcdefg'));
console.log(check('gbacfed','abcdefg'));