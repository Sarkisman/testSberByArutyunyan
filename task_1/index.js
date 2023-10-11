import {encoded, translations} from './data.js'

export const decodeIds = (encoded, translations) => {
  return encoded.map(item => {
    const decodedItem = {};
    for (const key in item) {
      if (key.endsWith('Id') && !['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
        decodedItem[key] = translations[item[key]] || item[key];
      } else {
        decodedItem[key] = item[key];
      }
    }
    return decodedItem;
  });
};

export const getUniqueIds = (encoded) => {
  const uniqueIds = new Set();
  encoded.forEach(item => {
    for (const key in item) {
      if (key.endsWith('Id')) {
        uniqueIds.add(item[key]);
      }
    }
  });
  return Array.from(uniqueIds);
};

console.log("Let's rock")
console.log(encoded, translations)

const decoded = decodeIds(encoded, translations);
console.log(decoded);

const uniqueIds = getUniqueIds(encoded);
console.log(uniqueIds);

console.log("Let's rock")
console.log(encoded, translations)

