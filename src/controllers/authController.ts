import * as Express from 'express'
import { ILogin } from '../interfaces/ILogin'

const validTokens : Array<string> = []

export function login(req: Express.Request, res: Express.Response){
    try{
        const userData : ILogin = req.body
        userData.pwd = Buffer.from(userData.pwd, 'base64').toString('ascii')
        if(userData.user === 'User01' && userData.pwd === 'User01'){
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

export function auth(req: Express.Request, res: Express.Response, next?: Function){
    const {token} = JSON.parse(JSON.stringify(req.query))
    if (validTokens.includes(token)){
        if(next){
            next(req, res)
        }else{
            res.status(200).send({auth: true, token: token})
        }
    }else{
        res.status(403).send({auth: false, token: null})
    }
}