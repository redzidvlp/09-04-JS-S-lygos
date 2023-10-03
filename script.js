// SLAPTAŽODIS
function checkPass(pass) {
    if (pass < 16) {
        console.log("Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo.");
    }   else if (pass > 15) {
        if (pass > 20) {
            console.log("Slaptažodis tinkamas.");
        } else {
            console.log("Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo.");
        }
    }   else if (!pass.includes("#")) {
        console.log("Slaptažodis privalo turėti grotažymes.");
    }
}

// AMŽIUS
function checkGrade(age) {
    if (isNaN(age)) {
        console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
    }   else if (age < 0) {
        console.log("Įvestas amžius yra per mažas.");
    }   else if (age > 120) {
        console.log("Įvestas amžius yra per didelis.");
    }   else if (age < 6) {
        console.log("Iki 6 metų į mokyklą neina.");
    }   else if (age <= 10) {
        console.log("7-10 metų eina į pradinę klasę.");
    }   else if (age <= 14) {
        console.log("11-14 metų eina į pagrindinę klasę.");
    }   else if (age <= 18) {
        console.log("15-18 metų eina į gimnaziją.");
    }   else {
        console.log("19+ mokyklą baigė.");
    }

    // Papildomi pranešimai pagal amžių
    if (age === 6) {
        console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
    }   else if (age === 10) {
        console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
    }   else if (age === 14) {
        console.log("Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas.");
    }   else if (age === 18) {
        console.log("Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs.");
    }
}

// Prašome vartotojo įvesti amžių
var age = prompt("Įveskite savo amžių:");

// Konvertuojame įvestą tekstą į skaičių ir iškviečiame funkciją
checkGrade(parseInt(age));

// GALVOSŪKIS

// PIRMAS LYGIS
// KAS KILO IŠ VILKŲ?
let correctAnswer11 = 'dog'
let playerAnswer11 = 'cat'

// 1 + 1 = 2

let correctAnswer12 = 2
let playertAnswer12 = 4


if (correctAnswer11 === playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
}   else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 === playerAnswer12) {
    console.log('Patekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
}   else if (correctAnswer11 === playerAnswer11 && correctAnswer12 !== playerAnswer12) {
    console.log('Patekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
}   else if (correctAnswer11 !== playerAnswer11 && correctAnswer12 !== playerAnswer12) {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// ANTRAS LYGIS

let correctAnswer21 = 2
let correctAnswer22 = 4

let playerAnswer21 = 2
let playerAnswer22 = 4

if (correctAnswer21 === playerAnswer21 && correctAnswer22 === playerAnswer22) {
    console.log('Patekai i kita lygi: abu atsakymai teisingi.')
}   else if (correctAnswer22 === playerAnswer22) {
    console.log('Nepatekai i kita lygi: pirmas atsakymas buvo neteisingas, o antras buvo teisingas.')
}   else if (correctAnswer21 === playerAnswer21) {
    console.log('Nepatekai i kita lygi: antras atsakymas buvo neteisingas, o pirmas buvo teisingas.')
}   else {
    console.log('Nepatekai i kita lygi: abu atsakymai buvo neteisingi.')
}

// TREČIAS LYGIS
let correctAnswer31 = 1
let correctAnswer32 = 1
let correctAnswer33 = 1

let playerAnswer31 = 0
let playerAnswer32 = 0
let playerAnswer33 = 0

if (correctAnswer31 === playerAnswer31 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
    console.log('Patekai: visi teisingi.')
}   
    else if (correctAnswer31 === playerAnswer32 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
    console.log('Patekai: bet trečias neteisingas')
}    
    else if (correctAnswer31 === playerAnswer32 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
    console.log('Patekai: bet antras neteisingas')
}
    else if (correctAnswer31 !== playerAnswer32 && correctAnswer32 === playerAnswer32 && correctAnswer33 === playerAnswer33) {
    console.log('Patekai: bet pirmas neteisingas')
}
    else if (correctAnswer31 === playerAnswer32 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
    console.log('Nepatekai: bet pirmas teisingas')
}    
    else if (correctAnswer31 !== playerAnswer32 && correctAnswer32 === playerAnswer32 && correctAnswer33 !== playerAnswer33) {
    console.log('Nepatekai: bet antras teisingas')
}
    else if (correctAnswer31 !== playerAnswer32 && correctAnswer32 !== playerAnswer32 && correctAnswer33 === playerAnswer33) {
    console.log('Nepatekai: bet trečias teisingas')
}
    else if (correctAnswer31 !== playerAnswer32 && correctAnswer32 !== playerAnswer32 && correctAnswer33 !== playerAnswer33) {
    console.log('Nepatekai: visi neteisingi')
}

// PASISVEIKINIMAS

let isLoggedIn = true
let userName = 'Jhon'
let time = 4
let birthday = true
// gali but ir false pakeista

if (time >= 5 && time < 13) {

  if (isLoggedIn) {
    if (birthday) {
      console.log('Good Morning, ' + userName + ' and have a great birthday!')
    } else {
      console.log('Good Morning, ' + userName)
    }
  } else {
    console.log('Good Morning')
  }

} else if (time >= 13 && time < 19) {

  if (isLoggedIn) {
    if (birthday) {
      console.log('Good Afternoon, ' + userName + ' and have a great birthday!')
    } else {
      console.log('Good Afternoon, ' + userName)
    }
  } else {
    console.log('Good Afternoon')
  }

} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {

  if (isLoggedIn) {
    if (birthday) {
      console.log('Good Evening, ' + userName + ' and have a great birthday!')
    } else {
      console.log('Good Evening, ' + userName)
    }
  } else {
    console.log('Good Evening')
  }

} else {

  if (isLoggedIn) {
    if (birthday) {
      console.log('Hello, ' + userName + ' and have a great birthday!')
    } else {
      console.log('Hello, ' + userName)
    }
  } else {
    console.log('Hello')
  }

}

let greetingText = ''

if (time >= 5 && time < 13) {
  greetingText = 'Good Morning'
} else if (time >= 13 && time < 19) {
  greetingText = 'Good Afternoon'
} else if ((time >= 19 && time < 24) || (time >= 0 && time < 5)) {
  greetingText = 'Good Evening'
} else {
  greetingText = 'Hello'
}

let nameText = ''
if (isLoggedIn && userName) {
  nameText = `, ${userName}`
}

let birthdayText = '.'
if (isLoggedIn && birthday) {
  birthdayText = ' and have a great birthday!'
}

let greetingOutput = greetingText + nameText + birthdayText

console.log(greetingOutput)