import * as Express from 'express'

export function getALL(req: Express.Request, res: Express.Response){
    // const { id } = req.params
    // const {page, pageSize, } = req.query
    const orders = [{a:'a1', b: 'b1'}, {a:'a2', b: 'b2'}]
    res.status(200).send({orders: orders})
}