import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        const fileContent = await promises.readFile(filePath);
        data = JSON.parse(fileContent);
    }

    data[key] = value;

    await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const fileContent = await promises.readFile(filePath);
        const data = JSON.parse(fileContent);
        return data[key];
    }

    return undefined;
}

const isExist = async (path) => {
    try {
        await promises.stat(file);
        return true;
    } catch(e) {
        return false;
    }
    
}

export {saveKeyValue, getKeyValue}