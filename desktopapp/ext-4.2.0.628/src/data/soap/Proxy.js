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
 * The SOAP Proxy class is an {@link Ext.data.proxy.Ajax Ajax Proxy} to access v1.1 SOAP
 * (Simple Object Access Protocol) services.  SOAP Proxy constructs a SOAP Envelope and 
 * submits an AJAX request to load a SOAP response from the server.
 * 
 * For help getting started please refer to the [Soap Guide](#/guide/soap).
 * @class Ext.data.soap.Proxy
 */
Ext.define('Ext.data.soap.Proxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.soap',

    requires: [
        'Ext.data.soap.Reader'
    ],

    /**
     * @cfg {Object} api
     * An object containing "create", "read", "update" and "destroy" properties that define
     * SOAP operations for each CRUD action method. These operations will be appended to
     * the {@link #url} as the {@link #operationParam} for each request type.
     * 
     *     api: {
     *         create: undefined,
     *         read: undefined,
     *         update: undefined,
     *         destroy: undefined
     *     }
     *     
     * At least one operation is required, but additional operations do not need to be configured
     * if they will not be used.  For example, if this proxy is only used for read operations
     * the following configuration will be sufficient:
     * 
     *     api: {
     *         read: 'Foo'
     *     }
     */

    /**
     * @cfg {Object} soapAction
     * An object containing "create", "read", "update" and "destroy" properties that define
     * the [SOAPAction](http://www.w3.org/TR/2000/NOTE-SOAP-20000508/#_Toc478383528) header
     * for each CRUD action method. A soapAction must be specified for each operation
     * configured in {@link #api}  Defaults to:
     * 
     *     soapAction: {
     *         create: undefined,
     *         read: undefined,
     *         update: undefined,
     *         destroy: undefined
     *     }
     */

    /**
     * @cfg {String} [operationParam='op']
     * The name of the operation parameter to be appened to the SOAP endpoint url
     */
    operationParam: 'op',

    /**
     * @cfg {Object/String/Ext.data.soap.Reader} [reader='soap']
     * The {@link Ext.data.soap.Reader} to use to decode the server's response. This can
     * either be a SOAP Reader instance, a SOAP Reader config object or 'soap'.
     */
    reader: 'soap',

    /**
     * @cfg {String} url
     * The SOAP endpoint url that this proxy will use to request the SOAP data. This can
     * be a proxied url to work around same-origin policy if the SOAP endpoint url is on
     * a different domain from your application.
     */

    /**
     * @cfg [envelopeTpl=undefined]
     * The template used to create the SOAP envelope.  Defaults to:
     * 
     *     [
     *         '<?xml version="1.0" encoding="utf-8" ?>',
     *         '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">',
     *             '{[values.bodyTpl.apply(values)]}',
     *         '</soap:Envelope>'
     *     ]
     */
    envelopeTpl: [
        '<?xml version="1.0" encoding="utf-8" ?>',
        '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">',
            '{[values.bodyTpl.apply(values)]}',
        '</soap:Envelope>'
    ],

    /**
     * @cfg {Ext.XTemplate/Array} createBodyTpl
     * The template used to create the SOAP body for the "create" action. If not specified
     * {@link #writeBodyTpl} will be used for the "create" action.
     */

    /**
     * @cfg {Ext.XTemplate/Array} [readBodyTpl=undefined]
     * The template used to create the SOAP body for the "read" action.  Defaults to: 
     * 
     *     [
     *         '<soap:Body>',
     *             '<{operation} xmlns="{targetNamespace}">',
     *                 '<tpl foreach="params">',
     *                     '<{$}>{.}</{$}>',
     *                 '</tpl>',
     *             '</{operation}>',
     *         '</soap:Body>'
     *     ]
     */
    readBodyTpl: [
        '<soap:Body>',
            '<{operation} xmlns="{targetNamespace}">',
                '<tpl foreach="params">',
                    '<{$}>{.}</{$}>',
                '</tpl>',
            '</{operation}>',
        '</soap:Body>'
    ],

    /**
     * @cfg {Ext.XTemplate/Array} updateBodyTpl
     * The template used to create the SOAP body for the "update" action. If not specified
     * {@link #writeBodyTpl} will be used for the "update" action.
     */

    /**
     * @cfg {Ext.XTemplate/Array} destroyBodyTpl
     * The template used to create the SOAP body for the "destroy" action. If not specified
     * {@link #writeBodyTpl} will be used for the "destroy" action.
     */

    /**
     * @cfg {Ext.XTemplate/Array} [writeBodyTpl=undefined]
     * The default template used to create the SOAP body for write actions (create, update,
     * and destroy). The individual body templates for each write action can be configured
     * using {@link #createBodyTpl}, {@link #updateBodyTpl}, and {@link #destroyBodyTpl}.
     * Defaults to:
     * 
     *     [
     *          '<soap:Body>',
     *              '<{operation} xmlns="{targetNamespace}">',
     *                  '<tpl for="records">',
     *                      '{% var recordName=values.modelName.split(".").pop(); %}',
     *                      '<{[recordName]}>',
     *                          '<tpl for="fields">',
     *                              '<{name}>{[parent.get(values.name)]}</{name}>',
     *                          '</tpl>',
     *                      '</{[recordName]}>',
     *                  '</tpl>',
     *              '</{operation}>',
     *          '</soap:Body>'
     *      ]
     */
    writeBodyTpl: [
        '<soap:Body>',
            '<{operation} xmlns="{targetNamespace}">',
                '<tpl for="records">',
                    '{% var recordName=values.modelName.split(".").pop(); %}',
                    '<{[recordName]}>',
                        '<tpl for="fields">',
                            '<{name}>{[parent.get(values.name)]}</{name}>',
                        '</tpl>',
                    '</{[recordName]}>',
                '</tpl>',
            '</{operation}>',
        '</soap:Body>'
    ],

    /**
     * @cfg {String} targetNamespace
     * namespace URI used by {@link #createBodyTpl}, {@link #readBodyTpl}, {@link #updateBodyTpl},
     * and {@link #destroyBodyTpl} as the "xmlns" attribute for the operation element.
     */
    
    /**
     * @property {Object} actionMethods
     * @readonly
     * Mapping of action name to HTTP request method.  All SOAP actions are mapped to 'POST'
     */
    
    constructor: function(config) {
        this.callParent(arguments);
        this.api = config.api || {};
        this.soapAction = config.soapAction || {};
    },

    doRequest: function(operation, callback, scope) {
        var me = this,
            XTemplate = Ext.XTemplate,
            action = operation.action,
            soapOperation = me.api[action],
            params = Ext.applyIf(operation.params || {}, me.extraParams || {}),
            bodyTplName = action + 'BodyTpl',
            xmlData = XTemplate.getTpl(me, 'envelopeTpl').apply({
                operation: soapOperation,
                targetNamespace: me.targetNamespace,
                params: params,
                records: operation.records,
                bodyTpl: XTemplate.getTpl(me, me[bodyTplName] ? bodyTplName : 'writeBodyTpl')
            }),
            request = new Ext.data.Request({
                url: me.url + '?' + me.operationParam + '=' + soapOperation,
                method: 'POST',
                action: action,
                operation: operation,
                xmlData: xmlData,
                headers: Ext.apply({
                    SOAPAction: me.soapAction[action]
                }, me.headers),
                timeout: me.timeout,
                scope: me,
                disableCaching: false // explicitly set it to false, ServerProxy handles caching
            });

        request.callback = me.createRequestCallback(request, operation, callback, scope);

        Ext.Ajax.request(request);
                
        return request;
    }
});
