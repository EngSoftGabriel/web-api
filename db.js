const customers = [{
    id: 1,
    nome: "Gabriel",
    idade: 27,
    uf: "RJ"
}]

function selectCustomers(){
    return customers;
}

function selectCustomer(){
    return customers.find(c => c.id === id);
}

module.exports = { selectCustomers, selectCustomer }