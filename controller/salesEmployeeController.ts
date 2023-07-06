import { Application } from "express"
import { SalesEmployee } from "../model/SalesEmployee"
import { Request } from "express"
import { Response } from "express"

const salesEmployeeService = require('../service/salesEmployeeService')

module.exports = function(app: Application) {
    app.get('/add-sales-employee', async(req: Request, res: Response) => {
        res.render('add-sales-employee');
    })

    app.post('/add-sales-employee', async(req:Request, res:Response) => {
        let data: SalesEmployee = req.body;
        let id: Number

        try {
            id = await salesEmployeeService.createDeliveryEmployee(data)

            res.redirect('/sales-employee/' + id)
        } catch(e) {
            console.error(e)

            res.locals.errormessage = e.message

            res.render('add-sales-employee', req.body)
        }
    })

    app.get('/sales-employee/:id', async(req: Request, res: Response) => {
        let data = SalesEmployee

        try{
            data = await salesEmployeeService.getSalesEmployeeByID(req.params.id)

            console.log(data)
        } catch(e) {
            console.error(e)
        }
        res.render('view-sales-employee', {salesEmployee: data} )
    })
}