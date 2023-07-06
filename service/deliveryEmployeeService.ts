import { DeliveryEmployee } from "../model/DeliveryEmployee";

const axios = require('axios');
const deliverEmployeeValidator = require('../validator/deliveryEmployeeValidator');

module.exports.createDeliveryEmployee = async function (deliveryEmployee: DeliveryEmployee): Promise<number> {
    const error: string = deliverEmployeeValidator.validateDeliveryEmployee(deliveryEmployee);

    if(error){
        throw new Error(error);
    }
    try {
        const response = await axios.post('http://localhost:8080/api/delivery-employee', deliveryEmployee)

        return response.data
    } catch(e) {
        throw new Error('Could not create delivery employee');
    }
}

module.exports.getDeliveryEmployeeByID = async function (id: number): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get('http://localhost:8080/api/delivery-employee/' + id)

        return response.data
    } catch(e) {
        throw new Error('Could not get delivery employee')
    }
}

module.exports.getDeliveryEmployees = async function (): Promise<DeliveryEmployee> {
    try {
        const response = await axios.get('http://localhost:8080/api/delivery-employee')
        
        return response.data
    }
    catch (e) {
        throw new Error('Could not get delivery employees')
    }
}


module.exports.deleteDeliveryEmployee = async function (id: number) {
    try {
        const response = await axios.delete('http://localhost:8080/api/delivery-employee')
    } catch (e) {
        throw new Error('Could not delete delivery employee')
    }
  
module.exports.updateDeliveryEmployee = async function (id: number, employee: DeliveryEmployee) {
  try {
    const response = await axios.put('http://localhost:8080/api/delivery-employee' + id, employee);

    return response.data;
  } catch (e) {
    throw new Error('Could not update delivery employee');
  }
}