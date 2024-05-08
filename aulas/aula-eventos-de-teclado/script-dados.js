document.addEventListener("keyup", (e) => {
  console.log(e.key)
  console.log(e.code)
})

const voltar = document.getElementById("voltar")

document.addEventListener("keyup", (e) => {
  if(e.code == "Backspace"){
      voltar.click()
    }
})