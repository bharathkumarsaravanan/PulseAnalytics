const express = require("express");
const Router = express.Router();
const verifyAccessToken = require("../middlewares/verifyAccessToken");

Router.post('/', verifyAccessToken, (req, res) => {
    console.log(req.user, req.body);
    const mockData = generateMockData(2000);
    return res.status(200).json({
        success: true,
        data: {
            campaignData: mockData
        }
    });
});

function generateMockData(count = 1500) {
  const names = [
    'Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Wilson', 'Eve Brown',
    'Frank Miller', 'Grace Lee', 'Henry Garcia', 'Ivy Martinez', 'Jack Robinson',
    'Kelly Taylor', 'Liam Anderson', 'Mia Thomas', 'Noah Jackson', 'Olivia White',
    'Paul Harris', 'Quinn Clark', 'Riley Lewis', 'Sophia Hall', 'Tyler Young'
  ];
  
  const data = [];
  for (let i = 1; i <= count; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const impressions = Math.floor(Math.random() * 10001) + 1000;
    const clicks = Math.floor(impressions * (0.05 + Math.random() * 0.25));
    const ctr = Math.round((clicks / impressions) * 10000) / 100;
    const conversions = Math.floor(clicks * (0.01 + Math.random() * 0.20));
    
    data.push({
      id: `${i.toString().padStart(4, '0')}`,
      name: `${name}-Campaign ${i}`,
      impressions,
      clicks,
      ctr,
      conversions
    });
  }
  return data;
};

module.exports = Router;