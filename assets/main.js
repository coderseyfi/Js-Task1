//1. Input ile daxil olunan ededlerin cemi
let sum = 0;
let counter = 5;
let i = 0;
for(i; i<counter; i++){
    sum = sum + Number(prompt(`${i+1}ci ededi daxil edin`));
}
console.log(`Total cem ${sum}`);



//2. Input ile daxil olunan musbet ededlerin cemi
let sum1 = 0;
let counter1 = 5;
let minusNums = 0;
let m = 0;
for(m; m<counter1; m++){

    let input  = Number(prompt(`${m+1}ci ededi daxil edin`))
    if (input > 0) {
       sum1 = sum1 + input;
    }
    else{
        minusNums++;
    }
}
console.log(`Menfi ededler ${minusNums}`);
console.log(`Musbet ededlerin cemi ${sum1}`);



//3. Input ile daxil olunan ededin sifir,musbet yoxsa menfi oldugunu tapin
let num = Number(prompt("eded daxil edin"))
if (num>0) {
 console.log(`${num}: eded musbetdir`)
}
else if(num == 0){
    console.log(`${num}: eded sifirdir`)
}
else{
    console.log(`${num}: eded menfidir`)
}


// 4. Input ile daxil olunan 2 eded arasindaki en boyunu tapin
let g = Number(prompt("1 ci ededi daxil edin"))
let h = Number(prompt("2 ci ededi daxil edin"))
if (g>h) {
    console.log(`g ededi b den boyukdur`);
}
else{
    console.log(`h ededi a den boyukdur`);

}


//5. Diskriminantin tapilmasi
let x = Number(prompt('tenliyin 1ci heddini daxil edin'))
let y = Number(prompt('tenliyin 2ci heddini daxil edin'))
let z = Number(prompt('tenliyin 3cu heddini daxil edin'))

let d = y**2 - 4*x*z;

if (d > 0) {
    let res1 = (-y - d**0.5)/(2*x)
    let res2 = (-y + d**0.5)/(2*x)
    console.log(`${res1} ${res2} heqiqi kokleri var`);
}
else if(d == 0)
{
    let resd1 = (-y)/(2*x) 
    let resd2;
    resd2=resd1;
    console.log(`${resd1}=${resd2} iki beraber koku var`);
}
else{
    console.log('tenliyin heqiqi koku yoxdur');
}