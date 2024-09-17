/**
 * This is a simple example of a bot that will hook into the API and provide a way to favourite attachements on SteamCommunity
 * I do not promote the use of this file, it is made for educational purposes on the possible functionality of this tool.
 *
 * Note: This is simply a proof-of-concept
 *
 * Make sure you copy this file and not use it directly. Follow install instructions on github.
 */


/* We will require the node-steam-bot-manager module to use it */
var BotManager = require('node-steam-bot-manager');
var botsManager = new BotManager();// Create new instance of the BotManager
var attachementId = '___SHARED_FILE_ID___';
var attachementAppId = '___SHARED_FILE_APP_ID___';
function FavouriteBot() {

    /**
     * We will favourite a shared file
     */
    var favourite = function () {
        /**
         * We will loop through all bot accounts
         */
        for (var botAccountIndex in botsManager.getAccounts()) {
            /**
             * To avoid over-writing the same variable due to the for loop, we will enclose in a function.
             */
            (function () {
                var botAccount = botsManager.getAccounts()[botAccountIndex];// Get botAccount from the index

                /**
                 * We will execute the command to favourite a shared file
                 */
                botAccount.Community.favouriteSharedFile(attachementId, attachementAppId, function (err) {
                    if (err)
                        botsManager.errorDebug("Failed to favourite file.");
                    else
                        botsManager.infoDebug("Successfully favoured file by " + botAccount.getAccountName());
                });
            })();
        }
    };
    /**
     * We will un-favourite a shared file
     */
    var unfavourite = function () {
        /**
         * We will loop through all bot accounts
         */
        for (var botAccountIndex in botsManager.getAccounts()) {
            /**
             * To avoid over-writing the same variable due to the for loop, we will enclose in a function.
             */
            (function () {
                var botAccount = botsManager.getAccounts()[botAccountIndex];// Get botAccount from the index

                /**
                 * We will execute the command to un-favourite a shared file
                 */
                botAccount.Community.unfavouriteSharedFile(attachementId, attachementAppId, function (err) {
                    if (err)
                        botsManager.errorDebug("Failed to un-favourite file.");
                    else
                        botsManager.infoDebug("Successfully un-favoured file by " + botAccount.getAccountName());
                });

            })();
        }
    };


    botsManager.startManager(function (err) {
        setTimeout(unfavourite, 1000 * 10);// We will delay 10 seconds until all accounts are expected to be logged in... There is obviously a much better way, however it requires a lot of code | This is just a simple example.
    });// You must start the manager at the end so that all the hooks above it, are registered.

}

new FavouriteBot();// Run the code above.

module.exports = FavouriteBot;
