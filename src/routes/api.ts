import {Router} from 'express';
import { json } from 'sequelize/types';
import * as ApiController from '../controllers/apiController';
import multer from 'multer';


const upload = multer({
    dest: './tmp',
    fileFilter: (req, file, cb) => {
        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
        if(allowed.includes(file.mimetype)){
            cb(null, true);
        }else{
            cb(null, false);
        }
        console.log("INFORMAÇÕES: ", file);
    },
    limits: {fieldSize: 2000000}
});

/*
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp');
    },
    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random() * 99999);
        cb(null, `${randomName}.jpg`);
    }
})
const upload = multer({
    storage
})

*/

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.post('/frases', ApiController.criarFrases);
router.get('/frases', ApiController.pegarFrases);
router.get('/frase/:id', ApiController.pegarFrase);
router.put('/frase/:id', ApiController.atualizarFrase);
router.delete('/frase/:id', ApiController.deletarFrase)
/*router.post('/upload', upload.fields([
    {name: 'avatar', maxCount: 1}, 
    {name: 'gallery', maxCount: 3}
]), ApiController.uploadFile);
*/

router.post('/upload', upload.single('avatar'), ApiController.uploadFile);
export default router;