/*jslint node: true */
module.exports = function (RED) {
    "use strict";
    var blcommon = require('./lib/blcommon');


    /*
        Defines the output node for a rule. Copied to a large extent from 66-mongodb.js
    */
    function TimeLimitInNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        /* When a message is received */
        node.on("input", function(msg){
            msg.payload.lid = node.id;

            node.send(msg);
        });

        /* When a node is closed */
        node.on("close", function(){
            //Tidy up connections etc
        });
    }
    RED.nodes.registerType("bl-timelimit in", TimeLimitInNode);
};