import express from 'express';
import { User } from '../models/user.js';

var router = express.Router();

router.get('/users', async(req, res ) => {
  const data = await User.find();
  return res.status(200).json(data);
});

router.get('/users/:id', async(req, res ) => {
  const { id } = req.params;
  const data = await User.findById(id);
  return res.status(200).json(data);
});

router.post('/', async(req, res ) => {
  const newData = req.body;
  const insertedData = await User.create(newData);
  return res.status(200).json(insertedData);
});

router.put('/:id', async(req, res) => {
  const { id } = req.params;
  await User.updateOne({ id }, req.body);
  const updatedData = await User.findById(id);
  return res.status(200).json(updatedData);
})

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const deletedData = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedData);
});

export { router };
