
(function () {
// start logic
    const myHeading = document.getElementById("myHeading");
    myHeading.innerHTML = " Nomsa's Demo Site";
    document.querySelector("li").setAttribute("class", "currentPage");
    // document.querySelector("li a").setAttribute("href", "https://www.google.com");
    document.getElementById("myTestBtn").addEventListener("click", function (ev) {
    console.dir(ev);
    });

// let redBtn = document.querySelector('.red');
// redBtn.addEventListener('click', function () {
//   document.body.setAttribute('class', "redBack");
// })

// let greenBtn = document.querySelector('.green');
// greenBtn.addEventListener('click', function () {
//   document.body.setAttribute('class', "greenBack");
// })

// let blueBtn = document.querySelector('.blue');
// blueBtn.addEventListener('click', function () {
//   document.body.setAttribute('class', "blueBack");
// })

let colBtns = document.querySelectorAll('.colPicker');
colBtns.forEach(colBtn => {
  colBtn.addEventListener('click', function (ev) {
    console.info('Button clicked: ${ev.target.textContent}');
    let backCol = ev.target.innerText;
    backCol= backCol.toLowerCase()+'Back';
    document.body.setAttribute('class', backCol);
});

});

// end logic
}());
