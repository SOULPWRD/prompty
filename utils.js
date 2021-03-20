/*property
    apply, empty_array, freeze, map
*/

function empty_array(length, fill) {
    return Array.apply(null, new Array(length)).map(function (ignore) {
        return fill;
    });
}

export default Object.freeze({
    empty_array
});