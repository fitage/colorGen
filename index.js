const numbersLetters = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]

let button = document.getElementById(`button`)
let firstColorBox = document.getElementById(`box1`)
let secondColorBox = document.getElementById(`box2`)
let thirdColorBox = document.getElementById(`box3`)
let firstHexCode = document.getElementById(`first-hex-code`)
let secondHexCode = document.getElementById(`second-hex-code`)
let thirdHexCode = document.getElementById(`third-hex-code`)


function generateRandom (){
    RandomNumber = Math.floor(Math.random() * 16)
    return RandomNumber
}
button.addEventListener(`click`, function(){
    let hexCodeFirstBox = `#`
    let hexCodeSecondBox = `#`
    let hexCodeThirdBox = `#`
    for(let myFirstLoop = 0; myFirstLoop <6; myFirstLoop++){
        colorCode = numbersLetters[generateRandom()]
        hexCodeFirstBox += colorCode
    }
    firstColorBox.style.backgroundColor = hexCodeFirstBox
    firstHexCode.innerText = hexCodeFirstBox
    for(let mySecondLoop = 0; mySecondLoop <6; mySecondLoop++){
        colorCode = numbersLetters[generateRandom()]
        hexCodeSecondBox += colorCode
    }
    secondColorBox.style.backgroundColor = hexCodeSecondBox
    secondHexCode.innerText = hexCodeSecondBox
    for(let myThirdLoop = 0; myThirdLoop <6; myThirdLoop++){
        colorCode = numbersLetters[generateRandom()]
        hexCodeThirdBox += colorCode
    }
    thirdColorBox.style.backgroundColor = hexCodeThirdBox
    thirdHexCode.innerText = hexCodeThirdBox


})