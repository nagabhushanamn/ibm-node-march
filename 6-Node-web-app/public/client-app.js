
console.log('-client-app.js-');


let hungryBtn = document.getElementById('hungryBtn');
hungryBtn.addEventListener('click', function () {
    // AJAX call  ( using XHR or Fetch API )
    fetch('/menu')
        .then(resp => resp.json())
        .then(items => {
            document.getElementById('menu-box').innerText = items.join(',');
        });
})