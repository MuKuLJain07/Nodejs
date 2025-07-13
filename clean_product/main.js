// Ideally the data should come from somewhere but for the sake of demonstration, I am using a hardcoded array.
const productCodes = ["abc1234", "XYZ0001", "123ABCD", "A1B2C3D", "lmn9876", "DEF5678"]


function codeValid(code) {
/** check if a product code is valid. */
    if (code.length !== 7) {
        return false;
    }
    
    // checks the first three characters are letters
    for (let i = 0; i < 3; i++) {
        const asciiCode = code.charCodeAt(i);

        if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
            continue;
        } 
        else {
            return false
        }
    }

    // checks the last four characters are integers
        for (let i = 3; i < 7; i++) {
        const asciiCode = code.charCodeAt(i);

        if (asciiCode >= 48 && asciiCode <= 57) {
            continue;
        } 
        else {
            return false
        }
    }

    return true;
}
function processData (productCodes) {
/** 
 *processes the input data(product codes) and return a json result with the following fields:
 * - totalCodes: total number of product codes
 * - validCodes: number of valid product codes
 * - invalidCodes: number of invalid product codes
 * - normalizedValidCodes: array of valid product codes, normalized to uppercase
*/
    let totalCodes=0
    let validCodes=0
    let invalidCodes=0
    let normalizedValidCodes=[]

    for (const productCode of productCodes) {
        // update total count
        totalCodes+=1
        
        if (codeValid(productCode) === true) {
            validCodes+=1
            normalizedValidCodes.push(productCode.toUpperCase());
        }
        else {
            invalidCodes+=1
        }
    }

    return {
        totalCodes,
        validCodes,
        invalidCodes,
        normalizedValidCodes: normalizedValidCodes.sort(),
    };
}

module.exports = { processData };
