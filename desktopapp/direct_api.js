Ext.architect.demo.REMOTING_API = {
    url: 'http://localhost:8080/djn/directprovider',
    type: 'remoting',
    actions: {
        SimpleCrud: [
            {
                name: 'update'/*(com.sencha.architect.ext.model.demo.Simple) => com.sencha.architect.ext.model.demo.Simple */,
                len: 1,
                formHandler: false
            },
            {
                name: 'destroy'/*(com.sencha.architect.ext.model.demo.Simple) => boolean */,
                len: 1,
                formHandler: false
            },
            {
                name: 'resetDb'/*() => void */,
                len: 0,
                formHandler: false
            },
            {
                name: 'read'/*(Long) => java.util.List */,
                len: 1,
                formHandler: false
            },
            {
                name: 'create'/*(com.sencha.architect.ext.model.demo.Simple) => com.sencha.architect.ext.model.demo.Simple */,
                len: 1,
                formHandler: false
            }
        ],
        CustomerActions: [
            {
                name: 'getAllItems'/*() => java.util.List */,
                len: 0,
                formHandler: false
            },
            {
                name: 'getCustomers'/*() => java.util.List */,
                len: 0,
                formHandler: false
            },
            {
                name: 'resetDb'/*() => String */,
                len: 0,
                formHandler: false
            },
            {
                name: 'getItem'/*(Integer) => com.sencha.architect.ext.model.demo2.bz.Item */,
                len: 1,
                formHandler: false
            },
            {
                name: 'emptyDb'/*() => String */,
                len: 0,
                formHandler: false
            },
            {
                name: 'getLineItems'/*(Integer) => java.util.List */,
                len: 1,
                formHandler: false
            },
            {
                name: 'getOrderDetail'/*(Integer) => com.sencha.architect.ext.model.demo2.OrderDetailView */,
                len: 1,
                formHandler: false
            },
            {
                name: 'getCustomerDetail'/*(Integer) => com.sencha.architect.ext.model.demo2.CustomerDetailView */,
                len: 1,
                formHandler: false
            },
            {
                name: 'getCustomerCategoryData'/*() => java.util.List */,
                len: 0,
                formHandler: false
            },
            {
                name: 'createOrder'/*(com.sencha.architect.ext.model.demo2.OrderDetailView) => com.sencha.architect.ext.model.demo2.OrderDetailView */,
                len: 1,
                formHandler: false
            },
            {
                name: 'getOrders'/*(Integer) => java.util.List */,
                len: 1,
                formHandler: false
            }
        ]
    }
}

