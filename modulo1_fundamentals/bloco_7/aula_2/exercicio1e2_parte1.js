const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  let menssage = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`
  return menssage;
}

customerInfo(order);

console.log(customerInfo(order));

const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.payment.total = '50';
  let menssage = `Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de muzzarella, calabresa e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`
  return menssage;
}

orderModifier(order);

console.log(orderModifier(order));


/* Complete a função orderModifier() para que seu retorno seja similar a 
"Olá Luiz Silva, o total do seu pedido de muzzarella, 
calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00. */