
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
                                                            topics.ranking,
                                                            rankings.level_description
                                                    FROM topics
                                                    INNER JOIN 
                                                    rankings ON topics.ranking = rankings.id
                                                    ORDER BY topics.topic;`);
            // console.log("response: ", response)
            return response;
        } catch(error){
            return error.message
        }
    }

    static async getRankingsData() {
        try {
            const response = await class_topics_db.any(`SELECT *
            FROM rankings;`);
            // console.log("response: ", response)
            return response;
        } catch(error){
            return error.message
        }
    }
    static async update(topic, rank) {
        const query = `UPDATE topics SET ranking=${rank} WHERE topic = '${topic}';`
        try {
            const response = await class_topics_db.result(query);
            // console.log("response is", response);
            return response;
        } catch(err) {
            console.log("ERROR", err.message);
            return err;
        }
    }
}

module.exports = topicsTable;