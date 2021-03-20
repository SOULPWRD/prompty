/*property
    ask, freeze, input, label, map, name, output, series, stdin, stdout
*/

import async from "./async.js";
import read from "./read.js";

function prompty(spec = {}) {
    const input = spec.input || process.stdin;
    const output = spec.output || process.stdout;

    function ask(done, scheme) {
        const questions = scheme.map(
            function (config) {
                const name = config.name;
                const label = config.label + " ";

                return function question(next, results = {}) {
                    read(
                        function (answer, error) {
                            if (error !== undefined) {
                                next(undefined, error);
                                return;
                            }

                            results[name] = answer;
                            next(results);
                        },
                        label,
                        {
                            input,
                            output
                        }
                    );
                };
            }
        );

        return async.series(questions)(function (results, error) {
            if (error) {
                done(undefined, error);
            }

            done(results);
        });
    }

    return Object.freeze({
        ask
    });
}

export default Object.freeze(prompty);