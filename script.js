const glossaryTerms = [];
const glossaryContainer = document.getElementById('glossary-terms');
const adminTermsContainer = document.getElementById('admin-terms');
const termForm = document.getElementById('term-form');

function displayGlossary() {
    glossaryContainer.innerHTML = '';
    glossaryTerms.sort().forEach(term => {
        const termElement = document.createElement('div');
        termElement.innerHTML = `<strong>${term.term}</strong>: ${term.definition}`;
        glossaryContainer.appendChild(termElement);
    });
}

function displayAdminTerms() {
    adminTermsContainer.innerHTML = '';
    glossaryTerms.forEach((term, index) => {
        const termElement = document.createElement('div');
        termElement.innerHTML = `<strong>${term.term}</strong>: ${term.definition} <button onclick="deleteTerm(${index})">Delete</button>`;
        adminTermsContainer.appendChild(termElement);
    });
}

function deleteTerm(index) {
    glossaryTerms.splice(index, 1);
    displayGlossary();
    displayAdminTerms();
}

termForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const termInput = document.getElementById('term').value;
    const definitionInput = document.getElementById('definition').value;
    glossaryTerms.push({ term: termInput, definition: definitionInput });
    displayGlossary();
    displayAdminTerms();
    termForm.reset();
});

// Initial display
displayGlossary();
displayAdminTerms();
