import express from 'express';
import { Data } from '../models/model-data.js';

var router = express.Router();

router.get('/', async(req, res ) => {
  const data = await Data.find();
  return res.status(200).json(data);
});

router.get('/:id', async(req, res ) => {
  const { id } = req.params;
  const data = await Data.findById(id);
  return res.status(200).json(data);
});

router.post('/', async(req, res ) => {
  const newData = req.body;
  const insertedData = await Data.create(newData);
  return res.status(200).json(insertedData);
});

router.put('/:id', async(req, res) => {
  const { id } = req.params;
  let data = await Data.updateOne({_id: id}, req.body);
  const updatedData = await Data.findById(id);
  return res.status(200).json(updatedData);
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedData = await Data.findByIdAndDelete(id);
  return res.status(200).json(deletedData);
});

export { router };
