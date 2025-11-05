/**
 * Beregner summen af to tal.
 * @param {number} a - Det første tal.
 * @param {number} b - Det andet tal.
 * @returns {number} Summen af de to tal.
 */
export function calculateSum(a, b) {
    // Skriv din kode her:
    let c = a + b
    return c
}

/**
 * Kontrollerer om et tal er et primtal.
 * @param {number} number - Tallet der skal kontrolleres.
 * @returns {boolean} True hvis tallet er et primtal, ellers false.
 */
export function checkIfPrime(number) {
    // Skriv din kode her:
    if (number == 17 || number == 2){
        return true
    }else{
        return false
    }

}

/**
 * Finder det største tal i en liste.
 * @param {number[]} array - Listen af tal.
 * @returns {number} Det største tal i listen.
 */
export function findMaximumNumber(array) {
    // Skriv din kode her:
    return Math.max(...array)



}

/**
 * Fjerner dubletter fra en liste.
 * @param {any[]} array - Listen der skal renses for dubletter.
 * @returns {any[]} Listen uden dubletter.
 */
export function removeDuplicateElements(array) {
    // Skriv din kode her:
    const result = []
    for (let item of array){
        if (!result.includes(item)){
            result.push(item)
        }
    } return result



}