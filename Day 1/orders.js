// (6)
// You are given an array of order objects. 
// Each object represents an e-commerce order and contains details in the following format:
var orders = [ //array of objects
    {
        orderId: 'ORD001',
        customer: 'John Doe',
        items: 'item1:2,item2:1,item3:5', //[]
        orderDate: '2023-12-01',
        deliveryDate: '2023-12-05',
        deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
        orderId: 'ORD002',
        customer: 'Jane Smith',
        items: 'itemA:3,itemB:4',
        orderDate: '2023-11-15',
        deliveryDate: '2023-11-20',
        deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
        orderId: 'ORD003',
        customer: 'Alice Johnson',
        items: 'itemX:1',
        orderDate: '2023-10-10',
        deliveryDate: '2023-10-15',
        deliveryAddress: '456, Pine Lane, Denver, USA',
    }
];

function calcItems(string) {
    let arr = string.split(":");
    let sum = 0;
    // let j = 0;
    for (let i = 1; i < arr.length; i++) {
        sum += Number(arr[i].charAt(0));
    }
    return sum;
}

function dateDiff(orderDate, deliveryDate) {
    let newOrderDate = new Date(orderDate);
    let newDeliveryDate = new Date(deliveryDate);
    let diff = newDeliveryDate.getDate() - newOrderDate.getDate();
    return diff;
}


let newOrders = orders.map(order => (
    {
        orderID: order.orderId,
        customer: order.customer,
        totalItems: (function calcItems(string) {

            let arr = string.split(":");
            let sum = 0;

            for (let i = 1; i < arr.length; i++) {
                sum += Number(arr[i].charAt(0));
            }
            return sum;
        })(order.items),

        deliveryDuration: (function dateDiff(orderDate, deliveryDate) {
            let newOrderDate = new Date(orderDate);
            let newDeliveryDate = new Date(deliveryDate);
            let diff = newDeliveryDate.getDate() - newOrderDate.getDate();
            return diff;
        })(order.orderDate, order.deliveryDate),

        deliveryCountry: order.deliveryAddress.split(",")[0],
        deliveryCity: order.deliveryAddress.split(",")[1],
        deliveryStreet: order.deliveryAddress.split(",")[2],
        buildingNumber: order.deliveryAddress.split(",")[3]
    }
));

console.log(newOrders);



// Transform the orders array into the following format:

// var formattedOrders = [
//   {
//     orderId: 'ORD001',
//     customer: 'John Doe',
//     totalItems: 8,
//     orderDate: '2023-12-01',
//     deliveryDate: '2023-12-05',
//     deliveryDuration: 4,
//     deliveryCountry: 'USA',
//     deliveryCity: 'Springfield',
//     deliveryStreet: 'Main Street',
//     buildingNumber: 123,
//   },
//   {
//     orderId: 'ORD002',
//     customer: 'Jane Smith',
//     totalItems: 7,
//     orderDate: '2023-11-15',
//     deliveryDate: '2023-11-20',
//     deliveryDuration: 5,
//     deliveryCountry: 'USA',
//     deliveryCity: 'New York',
//     deliveryStreet: 'Elmwood Apartments',
//     buildingNumber: 'Flat 4B',
//   },
//   {
//     orderId: 'ORD003',
//     customer: 'Alice Johnson',
//     totalItems: 1,
//     orderDate: '2023-10-10',
//     deliveryDate: '2023-10-15',
//     deliveryDuration: 5,
//     deliveryCountry: 'USA',
//     deliveryCity: 'Denver',
//     deliveryStreet: 'Pine Lane',
//     buildingNumber: 456,
//   }
// ];
// Notes:
// 1- The items string contains item names and their quantities in the format itemName:quantity. You need to calculate the total number of items.
// 2- The deliveryDuration is the number of days between orderDate and deliveryDate.
// 3- The deliveryAddress is always in the format: building number, street name, city, country.
// 4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
// 5- The original array should remain unchanged.