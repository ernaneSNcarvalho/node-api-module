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

export const criarFrases = async (req: Request, res: Response) => {
    let {autor, txt} = req.body;    
    let novaFrase = await Frase.create({autor, txt});
    res.json({corpo: req.body});
}

export const pegarFrases = async (req: Request, res: Response) => {
    let frases = await Frase.findAll();
    res.json({frases});
}

export const pegarFrase = async (req: Request, res: Response) => {
    let {id} = req.params;
    let frase = await Frase.findByPk(id);

    res.json({frase});
}

export const atualizarFrase = async (req: Request, res: Response) => {
    let {id} = req.params;
    let frase = await Frase.findByPk(id);
    let {autor, txt} = req.body;

    if(frase){
        frase.autor = autor;
        autor.txt = txt;
        await frase.save();
        res.json({ frase});
    }else{
        res.json({error: 'frase nao encontrada.'})
    }
    res.json({});
}

export const deletarFrase = async (req: Request, res: Response) => {
    let {id} = req.params;
    await Frase.destroy({
        where: { id}
    });
    res.json({});
}

export const uploadFile = async (req: Request, res: Response) => {
    const files = req.files as {[fieldname: string]: Express.Multer.File[]}
    console.log("AVATAR", files.avatar);
    console.log("GALLERY", files.gallery);

    res.json({})
}