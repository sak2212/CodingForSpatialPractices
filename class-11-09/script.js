let nouns = ["whale", "swordfish", "crab"];
let verbs = ["sinks", "swims", "shimmies"];
let adjectives = ["surreal", "slippery", "snazzy"];

// let item = arrayName[Math.floor(Math.random()*arrayName.length)]

// let random = nouns[Math.floor(Math.random()*nouns.length)];
let noun = nouns[Math.floor(Math.random()*nouns.length)];
let noun2 = nouns[Math.floor(Math.random()*nouns.length)];
let verb = verbs[Math.floor(Math.random()*nouns.length)];
let adjective = adjectives[Math.floor(Math.random()*nouns.length)];

let sentence = `My ${noun} ${verb} with its enemy the ${adjective} ${noun2}.`

console.log(sentence);