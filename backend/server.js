
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://db:27017/messages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Message = mongoose.model('Message', new mongoose.Schema({
  text: String
}));

app.use(cors());
app.use(express.json());

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post('/api/messages', async (req, res) => {
  const newMessage = new Message({ text: req.body.text });
  await newMessage.save();
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
