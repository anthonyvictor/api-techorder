import * as Express from 'express'
import { ILogin } from '../interfaces/ILogin'

const validTokens : Array<string> = []

export function login(req: Express.Request, res: Express.Response){
    try{
        const user : ILogin = req.body
    
        if(user.user === 'User01' && user.pwd === 'User01'){
            const newToken = `${validTokens.length + 1}abcdefg${validTokens.length + 1000}`
            validTokens.push(newToken)
            res.status(200).send(newToken)
        }else{
            res.status(403).send(null)
        }
    }catch(err: any){
        console.error(err, err.stack)
        res.status(500).send('Has ocurred some error!')
    }

}

export function auth(req: Express.Request, res: Express.Response){
    const { token } = req.params

    if (validTokens.includes(token)){
        res.status(200).send({auth: true, token: token})
    }else{
        res.status(403).send({auth: false, token: null})
    }
}