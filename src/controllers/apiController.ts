import {Request, Response} from 'express';
import {Frase} from '../models/Frases';

export const ping = (req: Request, res: Response) => {
    res.json({ping: true});
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 100);
    res.json({numero: nRand});
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome: `Voce enviou o nome ${nome}`});
}