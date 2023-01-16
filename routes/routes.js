import express from 'express';
import { User } from '../models/user.js';

var router = express.Router();

router.get('/', async(req, res ) => {
  const users = await User.find();
  return res.status(200).json(users);
});

router.get('/:id', async(req, res ) => {
  const { id } = req.params;
  const user = await User.findById(id);
  return res.status(200).json(user);
});

router.post('/', async(req, res ) => {
  const newUser = req.body;
  const insertedUser = await User.create(newUser);
  return res.status(200).json(insertedUser);
});

router.put('/:id', async(req, res) => {
  const { id } = req.params;
  let data = await User.updateOne({_id: id}, req.body);
  const updatedUser = await User.findById(id);
  return res.status(200).json(updatedUser);
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  return res.status(200).json(deletedUser);
});

export { router };
