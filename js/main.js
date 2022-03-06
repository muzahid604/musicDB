const getElement = element => {
    return document.getElementById(element)
};
const getInputValue = () => {
    const input = getElement('input')
    const inputValue = input.value;
    input.value = ''

    const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${inputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = artist => {
    console.log(artist)
}