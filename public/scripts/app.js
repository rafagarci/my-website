async function changeLan(language) {
    // Get JSON
    let value;
    await fetch('./language/' + language + '.json')
        .then(response => response.json())
        .then(data => {
            value = data
        });
    
    // change DOM
    document.getElementById("resume").title= value.resume;
    document.getElementById("title").innerHTML= value.title;
    document.getElementById("description").innerHTML= value.description;
}