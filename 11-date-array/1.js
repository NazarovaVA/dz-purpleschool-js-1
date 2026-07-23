const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

function filt(e){
    const days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
    if ((days.includes(e[0]) && ['01','03','05','07','08','10','12'].includes(e[1]))
        ||(((['04','06','09','11'].includes(e[1]))&&(days.slice(0,-1).includes(e[0])))
        ||((e[1]==='02' && (days.slice(0,-3).includes(e[0]))))) 
        && (e[2]).length === 4 && (e.length === 3)){
        return true;
    }
    return false;
}

function sort(arr){
    const arr2 = arr.filter(elem => {
        if (elem.includes('-')){
            const e = elem.split('-');
            return filt(e);
        } else if (elem.includes('/')){
            const e = elem.split('/');
            return filt(((e.slice(0,2)).reverse()).concat(e[2]));
        }
        return false;
    });
    arr2.forEach((elem,i) => {
        if (elem.includes('/')){
            const r = elem.split('/');
            console.log(r);
            arr2[i] = (((r.slice(0,2)).reverse()).concat(r[2])).join('-');
        }
    })
    return arr2;
}

console.log(sort(arr));