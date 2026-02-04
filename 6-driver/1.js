const hasLicence = true;
const age = 18;
const isDrunk = false;
console.log(`Пользователь может водить машину? ${(hasLicence&&(age>=18)&&!isDrunk)?"может":"не может"}`)