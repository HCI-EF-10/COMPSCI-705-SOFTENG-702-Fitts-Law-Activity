import express from 'express';
import ExampleController from '../controllers/ExampleController';

const router = express.Router();

router.post('/create', ExampleController.createExample);
router.get('/get/:id', ExampleController.getExample);
router.get('/get', ExampleController.getExamples);
router.patch('/update/:id', ExampleController.updateExample);
router.delete('/delete/:id', ExampleController.deleteExample);

export = router;