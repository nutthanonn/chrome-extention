let rickRollImg = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMYSwXhjor7bcdGyS4TwMmhCKoHB73SaPuNVOJuaByFc440KTffGQazumW9p0WcN0anY&usqp=CAU",
  "https://www.thewrap.com/wp-content/uploads/2021/07/rickroll-936x527.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkFuF4Sroa-Jq3LuILoy2AgdsSxoCjgwpnEFjFkZjpZ4puRv9Bfq6mYaBJCBy5WhMu7Y&usqp=CAU",
];

const img = document.getElementsByTagName("img");

for (let i = 0; i < img.length; i++) {
  const randomImg = Math.floor(Math.random() * rickRollImg.length);
  img[i].src = rickRollImg[randomImg];
}

const title = document.getElementsByTagName("h2");

for (let i = 0; i < title.length; i++) {
  title[i].innerHTML = "never gonna give you up";
}
