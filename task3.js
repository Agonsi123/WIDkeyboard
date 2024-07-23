const bigKey = document.getElementById("bigkey");
const bigKey1 = document.getElementById("bigkey1");
const bigKey2 = document.getElementById("bigkey2");
const bigKey3 = document.getElementById("bigkey3");
const bigKey4 = document.getElementById("bigkey4");
const bigKey5 = document.getElementById("bigkey5");
const bigKey6 = document.getElementById("bigkey6");

const smallKey = document.getElementById("smallkey");
const smallKey1 = document.getElementById("smallkey1");
const smallKey2 = document.getElementById("smallkey2");
const smallKey3 = document.getElementById("smallkey3");
const smallKey4 = document.getElementById("smallkey4");

const keySound = document.getElementById("sound");

bigKey.addEventListener('click', () =>{
    keySound.play("./audio/key01.mp3");
});
bigKey1.addEventListener("click", () => {
  keySound.play("./audio/key02.mp3");
});
bigKey2.addEventListener("click", () => {
  keySound.play("./audio/key03.mp3");
});
bigKey3.addEventListener("click", () => {
  keySound.play("./audio/key04.mp3");
});
bigKey4.addEventListener("click", () => {
  keySound.play("./audio/key05.mp3");
});
bigKey5.addEventListener("click", () => {
  keySound.play("./audio/key06.mp3");
});
bigKey6.addEventListener("click", () => {
  keySound.play("./audio/key07.mp3");
});
smallKey.addEventListener("click", () => {
  keySound.play("./audio/key08.mp3");
});
smallKey1.addEventListener("click", () => {
  keySound.play("./audio/key09.mp3");
});
smallKey2.addEventListener("click", () => {
  keySound.play("./audio/key10.mp3");
});
smallKey3.addEventListener("click", () => {
  keySound.play("./audio/key11.mp3");
});
smallKey4.addEventListener("click", () => {
  keySound.play("./audio/key12.mp3");
});

// const keys = [bigKey, bigKey1, bigKey2, bigKey3, bigKey4, bigKey5, bigKey6, smallKey,smallKey1, smallKey2, smallKey3, smallKey4];
// for (let i = 0; i < keys.length; i++) {
//     keys[i].addEventListener('click', () =>{
//         keySound.play();
//         // keySound.currentTime = i;
//     });
    
// }

