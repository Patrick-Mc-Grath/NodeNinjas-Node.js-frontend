import { SalesEmployee } from "../model/SalesEmployee";

module.exports.validateDeliveryEmployee = function (salesEmployee: SalesEmployee): string {
    if(salesEmployee.name.length > 50) {
        return "Name must be under 50 characters";
    }
    if(salesEmployee.salary < 10000) {
        return "Salary must be at least £10000";
    }
    if(salesEmployee.bankAccountNo.length > 20) {
        return "Bank account number must be under 20 characters";
    }
    if(salesEmployee.natInsuranceNo.length != 9) {
        return "National insurance nunber must be 9 characters";
    }
}