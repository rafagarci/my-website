// Array containing all language objects
let langObjects = [];

/**
 * Changes current language
 * @param {string} language
 */
async function changeLan(language) {
    for (l of langObjects) {
        if (l.language == language) {
            // change DOM
            document.getElementById("resume").title = l.resume;
            document.getElementById("title").innerHTML = l.title;
            document.getElementById("description").innerHTML = l.description;
        }
    }
}

// Retreive all language objects and set to default language
(async () => {
    let langs = [];
    let def;
    await fetch("./language/config.json")
        .then((response) => response.json())
        .then((data) => {
            langs = data.langs;
            def = data.default;
        })
        .catch((err) => console.error(err.message));

    // Save all language objects
    for (l of langs) {
        await fetch("./language/" + l + ".json")
            .then((response) => response.json())
            .then((data) => langObjects.push(data))
            .catch((err) => console.err(err.message));
    }

    // Change language to the default
    changeLan(def);

    // Show DOM
    document.body.style = '';
})();
