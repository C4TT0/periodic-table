// Fetch Data

const fetchData = async (file) => {
    try {
        const response = await fetch(file)
        const json = await response.json()
        return json
    } catch (err) {
        return err
    }
}

let data = await fetchData('js/elements.json');

// Color Map

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
};

// Mapping and Populating data

const daElement = document.querySelector('.periodic__table');

Object.keys(data["elements"]).map((key, index) => {
    let subStr = `
    <div class="element" style="grid-row: ${data["elements"][key].ypos}; grid-column: ${data["elements"][key].xpos}; border-color: ${colorMap[data["elements"][key].category]};">
        <strong>${data["elements"][key].symbol}</strong>
        <small class="number">${data["elements"][key].number}</small>
        <small class="name">${data["elements"][key].name}</small>
    </div>
    `;
    daElement.innerHTML += subStr;
})