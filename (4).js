function laugh() {
    let a;
    a = "hahahahahahah!";
    return a;
}
console.log(laugh()) ;

function s(number, x) {
    const answer = number + x;
    return answer;
}
console.log (s(5, 5))

function q(l, n) {
    return l + n;
}

function w(number) {
    return number / 2;
}

const r = q(6,4)
console.log(w(r))

function z(Number) {
    for (let x = 2; x < Number; x++) {
        if (Number % x === 0) {
            console.log(Number + " is divisible by " + x)
            return true;
        }
    }
    return false;
}
console.log(z(49))

const favoriteMovie = function displayFavorite(MovieName) {
    console.log("My favorite movie is " + MovieName);
};

function movies(messageFunction, name) {
    messageFunction(name);
}

movies(favoriteMovie, "The Dark Knight");

const n = function m (b) {
    return b + 1
};
console.log(n(4))

let sound = "";
const laugh2 = function (number) {
    for (let x = 0; x < number; x++) {
        sound = sound + "ha";
    }
    sound = sound + "!";
    return sound;
};
console.log(laugh2(3));