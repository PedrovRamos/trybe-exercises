function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerText = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
  function createDaysOfDecember (){
      
      let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
      const daysList = document.getElementById("days")

      
      for (let index of decemberDaysList){
          
          
          let daysOfDecember = index
          let createDays = document.createElement("li")
          createDays.innerText = daysOfDecember;
          createDays.className = "day"


          daysList.appendChild(createDays)

        }
        
        document.querySelectorAll("#days li")[5].classList.add("friday")
        document.querySelectorAll("#days li")[12].classList.add("friday")
        document.querySelectorAll("#days li")[19].classList.add("friday")
        document.querySelectorAll("#days li")[26].classList.add("friday")


        document.querySelectorAll("#days li")[25].classList.add("holiday")
        document.querySelectorAll("#days li")[26].classList.add("holiday")
        document.querySelectorAll("#days li")[32].classList.add("holiday")
    }

    createDaysOfDecember();






      
  
  // Escreva seu código abaixo.