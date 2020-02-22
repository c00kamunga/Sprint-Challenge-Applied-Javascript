// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const theHeaderContainer = document.querySelector('.header-container')

function Header() {
    const headerContainer = document.createElement('div');
    const dateButton = document.createElement('span');
    const lambdaTimes = document.createElement('h1');
    const tempButton = document.createElement('span');

    headerContainer.classList.add('header');
    dateButton.classList.add('date');
    tempButton.classList.add('temp');

    dateButton.textContent = 'March 28, 2019';
    lambdaTimes.textContent = 'Lambda Times';
    tempButton.textContent = '98°';

    headerContainer.appendChild(dateButton)
    headerContainer.appendChild(lambdaTimes)
    headerContainer.appendChild(tempButton)

    return headerContainer
}

theHeaderContainer.appendChild(Header());