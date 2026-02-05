function f(query){
    s = '';
    for (const key in query){
        s += key + '=' + query[key] + '&';
    }
    return s.slice(0,-1);
}

console.log(f({search: 'Вася', take: 10}));