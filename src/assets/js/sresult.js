
  const range = document.querySelector(".range"); //Khởi tạo biến range từ tên element có class là .range
  const number = document.querySelector(".number");
  const form = document.getElementById("filter_form");

  // Set giá trị ban đầu của input cho output khi vừa load filter 
  setNumber(range, number); 

   // Set giá trị cho output khi input có thay đổi
  range.addEventListener("input", () => {
    setNumber(range, number);
  });

  // Reset lại giá trị của range khi chọn reset form
  form.addEventListener("reset", ()=>{
    number.innerHTML= "0";
    number.style.left = `calc(50% + 0.5px)`;
  }) 

function setNumber(range, number) {
  const val = range.value;
  const min = range.min;
  const max = range.max;
  const newVal = Number(((val - min) * 100) / (max - min));
  number.innerHTML = val;

  // Công thức thay đổi vị trí cho number khi giá trị range thay đổi
  number.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px`;
}

// Ẩn hiện POPUP
function showFilter(name){ 
  document.querySelector(`${name}`).style.display = "block";
  console.log("ok");
}
function hideFilter(name){ 
  document.querySelector(`${name}`).style.display = "none";
}

// ================================

function topScroll(){
  window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth' 
 });
}
