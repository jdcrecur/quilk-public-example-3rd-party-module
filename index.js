var Spinner = require('cli-spinner').Spinner,
    consoleX = require('console-x').configure({
        separator: "\n", // appended after each individual log to screen; default is newline
        summaryColon: true, // whether to append colon after summary; default is true
        getPrefix: function() { return "Test Message>>" }, // prefix function; default is timestamp; pass null to disable
        colors: {
            log: "white", // default
            notify: "green", //default
            warn: "yellow", //default
            err: "red" //default
        }
    });

/**
 * Looks like a lot of code for nothing... but just point your eyes at the run function... that is where quilk looks
 * @type {{run: module.exports.run, showSpinners: module.exports.showSpinners, help: module.exports.help}}
 */
module.exports = {

    /**
     * The main entry point for the quilk runner
     * @param next
     */
    run: function( next ){

        consoleX.log('This is an example','I can be used with the quilk runner');

        this.showSpinners( function(){
            next();
        } );

    },

    /**
     * An arbitary function the run method calls
     * @param cb
     */
    showSpinners: function( cb ){
        var numSpinners = Spinner.spinners.length;
        var spinner = null;
        var index = 0;
        var delay = 2000;

        function nextSpinner(d) {
            d = d || delay;

            setTimeout(function() {
                if (spinner !== null) {
                    spinner.stop();
                    process.stdout.write('\n');
                }

                spinner = new Spinner('Spinner ' + (index+1) + ' of ' + numSpinners);
                spinner.setSpinnerString(index);
                spinner.start();

                if (index < 5) {
                    index++;
                    nextSpinner();
                } else {
                    spinner.stop();
                    process.stdout.write('\n');
                    spinner = new Spinner('Spinner at custom position %s <--');
                    spinner.start();

                    setTimeout(function() {
                        spinner.stop();
                        process.stdout.write('\n');

                        //run the callback from the run method
                        cb();

                    }, delay);
                }
            }, d);
        }

        nextSpinner(2000);
    },

    /**
     * This is the function that is run should someone type quilk help module=<this module name>
     */
    help: function(){

        console.log('This custom 3rd party library does not actually do anything usefull other than demo a series of cli spinner from cli-spinner npm package :)');

    }
};