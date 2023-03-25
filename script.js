var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.style.color == "red") {
      like.style.color = "black";
    } else {
      like.style.color = "red";
    }
  });
}
var pluss = document.getElementsByClassName("plus-btn");
for (let i = 0; i < pluss.length; i++) {
  let plus1 = pluss[i];

  plus1.addEventListener("click", function () {
    plus1.previousElementSibling.value++;
  });
}
var minuss = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minuss.length; i++) {
  let min1 = minuss[i];

  min1.addEventListener("click", function () {
    if (min1.nextElementSibling.value > 1) {
      min1.nextElementSibling.value--;
    }
  });
}
var deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];
  del.addEventListener("click", function () {
    del.parentElement.remove();
    somme();
  });
}
//somme total
var items = document.getElementsByClassName("Item");
var total = document.getElementById("finalPrice");
function somme() {
  console.log(items);
  var s = 0;
  for (let i = 0; i < items.length; i++) {
    s +=
      items[i].querySelector(".Quant").value *
      items[i].querySelector(".price").innerText;
  }
  return (total.value = s);
}
