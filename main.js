let number = 0
const num = document.querySelector(".num")
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset")
    
increment.addEventListener("click", () => {
  number++
  num.innerText = number
  num.style.background = "#0b0"
  num.style.boxShadow = "0 0 0 5px rgba(0, 150, 0, 0.3)"
  increment.style.boxShadow = "0 0 0 5px rgba(0, 100, 250, 0.2)"
      
  setTimeout(del, 300)
    function del() {
      increment.style.boxShadow = "none";
  }
})
    
decrement.addEventListener("click", () => {
  number--
  num.innerText = number
  decrement.style.boxShadow = "0 0 0 5px rgba(100, 100, 100, 0.3)"
    
  setTimeout(del, 300)
    function del() {
      decrement.style.boxShadow = "none";
    }
    
    if (number < 1) {
      number = 0
      num.innerText = "zero"
      num.style.background = "orange"
      num.style.boxShadow = "0 0 0 5px rgba(255, 152, 31, 0.3)"
        
      setTimeout(del, 300)
        function del() {
          num.style.boxShadow = "none";
    }
  }
})
    
reset.addEventListener("click", () => {
  number = 0
  num.innerText = "zero"
  num.style.background = "orange"
  reset.style.boxShadow = "0 0 0 5px rgba(200, 100, 0, 0.3)"
  num.style.boxShadow = "0 0 0 5px rgba(255, 152, 31, 0.3)"
      
  setTimeout(del, 300)
    function del() {
      reset.style.boxShadow = "none";
      num.style.boxShadow = "none";
    }
})