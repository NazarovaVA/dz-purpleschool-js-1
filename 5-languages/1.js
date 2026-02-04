const lang = prompt("Введите язык (ru,en,de,fr,it)");
switch(lang){
    case "ru":
        console.log("Здравствуйте!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "de":
        console.log("Gutten tag!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "it":
        console.log("Ciao!");
        break;
    default:
        console.log("Такого языка мы не знаем :(");
}