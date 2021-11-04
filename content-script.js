const exstensionSetup = function () {
    const exampleDomain = document.getElementsByTagName('h1');

    const injectText = document.createElement('h1')
    injectText.innerHTML = "Welcome to UCT";

    let parentDiv = exampleDomain[0].parentNode;
    parentDiv.insertBefore(injectText, exampleDomain[0])
}

exstensionSetup();