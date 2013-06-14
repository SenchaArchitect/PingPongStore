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
 * The AMF Proxy is an {@link Ext.data.proxy.Ajax Ajax Proxy} that requests
 * binary data from a remote server and parses it into records using an
 * {@link Ext.data.amf.Reader AMF Reader} for use in a
 * {@link Ext.data.Store Store}.
 *
 *     Ext.create('Ext.data.Store', {
 *         model: 'Foo',
 *         proxy: {
 *             type: 'amf',
 *             url: 'some/url'
 *         }
 *     });
 *     
 * For a detailed tutorial on using AMF data see the [AMF Guide](#/guide/amf).
 */
Ext.define('Ext.data.amf.Proxy', {
    extend: 'Ext.data.proxy.Ajax',

    alias: 'proxy.amf',

    requires: [
        'Ext.data.amf.Reader'
    ],

    /**
     * @cfg
     * @inheritdoc
     */
    binary: true,

    /**
     * @cfg
     * @inheritdoc
     */
    reader: 'amf'
});


