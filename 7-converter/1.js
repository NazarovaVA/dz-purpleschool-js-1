function Convert(money,before,after){
    switch(before){
        case 'Rub':
            switch(after){
                case 'Usd':
                    return money*0.013204;
                case 'Eur':
                    return money*0.011054;
                default:
                    return null;
            }
        case 'Usd':
            switch(after){
                case 'Rub':
                    return money*75.73;
                case 'Eur':
                    return money*0.8406;
                default:
                    return null;
            }
        case 'Eur':
            switch(after){
                case 'Rub':
                    return money*90.47;
                case 'Usd':
                    return money*1.19;
                default:
                    return null;
            }
        default:
            return null
    }
}

console.log(Convert(1000,'Eur','Rub'))