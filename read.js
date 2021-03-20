/*property
    clearLine, close, createInterface, empty_array, forEach, freeze, hidden,
    input, length, line, moveCursor, on, output, prompt, setPrompt, stdin,
    stdout, write
*/


import readline from "readline";
import utils from "./utils.js";

const {empty_array} = utils;

function read(callback, prompt, options = {}) {
    const input = options.input || process.stdin;
    const output = options.output || process.stdout;
    const hidden = options.hidden || false;
    prompt = prompt || "";

    const rl = readline.createInterface({
        input,
        output
    });

    if (hidden === true) {
        rl.input.on("keypress", function () {
            // get the number of characters entered so far:
            var len = rl.line.length;
            // move cursor back to the beginning of the input:
            readline.moveCursor(rl.output, -len, 0);
            // clear everything to the right of the cursor:
            readline.clearLine(rl.output, 1);
            // replace the original input with asterisks:
            empty_array(len).forEach(function () {
                rl.output.write("*");
            });
        });
    }

    rl.setPrompt(prompt);
    rl.prompt();

    rl.on(
        "line",
        function (input) {
            rl.close();
            callback(input);
        }
    );

    rl.on(
        "error",
        function (error) {
            rl.close();
            callback(undefined, error);
        }
    );
}

export default Object.freeze(read);