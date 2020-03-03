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

router.post("/", (req, res) => {

    for(let key in req.body) {
        console.log("keys: ", key, " = ", req.body[key])
      RankingModel.update(key, req.body[key]);
    }
  
    res.status(200).redirect('/rankings');
  });


module.exports = router;