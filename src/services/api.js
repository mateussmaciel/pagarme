import pagarme from 'pagarme';

export const createTransaction = pagarme.client.connect({ api_key: 'ak_test_YnD7eG4yQMG3uSqfgwx2vpVwKa5dRa'})
.then(client => client.transactions.create({
  "amount": 21000,
    "card_number": "4111111111111111",
    "card_cvv": "123",
    "card_expiration_date": "0923",
    "card_holder_name": "Morpheus Fishburne",
    "customer": {
      "external_id": "#3311",
      "name": "Morpheus Fishburne",
      "type": "individual",
      "country": "br",
      "email": "mopheus@nabucodonozor.com",
      "documents": [
        {
          "type": "cpf",
          "number": "30621143049"
        }
      ],
      "phone_numbers": ["+5511999998888", "+5511888889999"],
      "birthday": "1965-01-01"
    },
    "billing": {
      "name": "Trinity Moss",
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "shipping": {
      "name": "Neo Reeves",
      "fee": 1000,
      "delivery_date": "2000-12-21",
      "expedited": true,
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "items": [
      {
        "id": "r123",
        "title": "Red pill",
        "unit_price": 10000,
        "quantity": 1,
        "tangible": true
      },
      {
        "id": "b123",
        "title": "Blue pill",
        "unit_price": 10000,
        "quantity": 3,
        "tangible": true
      }
    ],
    
}));
export function createSplitOnGetTransaction({id}){
  pagarme.client.connect({ api_key: 'ak_test_YnD7eG4yQMG3uSqfgwx2vpVwKa5dRa'})
.then(client => client.transactions.capture({
  id: id,
  amount: 21000,
  split_rules: [
      {
        recipient_id: 're_cj6cgqzy31irpmx6dj9h3xdln',
        percentage: 50,
        liable: true,
        charge_processing_fee: true
      },
      {
        recipient_id: 're_cj6cglnhc0bbcbt6dbsl8fdcs',
        percentage: 50,
        liable: false,
        charge_processing_fee: true
      }
    ]
}))
.then(transaction => console.log(transaction))
.catch(exception => console.log(exception.response));
}