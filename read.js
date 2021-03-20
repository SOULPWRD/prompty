/*property
    close, createInterface, freeze, input, on, output, prompt, setPrompt, stdin,
    stdout
*/

import readline from "readline";

function read(callback, prompt, options = {}) {
    const input = options.input || process.stdin;
    const output = options.output || process.stdout;
    prompt = prompt || "";

    const rl = readline.createInterface({
        input,
        output
    });

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