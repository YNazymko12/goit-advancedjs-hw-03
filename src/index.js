import SlimSelect from 'slim-select';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const elements = {
  loader: document.querySelector('.loader'),
  select: document.querySelector('.breed-select'),
  catInfoBox: document.querySelector('.cat-info'),
};

let isFirstSelect = true;
let slimSelect;

// elements.loader.classList.remove('is-hidden');
// elements.select.styles.display = 'none';
// elements.select.classList.add('is-hidden');
// elements.slimInput.classList.add('is-hidden');

elements.select.addEventListener('change', handleBreedSelection);

const errorMessage = {
  title: 'Error',
  message: '❌ Oops! Something went wrong! Try reloading the page!',
  position: 'topCenter',
  color: 'red',
};

fetchBreeds()
  .then(breeds => {
    if (!breeds) {
      elements.loader.classList.add('is-hidden');
      elements.select.classList.add('is-hidden');
      throw new Error();
    }
    const data = breeds.map(({ id, name }) => ({ text: name, value: id }));

    slimSelect = new SlimSelect({
      select: '#single',
      settings: {
        placeholderText: 'Search breeds',
        onChange: info => {
          handleSlimSelectChange(info);
        },
      },
    });

    slimSelect.setData([{ placeholder: true, text: '' }, ...data]);

    elements.loader.classList.add('is-hidden');
    elements.select.classList.remove('is-hidden');
  })
  .catch(error => {
    console.log(error.message);
    elements.loader.classList.add('is-hidden');
    elements.select.classList.add('is-hidden');
    iziToast.show(errorMessage);
  });

function handleBreedSelection(event) {
  event.preventDefault();

  elements.loader.classList.remove('is-hidden');
  elements.catInfoBox.innerHTML = '';

  if (isFirstSelect) {
    isFirstSelect = false;
    return;
  }

  const { value } = event.currentTarget;

  fetchCatByBreed(value)
    .then(data => {
      if (!data) {
        elements.loader.classList.add('is-hidden');
        throw new Error();
      }
      elements.catInfoBox.insertAdjacentHTML(
        'beforeend',
        createBreedCardMarkup(data)
      );
      elements.catInfoBox.classList.remove('is-hidden');
      elements.loader.classList.add('is-hidden');
    })
    .catch(error => {
      console.log(error.message);
      elements.loader.classList.add('is-hidden');
      iziToast.show(errorMessage);
    });
}

function createBreedCardMarkup(data) {
  const { url } = data[0];
  const { description, name, temperament } = data[0].breeds[0];

  const markup = `<img src="${url}" alt="${name} cat" width="400" height="auto"/><div class="breed-text-info"><h1>${name}</h1><p class="description">${description}</p><p><strong>Temperament:</strong> ${temperament}</p></div>`;
  return markup;
}

function handleSlimSelectChange(info) {
  const selectedValue = info.value();

  const selectedElement = slimSelect.data.data.find(
    item => item.value === selectedValue
  );

  if (selectedElement) {
    const selectedDOMElement = selectedElement.element;

    selectedDOMElement.classList.add('is-hidden');
  }
}
