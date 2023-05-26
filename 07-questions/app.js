const questions = document.querySelectorAll('.question')
questions.forEach(function(question){
    const btn =question.querySelector(".question-btn")
    btn.addEventListener("click", function () {
        // console.log(question);
    
        questions.forEach(function (item) {
          if (item !== question) {
            item.classList.remove("show-text");
          }
        });
    
        question.classList.toggle("show-text");
      });
    });

// const questionbtn = document.querySelectorAll('.question-btn')
// questionbtn.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const question =e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })