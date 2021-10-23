let sport = {
    "футбол" : "Месси",
    "бокс": "Тайсон",
    "баскетбол" : "Джордан",
}

let currentYear = new Date();
currentYear = currentYear.getFullYear();

let userAge = prompt ( 'Введите год своего рождения.' );
if (userAge === null) {
    alert('Жаль, что Вы не захотели ввести свой год рождения.');
}
else{
	userAge = currentYear - userAge;
}

let userCity = prompt("В каком городе вы живете?")
if (userCity === null) {
    alert("Очень жаль, что вы не захотели водить название города в котором живете.")
}

let userSport = prompt("Какой любимый вид спорта?");
if (userSport === null) {
    alert("Очень жаль, что не захотели вести любимый вид спорта.")
} else if (sport[userSport.toLowerCase()] != undefined) {
    userSport = " как " + sport[userSport.toLowerCase()];
} else {
    userSport = "спортсменом.";
}

switch (userCity.toLowerCase()) {
    case "киев":
        alert(`Тебе ${userAge}. Ты живешь в столице Украины. Круто! Хочешь стать ${userSport}`);
        break
    case "москва":
        alert(`Тебе ${userAge}. Ты живешь в столице России. Круто! Хочешь стать ${userSport}`);
        break
    case "минск":
        alert(`Тебе ${userAge}. Ты живешь в столице Белоруссии. Круто! Хочешь стать ${userSport}`);
        break
    default:
        alert(`Тебе ${userAge}. Ты живешь в городе ${userCity}. Круто! Хочешь стать ${userSport}`) 
}



