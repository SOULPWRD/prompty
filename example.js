/*property
    ask, label, log, name
*/

import prompty from "./prompty.js";

const p = prompty();

p.ask(
    function (results, error) {
        if (error) {
            throw error;
        }

        console.log(results);
    },
    [{
        name: "name",
        label: "What is your name?"
    }, {
        name: "surname",
        label: "What is your surname?"
    }, {
        name: "age",
        label: "What is your age?"
    }]
);