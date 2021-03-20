/*property
    freeze, series
*/

// run async tasks in series
function series(arr) {
    let cursor = -1;

    function next(value, err, done) {
        cursor += 1;
        const fn = arr[cursor];

        if (err !== undefined) {
            done(undefined, err);
            return;
        }

        if (fn === undefined) {
            done(value);
            return;
        }

        fn(function (value, err) {
            next(value, err, done);
        }, value);
    }

    return function (callback, value) {
        next(value, undefined, callback);
    };
}

export default Object.freeze({
    series
});