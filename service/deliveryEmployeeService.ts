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
        throw new Error('Could not create employee');
    }
}