var express = require('express');
var router = express.Router();
const RankingModel = require("../models/rankingsModel")

router.get("/", async function (req, res, next) {
    const topicsData = await RankingModel.getTopicData();
    const rankingData = await RankingModel.getRankingsData();
  
    res.render("template", {
          locals: {
              title: "Rankings",
              topic_data: topicsData,
              ranking_data: rankingData
          },
          partials: {
              partial: "partial-rankings"
          }
          }
      )
})


module.exports = router;