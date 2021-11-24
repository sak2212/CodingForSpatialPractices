let array_one = [
    "a house of wood",
    "a house of brick",
    "a house of limestone",
    "a house of clouds",
    "a house of dust"
  ];
  let array_two = [
    "among other houses",
    "among round hills",
    "among snowy mountains",
    "by a dry stream",
    "by an salt lake"
  ];

  
  function renderPoem(){
    // grab poem div
    let poem = document.querySelector(".poem");
    // grab random element from array one
    let element_from_array_one = array_one[Math.floor(Math.random()*array_one.length)];
    // grab random element from array two
    let element_from_array_two = array_two[Math.floor(Math.random()*array_two.length)];
    // create new paragraph element
    let paragraph = document.createElement("p");    
    paragraph.textContent = `${element_from_array_one} ${element_from_array_two}`
    // append paragraph to div
    poem.appendChild(paragraph);
  }


  let btn = document.querySelector("button");
  btn.addEventListener("click", renderPoem);

