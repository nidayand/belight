/*jslint node: true */
module.exports = function (RED) {
    "use strict";
    /*
        Set the configuration node for DS
    */
    function DsConfigNode(n) {
        RED.nodes.createNode(this, n);
        this.dsid = n.dsid;
    }
    RED.nodes.registerType("blds", DsConfigNode);

    /*
        Set the configuration node for MQTT
        Information is copied from the 10-mqtt.js
    */
    function MQTTBrokerNode(n) {
        RED.nodes.createNode(this, n);
        this.broker = n.broker;
        this.port = n.port;
        this.prependtxt = n.prependtxt;
        this.clientid = n.clientid;
        if (this.credentials) {
            this.username = this.credentials.user;
            this.password = this.credentials.password;
        }
    }
    RED.nodes.registerType("blbroker", MQTTBrokerNode, {
        credentials: {
            user: {
                type: "text"
            },
            password: {
                type: "password"
            }
        }
    });

    /*
        Set the configuration node for mongodb.
        Information is copied from the 66-mongodb.js
    */
    function BelightNode(n) {
        RED.nodes.createNode(this, n);
        this.hostname = n.hostname;
        this.port = n.port;
        this.db = n.db;
        this.name = n.name;

        var url = "mongodb://";
        if (this.credentials && this.credentials.user && this.credentials.password) {
            url += this.credentials.user + ":" + this.credentials.password + "@";
        }
        url += this.hostname + ":" + this.port + "/" + this.db;

        this.url = url;
    }

    RED.nodes.registerType("bldb", BelightNode, {
        credentials: {
            user: {
                type: "text"
            },
            password: {
                type: "password"
            }
        }
    });
};