export function capitalize(string) {
    return string.charAt(0).toUpperCase()+string.slice(1)
};

export function reverseString(string) {
    return string.split('').reverse().join('')
};

export const calculator = {
    add: (a, b) => a+b,
    subtruct: (a, b) => a-b,
    multiply: (a, b) => a*b,
    divide: (a, b) => a/b,
};

export function caesarCipher(string, shiftFactor) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const chipherdAlphabet = (() => {
        let tempArray=[];
        for (let i = 0;i<alphabet.length;i++) {
            if(alphabet[i+shiftFactor] == undefined) {
                for (let j = 0; j<alphabet.length;j++){
                    tempArray.push(alphabet.charAt(j))
                }
            }
            tempArray.push(alphabet.charAt(i+shiftFactor));
        }
        return tempArray
    })();
    // map string characthers to alphabet index
    let stringIndexesMapping = [];
    string.split('').forEach(stringCharacter => {
        for (let k = 0; k<alphabet.length;k++) {    //itera in tutto alphabet 
            if (stringCharacter === alphabet[k]) {
                stringIndexesMapping.push(chipherdAlphabet[k])
            }
            else if (stringCharacter === alphabet[k].toUpperCase()) {
                stringIndexesMapping.push(chipherdAlphabet[k].toUpperCase())
            }
            else {
                if (!(()=> {return stringCharacter.length === 1 && stringCharacter.match(/[a-z]/i)})()) {//if stringCharacter is a simbol
                    stringIndexesMapping.push(stringCharacter)
                    break
                }
            }
        }
    })
    return stringIndexesMapping.join('')
};

export function analyzeArray(data) {
    let average=data[0];
    let min=data[0];
    let max=data[0];
    const length=data.length;
    for (let i =1;i<data.length;i++) {
        if(data[i]<min) {
            min=data[i]
        }
        if(data[i]>max) {
            max=data[i]
        }
        average+=data[i];
        if(i === data.length-1) {
            average/=data.length
        }
    }
    return {min, max, average, length}
};