import fs from 'fs';

export function readFile(filePath: string = 'inventory.txt'){
   return fs.readFileSync(filePath).toString();
}

export function saveFile(fileContent: string, filePath: string = 'inventory.txt'){
    return fs.writeFileSync(filePath, fileContent);
}