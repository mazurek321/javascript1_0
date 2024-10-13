(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  var liczby = [];
  var liczba = 0;
  button.addEventListener("click", () => {
    if (liczba < 10) liczby.push(liczba);
    liczba++;

    content.innerHTML = liczby.join(", ");
  });

  const input = document.getElementById("ex2_text");
  const content2 = document.getElementById("ex2_content");

  input.addEventListener("input", () => {
    content2.innerText = "";

    if (input.value.length !== 9)
      content2.innerHTML = "Długość numeru musi być równa 9";
    if (input.value.match(/[a-z]/i))
      content2.innerHTML += "Numer nie może zawierać liter";
    if (input.value.match(/[^0-9]/i))
      content2.innerHTML += "Numer nie może znaków specjalnych";
    if (input.value.match(/[1,2,3,4,5,6,7,8,9,0]{9}/i))
      content2.innerHTML += "Numer jest poprawny";
  });

  const dragElement = document.getElementById("ex3_element");
  const container1 = document.getElementById("ex3_one");
  const container2 = document.getElementById("ex3_two");

  dragElement.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });

  container1.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  container2.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  container1.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const element = document.getElementById(data);
    container1.appendChild(element);
  });

  container2.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const element = document.getElementById(data);
    container2.appendChild(element);
  });
})();
