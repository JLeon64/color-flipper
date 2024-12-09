import './style.css'

const color_palette = {
  '#0B5563': 'Midnight Green',
  '#FFF9FB':'Snow',
  '#4FB0C6':'Moonstone',
  '#824670':'Plum',
  '#554348':'Rose Ebony', 
};



Object.keys(color_palette).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = color_palette[color];
});

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(color_palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color_palette[color];

    colorPickerSelect.append(option);
  })
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;

    document.body.style.backgroundColor = newColor;

  })

};

addOptionsToColorPicker();
addEventListenerToColorPicker();