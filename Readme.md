## Guard Clause :
Guard Clause Pattern tells not to bring the else statement where one condition is not relying upon the other conditions.

- When every validation is independent, one validation is not requiring another validation to validate itself :

```js
// ✅ Pure Guard Clause - No else needed
function processOrder(order) {
    if (!order) {return "No order provided"};
    if (!order.items) {return "No items in order"};
    if (order.total <= 0) {return "Invalid total"};
    if (!order.customer) {return "Vute order die"};
    
    // Main logic - no else needed
    return `Processing order for ${order.customer}`;
}
```

- When conditions filter data gradually:

```js

function processOrder(order){
    if (order.customer.age <= 5) {return "pet kharap kobbe"}
    else if (order.customer.age <= 15) {return "joto paro khau, berent sharp koro"}
    else if (order.customer.age <= 25) {return "joto paro khau, mishty khay bir purushe"}
    else if (order.customer.age <= 75) {return "beshi beshi khan, mon joto chay bilan"}
    else if (order.customer.age <= 135) {return "ase ki r jibone! khaite khaite kobbore!"}
    else {return "Jinn asche, mishty dau;"}
// jdio eta switch case er kaj.
}