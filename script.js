let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth = 100;
let inventory = ["stick", "dagger", "sword"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const locations = [{name: "Town Square", "button text": []}];

// initialize buttons

button1.onclick = goStore();
button2.onclick = goCave();
button3.onclick = fightDragon();

function goStore() {
    button1innerText = "Buy Stick";
    button1.onclick = buyItem("stick", 10);
    button2.innerText = "Buy Dagger";
    button2.onclick = buyItem("dagger", 20);
    button3.innerText = "Go to town square";
    button3.onclick = goTown();
    text.innerText = "You are in the store.";
}

function goCave() {
    console.log("You are in the cave.");
}

function fightDragon() {
    console.log("You are fighting the dragon.");
}

function goTown() {
    console.log("You are in the town square.");
    button1.innerText = "Go to store";
    button1.onclick = goStore();
    button2.innerText = "Go to cave";
    button2.onclick = goCave();
    button3.innerText = "Fight dragon";
    button3.onclick = fightDragon();
}

function buyItem(item, price) {
    if (gold >= price) {
        inventory.push(item);
        gold -= price;
        console.log("You bought a " + item + ".");
    } else {
        console.log("You don't have enough gold.");
    }
}