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
 * Reader class to access v1.1 SOAP (Simple Object Access Protocol) services.
 */
Ext.define('Ext.data.soap.Reader', {
    extend: 'Ext.data.reader.Xml',
    alias: 'reader.soap',
	
    getData: function(data) {
        var envelope = data.documentElement,
            // we can't always assume that the Body element's namespace prefix is "soap",
            // but we can assume that it is the same as the envelope's namespace prefix
            prefix = envelope.prefix; 

        return Ext.DomQuery.selectNode(prefix + '|Body', data);
    }
});