# sm-stock-model
Library that helps to calculate the basics variables of Stock Models

## Basic

### Hypothesis
 1. Only one product
 2. The product is of independent demand.
 3. The demand is known and is made at a constant rate.
 4. The lead time of the requested product, ie the time from the time the order is issued until the product is received, is known and constant.
 5. The replenishment is done exactly when the stock level is zero ie no stock of protection.
 6. Provisioning is instantaneous. This means that the replenishment rate is infinite.
 7. The planning horizon is long term.
 8. The cost of exhaustion is infinitely high ie the product deficit is not allowed.
 9. The unit cost of acquisition "b", the unit cost of storage "c1" and the cost of the order "k" are independent of the quantity to be ordered "q".
 10. There are no restrictions that limit the decision to take on the lot size.
 11. All monetary parameters are expressed in constant currency.
 12. The product under study is measured in a continuous unit (liters, kilograms, etc.). For relatively large quantities, this working hypothesis does not introduce practically any error even if the item in question is actually measured in discrete units.
 
### Usage
```javascript
var StockModel = require('https://github.com/pcastarataro/sm-stock-model.git')

var D = 500 
var b = 100
var c1 = 25
var k = 10 
var LT = 0.01

/*
* Input
* D  : demand per time
* b  : cost per unit
* c1 : storage cost per unit per time
* k  : purchase cost
* LT : lead time
*/
var basic = StockModel.Basic(D, b, c1, k, LT)

// Quantity optimal
console.log("Qo:   " + basic.QO())

// Optimal number of purchases
console.log("No:   " + basic.NO())

// Optimal time between purchases
console.log("To:   " + basic.TO())

// Optimal re-order stock
console.log("SR:   " + basic.SRO())

// Optimal Estimated Total Cost
console.log("CTEo: " + basic.CTEO())

```
