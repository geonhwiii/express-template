import { Router } from 'express';
import { catsService } from './cats.service';
const { readAllCat, readOneCat, createOneCat, updateOneCat, updateOneCatDetail, deleteOneCat } = catsService;

const router = Router();

router.get('/cats', readAllCat);
router.get('/cats/:id', readOneCat);
router.post('/cats', createOneCat);
router.put('/cats/:id', updateOneCat);
router.patch('/cats/:id', updateOneCatDetail);
router.delete('/cats/:id', deleteOneCat);

export default router;
