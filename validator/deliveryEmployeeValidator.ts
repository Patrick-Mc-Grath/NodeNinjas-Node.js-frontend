import { DeliveryEmployee } from "../model/DeliveryEmployee";

module.exports.validateDeliveryEmployee = function (deliveryEmployee: DeliveryEmployee): string {
    if(deliveryEmployee.name.length > 50) {
        return "Name must be under 50 characters";
    }
    if(deliveryEmployee.salary < 10000) {
        return "Salary must be at least £10000";
    }
    if(deliveryEmployee.bankAccountNo.length > 20) {
        return "Bank account number must be under 20 characters";
    }
    if(deliveryEmployee.natInsuranceNo.length != 9) {
        return "National insurance nunber must be 9 characters";
    }
}