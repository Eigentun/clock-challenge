const getData = async () => {
    try {
        const response = await fetch(
            "https://anapioficeandfire.com/api/books/1",
        );
        if (!response.ok) {
            throw new Error("Couldn't fetch.");
        }
        const data = await response.json();
        const characters = data.povCharacters;
        for (const c of characters) {
            const characterFetch = await fetch(c);
            const characterData = await characterFetch.json();
            console.log(characterData.name);
            console.log(characterData.gender);
            const characterCulture = characterData.culture === ""
                ? "Empty"
                : characterData.culture;
            console.log(characterCulture);
            const deathStatus = characterData.died === "" ? "Alive" : "Dead";
            console.log(deathStatus);
        }
    } catch (error) {
        console.error(error);
    }
};

getData();
