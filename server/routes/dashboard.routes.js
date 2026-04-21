const express = require('express');
const Router = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken');

Router.get('/stats', verifyAccessToken, (req, res) => {
  console.log(req.user);
  const dashboardGraph = [
    { date: '2026-04-19', visitors: 3000, conversions: 1500, conversionRate: 50.0 },
    { date: '2026-04-18', visitors: 7200, conversions: 3100, conversionRate: 51.4 },
    { date: '2026-04-17', visitors: 6500, conversions: 3900, conversionRate: 52.3 },
    { date: '2026-04-16', visitors: 6000, conversions: 2700, conversionRate: 52.9 },
    { date: '2026-04-15', visitors: 5100, conversions: 1900, conversionRate: 53.4 },
    { date: '2026-04-14', visitors: 4400, conversions: 3500, conversionRate: 53.8 },
    { date: '2026-04-13', visitors: 9000, conversions: 2300, conversionRate: 54.2 }
  ];
  return res
    .status(200)
    .json({
      success: true,
      data: {
        visitors: 2000000,
        conversions: 12000,
        conversionRate: 57,
        trend: dashboardGraph
      }
    });
});

module.exports = Router;
