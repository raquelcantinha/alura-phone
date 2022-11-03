const listaBtns = document.querySelectorAll('.key');

for (let i = 0; i < listaBtns.length; i++) {
  let btn = listaBtns[i];
  btn.addEventListener("click", function() { 
    let phoneField = document.getElementById("phone-field");
    phoneField.value += btn.value + "";
  })

  btn.addEventListener("keydown", function(event) {
    if (event.code === "Space" || event.code === "Enter") {
    btn.classList.add('ativa');
    }
  })

  btn.addEventListener("keyup", function(event) {
    if (event.code === "Space" || event.code === "Enter") {
    btn.classList.remove('ativa');
    }
  })
}
