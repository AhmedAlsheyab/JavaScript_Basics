let money = 15, price = 20;
if (money < price) {
    console.log("You can not buy this");
}
else {
    console.log("You can buy this");
}

const Ahmed = 160, Sara = 160;
if (Ahmed > Sara) {
    console.log("Ahmed is taller than Sara")
}
else if (Ahmed < Sara) {
    console.log("Sara is taller than Ahmed")
}
else {
    console.log("They are the same length")
}

const Mohammed = "busy", Weather = "nice";
if (Mohammed === "Not busy" && Weather === "Nice") {
    console.log("Go with Mohammed to walk")
}
else {
    console.log("Do not go with Mohammed to walk");
}

const Laith = false;
const color = Laith ? "red" : "blue";
console.log(color);

const Number = 3;
switch (Number) {
    case 1:
        console.log("Your number is 1");
        break;
    case 2:
        console.log("Your number is 2");
        break;
    case 3:
        console.log("Your number is 3");
        break;
    case 4:
        console.log("Your number is 4")
}

const month = 4;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        days = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        days = 30;
        break;
    case 2:
        days = 21;
}
console.log("There are " + days + " days in this month");