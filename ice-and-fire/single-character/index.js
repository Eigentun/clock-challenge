import fs from "node:fs/promises";

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error.message);
    }
};

const writeFile = async (url) => {
    const character = await getData(url);
    const characterName = character.name;
    await fs.writeFile(
        `character-${characterName}.txt`,
        characterName,
    );
};

// const fileWritten = () => {
//     console.log("file written");
// };

writeFile("https://anapioficeandfire.com/api/characters/583");
