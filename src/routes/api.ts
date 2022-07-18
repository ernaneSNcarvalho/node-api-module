import {Router} from 'express';
import { json } from 'sequelize/types';
import * as ApiController from '../controllers/apiController';
import multer from 'multer';

const upload = multer({
    dest: './tmp'
});

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.criarFrases);
router.get('/frases', ApiController.pegarFrases);
router.get('/frase/:id', ApiController.pegarFrase);
router.put('/frase/:id', ApiController.atualizarFrase);
router.delete('/frase/:id', ApiController.deletarFrase)
router.post('/upload', upload.fields([
    {name: 'avatar', maxCount: 1}, 
    {name: 'gallery', maxCount: 3}
]), ApiController.uploadFile);
export default router;