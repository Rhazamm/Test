"use strict"

let greeting = " ---Hallo Welt!--- "

// Die Anzahl der Zeichen in einem String
console.log(greeting.length)

// Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(14))
console.log(greeting[14])

// Wo findet sich ein Zeichen in einem String?
console.log(greeting.indexOf("!"))
console.log(greeting.indexOf("---", 10))

// Großbuchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("H", "h"))

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim())
console.log(greeting.trim().length)
