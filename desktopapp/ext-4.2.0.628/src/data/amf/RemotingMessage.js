/*
This file is part of Ext JS 4.2

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

Commercial Usage
Licensees holding valid commercial licenses may use this file in accordance with the Commercial
Software License Agreement provided with the Software or, alternatively, in accordance with the
terms contained in a written agreement between you and Sencha.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-03-03 19:44:55 (4511b3df5a49f7edc73910cac6c6c0327360cb8a)
*/
//@tag enterprise
/**
 * @class Ext.data.amf.RemotingMessage
 * Represents a remote call to be sent to the server.
 */

Ext.define('Ext.data.amf.RemotingMessage', {

    alias: 'data.amf.remotingmessage',

    config: {

        $flexType: 'flex.messaging.messages.RemotingMessage',

        /**
         * @property {Array} body - typically an array of parameters to pass to a method call
         */
        body: [],

        /**
         * @property {String} clientID - identifies the calling client.
         */
        clientId: "",

        /**
         * @property {String} destination - the service destination on the server
         */
        destination: "",

        /**
         * @property {Object} headers - the headers to attach to the message.
         * Would typically contain the DSEndpoint and DSId fields.
         */
        headers: [],

        /**
         * @property {String} messageId - message identifier
         */
        messageId: "",

        /**
         * @property {String} operation - the method name to call
         */
        operation: "",

        /**
         * @property {Array} source - should be empty for security purposes
         */
        source: "",

        /**
         * @property {Number} timestamp - when the message was created
         */
        timestamp: [],

        /**
         * @property {Number} timeToLive - how long the message is still valid for passing
         */
        timeToLive: []


    },


    /**
     * Creates new message.
     * @param {Object} config Configuration options
     */
    constructor: function(config) {
        this.initConfig(config);
    },



    /**
     * Returns an AMFX encoded version of the message.
     */
    encodeMessage: function() {
        var encoder = Ext.create('Ext.data.amf.XmlEncoder'),
            cleanObj;
        cleanObj = Ext.copyTo({}, this, "$flexType,body,clientId,destination,headers,messageId,operation,source,timestamp,timeToLive", true);
        encoder.writeObject(cleanObj);
        return encoder.body;
    }

});
