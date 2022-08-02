//Add items list
const addList = document.getElementById("addingbtn");
const palcePopUp = document.querySelector(".palcePopUp");

addList.addEventListener("click", display);
function display() {
  const popUp = document.createElement("div");
  popUp.setAttribute("class", "card");

  const cardHeading = document.createElement("p");
  cardHeading.innerText = "Add New List";

  const cardInput = document.createElement("input");

  cardInput.type = "text";
  cardInput.placeholder = "Enter List Name Here";
  cardInput.style.textAlign = "center";
  cardInput.id = "name";

  const btnAdd = document.createElement("div");
  btnAdd.setAttribute("class", "button");

  btnAdd.innerText = "Add";

  const btnClose = document.createElement("div");
  btnClose.innerText = "Close";
  btnClose.setAttribute("class", "button");

  document.querySelector(".container-fluid").classList.add("blur");
  palcePopUp.appendChild(popUp);

  popUp.append(cardHeading, cardInput, btnAdd, btnClose);
  //
  ///-----------------------------------------------------------close button
  btnClose.addEventListener("click", () => {
    palcePopUp.removeChild(popUp);
    document.querySelector(".container-fluid").classList.remove("blur");
  });

  //////----------------------------------------------------------add button
  btnAdd.addEventListener("click", () => {
    if (cardInput.value === "") {
      alert("Please Enter Some Place Name");
    } else {
      document.querySelector(".noitems").style.display = "none";
      palcePopUp.removeChild(popUp);
      document.querySelector(".container-fluid").classList.remove("blur");

      const card1 = document.createElement("div");
      card1.className = "cards";

      const listName = document.createElement("p");
      listName.id = "title";
      listName.innerText = cardInput.value;

      const element = document.createElement("div");
      element.className = "buttons";
      const add = document.createElement("i");
      add.className = "fa-solid fa-circle-plus";

      const del = document.createElement("i");
      del.className = "fa-solid fa-trash-can";
      del.style.color = "#FD5d5d";

      const container2 = document.querySelector(".cardContainer");
      container2.appendChild(card1);
      card1.append(listName, element);

      element.append(add, del);
      ///////////new-page---------------------------

      //deleting the whole card---------------------------------------------------------------
      del.addEventListener("click", () => {
        document.querySelector(".cardContainer").removeChild(card1);
        if (document.querySelector(".cardContainer").innerText === "") {
          document.querySelector(".noitem").style.display = "block";
        }
      });

      //////// Inside card popup adding item lists---------------------------------------------------
      add.addEventListener("click", () => {
        const card = document.createElement("div");
        card.className = "card";

        const heading = document.createElement("p");
        heading.innerText = "Add New List";

        const cardInput = document.createElement("input");
        cardInput.type = "text";
        cardInput.placeholder = "Enter List Name Here";
        cardInput.style.textAlign = "center";
        cardInput.id = "name";

        const plus = document.createElement("div");
        plus.setAttribute("class", "button");
        plus.innerText = "Add";

        const btnClose = document.createElement("div");
        btnClose.setAttribute("class", "button");
        btnClose.innerText = "Close";

        document.querySelector(".container-fluid").classList.add("blur");
        palcePopUp.appendChild(card);

        card.appendChild(heading);
        card.appendChild(cardInput);
        card.appendChild(plus);
        card.appendChild(btnClose);
        // card.append(heading, cardInput, plus, btnClose);

        ///-----------------------------------------------------------close button
        btnClose.addEventListener("click", () => {
          palcePopUp.removeChild(card);
          document.querySelector(".container-fluid").classList.remove("blur");
        });

        //////// Inside card  adding item lists---------------------------------------------------add button
        plus.addEventListener("click", () => {
          if (cardInput.value === "") {
            alert("Please Enter Some Activity");
          } else {
            palcePopUp.removeChild(card); //add list pop up will dissapears
            document.querySelector(".container-fluid").classList.remove("blur"); //blur will dissapear

            // let input = document.getElementById('name').value;
            const ul = document.createElement("ul");
            ul.style.listStyleType = "none";
            ul.className = "ul";

            let li = document.createElement("li");
            let btn1 = document.createElement("button");
            btn1.setAttribute("class", "compBtn");
            btn1.innerText = "Completed";

            li.innerText = cardInput.value;

            card1.appendChild(ul).appendChild(li).appendChild(btn1);

            //----------------end jeevesh----------

            btn1.addEventListener("click", function () {
              li.style.textDecoration = "line-through";
              li.style.color = "black";
              li.removeChild(btn1);
            });
          }
        });
      });
      ///----------------------------------------------

      // /////creating new page--------------------------------------------------------------

      listName.addEventListener("click", () => {
        // document.querySelector(".container-fluid").style.visibility = "hidden";
        document.querySelector(".container-fluid").style.display = "none";
        // document.querySelector("#addingbtn").style.visibility = "visible";
        document.querySelector("#addingbtn").style.display = "inline-block";

        const pageSecond = document.querySelector(".pageSecond");
        // pageSecond.style.visibility = "visible";
        pageSecond.style.display = "block";

        let div = document.createElement("div");
        div.className = "new";
        pageSecond.appendChild(div);

        let div1 = document.createElement("div");
        // div1.className = "btn-text";
        div.appendChild(div1);

        let leftArrow = document.createElement("i");
        leftArrow.className = "fa-solid fa-circle-arrow-left";
        div1.appendChild(leftArrow);

        let back = document.createElement("span");
        back.className = "back";
        back.innerText = "Back";
        div1.appendChild(back);

        let h1 = document.createElement("h1");
        h1.innerText = cardInput.value;
        h1.className = "h1";
        h1.style.color = "white";
        div.appendChild(h1);

        let div2 = document.createElement("div");
        div2.className = "new-card";
        pageSecond.appendChild(div2).appendChild(card1);

        ////////////back button--------------

        leftArrow.addEventListener("click", () => {
          div2.removeChild(card1);
          pageSecond.removeChild(div);
          container2.appendChild(card1);
          // document.querySelector(".container-fluid").style.visibility =
          //   "visible";
          document.querySelector(".container-fluid").style.display = "block";
          // document.querySelector(".pageSecond").style.visibility = "hidden";
        });
        ////---------------------------
        del.addEventListener("click", () => {
          // document.querySelector(".container-fluid").style.visibility =
          //   "visible";
          document.querySelector(".container-fluid").style.display = "block";

          // document.querySelector(".pageSecond").style.visibility = "hidden";
          document.querySelector(".pageSecond").style.display = "none";
          document.querySelector(".pageSecond").removeChild(div);
          div2.removeChild(card1);
        });
      });
    }
  });
}
