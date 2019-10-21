
const class_topics_db = require("./conn")


class topicsTable {
    constructor(id, topic, ranking){
        this.id = id;
        this.topic = topic;
        this.ranking = ranking;
        }
    static async getTopicData() {
        try {
            const response = await class_topics_db.any(
                                                    `SELECT topics.topic, 
                                                            rankings.level_description
                                                    FROM topics
                                                    INNER JOIN 
                                                    rankings ON topics.ranking = rankings.id;`);
            console.log("response: ", response)
            return response;
        } catch(error){
            return error.message
        }
    }

    static async getRankingsData() {
        try {
            const response = await class_topics_db.any(`SELECT level_description
            FROM rankings;`);
            console.log("response: ", response)
            return response;
        } catch(error){
            return error.message
        }
    }

}

module.exports = topicsTable;