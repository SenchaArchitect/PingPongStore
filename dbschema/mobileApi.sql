-- getPendingOrders()
select o.orderId, o.orderDate, c.name, c.address, c.state, c.zip, c.phone, c.fax
from Orders as o, Customers as c
where o.customerId = c.customerId AND shipDate is null

-- getItemsByOrder(orderId)
select li.lineItemId, li.itemId, li.quantityOrdered, i.description, i.imgUrl, i.quantityInStock, i.bin, i.lot
from LineItems as li, Items as i
where li.itemId = i.itemId and li.orderId = {orderId}

-- packLineItem(lineItemId)
Update LineItems
set packDate = now()
Where lineItemId = {lineItemId}

-- unpackLineItem(lineItemId) 
Update LineItems
set packDate = NULL
Where lineItemId = {lineItemId}

-- adjustQuantityInStockForItem(itemId, delta)
Update Items
Set quantityInStock = quantityInStock + {delta}
Where itemId = {itemId}

-- shipOrder (orderId)
select Count(orderId) as num
from LineItems
Where orderId = {orderId} and packDate is null

-- if (num === 0) {
Update Orders
Set shipDate = now()
Where orderId = {orderId}
