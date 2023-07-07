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

    app.get('/delete-delivery-employee/:id', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;

        try{
            data = await deliveryEmployeeService.getDeliveryEmployeeByID(req.params.id);
        } catch(e) {
            console.error(e)
        }
        res.render('delete-delivery-employee', {deliveryEmployee: data});
    })

    app.delete('/delete-delivery-employee/:id', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;

        try{
            data = await deliveryEmployeeService.deleteDeliveryEmployee();
        }
        catch(e){
            console.error(e);
        }
    });

    app.get('/update-delivery-employee', async(req: Request, res: Response) => {
        let data = DeliveryEmployee;

        try{
            data = await deliveryEmployeeService.getDeliveryEmployees();
        } catch (e) {
            console.error(e);
        }

        res.render('update-delivery-employee', {deliveryEmployees: data});
    });

    app.post('/update-delivery-employee', async function (req:Request, res: Response) {
        let data: DeliveryEmployee = req.body;

        try{
            console.log(req.body);
        } catch(e) {
            console.error(e);
        }
    })
}