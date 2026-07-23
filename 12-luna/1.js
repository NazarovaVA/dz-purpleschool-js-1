const card = '4561-2612-1234-5464';

function luna(str){
    const s = str.replaceAll('-','');
    const len = s.length;
    let summa = 0;
    for (let i = 0; i < len; i++){
        if (i%2!=((len-1)%2) && 2*Number(s[i])>9){
            summa += (2*Number(s[i]))-9;
        }else if (i%2!=((len-1)%2) && 2*Number(s[i])<=9){
            summa += 2*Number(s[i]);
        }else{
            summa += Number(s[i]);
        }
    }
    return summa%10===0;
}
console.log(luna(card));