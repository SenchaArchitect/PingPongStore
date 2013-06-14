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
 * The AMF Reader is used by an {@link Ext.data.amf.Proxy AMF Proxy} to read 
 * records from a server response that contains binary data in either AMF0 or
 * AMF3 format. AMF Reader constructs an {@link Ext.data.amf.Packet AMF Packet}
 * and uses it to decode the binary data into javascript objects, then simply
 * allows its superclass ({@link Ext.data.reader.Json}) to handle converting the
 * raw javascript objects into {@link Ext.data.Model} instances.
 * 
 * For a more detailed tutorial see the [AMF Guide](#/guide/amf).
 */
Ext.define('Ext.data.amf.Reader', {

    extend: 'Ext.data.reader.Json',

    alias : 'reader.amf',

    requires: [
        'Ext.data.amf.Packet'
    ],

    /**
     * @cfg {Number} messageIndex
     * AMF Packets can contain multiple messages. This config specifies the
     * 0-based index of the message that contains the record data.
     */
    messageIndex: 0,

    /**
     * Reads records from a XMLHttpRequest response object containing a binary
     * AMF Packet and returns a ResultSet.
     * @param {Object} response The XMLHttpRequest response object
     * @return {Ext.data.ResultSet}
     */
    read: function(response) {
        var me = this,
            bytes = response.responseBytes,
            packet, messages, resultSet;

        if (!bytes) {
            throw "AMF Reader cannot process the response because it does not contain binary data. Make sure the Proxy's 'binary' config is true.";
        }
            
        packet = new Ext.data.amf.Packet(),
        packet.decode(bytes);
        messages = packet.messages;

        if (messages.length) {
            resultSet = me.readRecords(messages[me.messageIndex].body);
        } else {
            // no messages, return null result set
            resultSet = me.nullResultSet;
            if (packet.invalid) {
                // packet contains invalid data
                resultSet.success = false;
            }
        }

        return resultSet;
    }
});

