import { Application } from "express"
import { DeliveryEmployee } from "../model/DeliveryEmployee"
import { Request } from "express"
import { Response } from "express"

const deliveryEmployeeService = require('../service/deliveryEmployeeService')

module.exports = function(app: Application) {
    app.get('/add-delivery-employee', async(req: Request, res: Response) => {
        res.render('add-delivery-employee');
    })

    app.post('/add-delivery-employee', async(req:Request, res:Response) => {
        let data: DeliveryEmployee = req.body;
        let id: Number

        try {
            id = await deliveryEmployeeService.createDeliveryEmployee(data)

            res.redirect('/delivery-employee/' + id)
        } catch(e) {
            console.error(e)

            res.locals.errormessage = e.message

            res.render('add-delivery-employee', req.body)
        }
    })

    app.get('/delivery-employee/:id', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;

        try{
            data = await deliveryEmployeeService.getDeliveryEmployeeByID(req.params.id);
        } catch(e) {
            console.error(e)
        }
        res.render('view-delivery-employee', {deliveryEmployee: data} )
    })

    app.get('/delivery-employee', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;
        
        try{
            data = await deliveryEmployeeService.getDeliveryEmployees();
        } catch (e) {
            console.error(e)
        }

        res.render('list-delivery-employees', { deliveryEmployees: data })
    })

    app.get('/delete-delivery-employee', async(req: Request, res: Response) => {
        res.render('delete-delivery-employee');
    })

    app.delete('/delete-delivery-employee/:id', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;

        try{
            data = await deliveryEmployeeService.deleteDeliveryEmployee();
        } catch(e) {
            console.error(e);
        }
    })
}