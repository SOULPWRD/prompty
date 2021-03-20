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
        name: "username",
        label: "What is your username?"
    }, {
        name: "password",
        label: "What is your password?",
        hidden: true
    }]
);