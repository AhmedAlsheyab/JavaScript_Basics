let x = 1;
while(x<=10) {
    console.log(x);
    x++;
}

let A = 1
while (A<=20) {
    if (A % 3 === 0 && A % 5 === 0) {
        console.log("AhmedAlsheyab");
    } else if (A % 3 === 0) {
        console.log("Ahmed");
    } else if (A % 5 === 0) {
        console.log("Alsheyab");
    } else {
        console.log(A);
    }
    A++
}
    let s;
    for (s = 0; s <= 5; s = s + 1) {
        console.log("s = " + s);
    }
    let c;
    let w;
    for (c = 0; c < 6; c = c + 2) {
        for (w = 0; w < 5; w = w + 2) {
            console.log(w + "-" + c);
        }
    }

/*
 s++; = s = s + 1;
 s--; = s = s - 1;
 s*=10; = s = s * 10;
 s/=10; = s = s / 10;
*/