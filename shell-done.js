var sh = require('shelljs');

module.exports = function (steps, log) {
    if (!log) {
        log = function (message) {
            console.log(message);
        }
    }

    steps.forEach(function (step) {
        if (step.message) {
            log('\n-- ' + step.message + ' --\n');
        } else {
            log('\n');
        }

        step.commands.forEach(function (command) {
            log(command);
            var code = sh.exec(command).code;

            if (code != 0) {
                log('NOT DONE (ERROR)!');
            } else {
                log('Done');
            }
        });
    });
};