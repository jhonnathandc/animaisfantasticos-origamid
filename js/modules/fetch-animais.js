import AnimaNumbers from "./anima-numbers.js";

export default function fetchAnimals(url, target) {
  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("number-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numbersGrid = document.querySelector(target);
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    numbersGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaAnimalsNumbers() {
    const animaNumbers = new AnimaNumbers(
      "[data-numero]",
      ".numbers",
      "active"
    );
    animaNumbers.init();
  }

  // Puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function createAnimals() {
    try {
      // Fetch, espera a resposta e transforma em json
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      // Após a transformação de json, ativa as funções
      // para preencher e animar os números
      animalsJSON.forEach((animal) => fillAnimals(animal));
      animaAnimalsNumbers();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimals();
}
