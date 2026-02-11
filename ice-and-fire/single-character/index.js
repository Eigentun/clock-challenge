import fs from "node:fs/promises";

const getData = async (url) => {
    //try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    return await result;
    // } catch (error) {
    //     console.error(error.message);
    // }
};

const writeFile = async (url) => {
    const character = await getData(url);
    const characterName = character.name;
    await fs.writeFile(
        `character-${characterName}.txt`,
        characterName,
    );
};

const saveCharacterToFile = async () => {
    try {
        await writeFile("https://anapioficeandfire.com/api/characters/583");
        console.log("success");
    } catch (error) {
        console.error(error.message);
    }
};

saveCharacterToFile();
