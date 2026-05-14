const express = require('express');
const Router = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const Event = require('../models/Event.model');

Router.post('/', verifyAccessToken, async (req, res) => {
  // const events = generateEventData();
  try {
    const events = await Event.find().sort({ timestamp: -1 }).limit(2000);
    return res.status(200).json({ success: true, data: { events } });
  } catch (er) {
    console.log("error", er)
    return res.status(500).json({ error: 'Failed to fetch Events!' });
  }
});

function generateEventData(count = 2000) {
  const types = ['click', 'view'];
  const elements = [
    'button',
    'image',
    'link',
    'input',
    'div',
    'span',
    'header',
    'footer',
    'nav',
    'section'
  ];

  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: `event_${Date.now()}_${i.toString().padStart(4, '0')}`,
      type: types[Math.floor(Math.random() * types.length)],
      element: elements[Math.floor(Math.random() * elements.length)],
      timestamp: new Date(
        Date.now() - Math.floor(Math.random() * 86400000 * 30)
      ).toISOString()
    });
  }

  return data;
}

const events = [];

Router.post('/track', async (req, res) => {
  const { type, element, page } = req.body;
  try {
    const event = await Event.create({ type, element, page });
    return res
      .status(200)
      .json({
        success: true,
        message: `${event.type} event is tracked successfully.`
      });
  } catch (er) {
    res.status(500).json({ error: 'Failed to store event' });
  }
});

module.exports = Router;
