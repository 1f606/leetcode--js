//  solution one: use js api replace()

/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddress = function (address) {
    return address.replace(/\./g, '[.]')
}

//  solution two: split() and join()

/**
 * @param {string} address
 * @return {string}
 */
let defangIPaddress = function (address) {
    return address.split('.').join('[.]')
}