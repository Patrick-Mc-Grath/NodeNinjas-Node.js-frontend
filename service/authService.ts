import { Login } from "../model/Auth";

const axios = require('axios');

module.exports.login = async function(login: Login): Promise<void>
{
    try{
        const response = await axios.post('http://localhost:8080/api/login', login)

        return response.data
    }
    catch(e)
    {
        throw new Error('Could not login')
    }
}
module.exports.Register = async function(login: Login): Promise<number>
{
    //const error: string = orderValidator.validateOrder(order)
    //if (error)
    //{
     //   throw new Error(error)
    //}
    try{
        const response = await axios.post('http://localhost:8080/api/register/', login)

        return response.data
    }
    catch(e)
    {
        throw new Error('Could not create order')
    }
}
