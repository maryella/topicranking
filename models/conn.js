//helper function

const pgp = require("pg-promise") ({
    query: function(e){
        console.log("QUERY: ", e.query)
    }
})

const options = {
    host: 'localhost',
    database: 'class_topics'   
}

const class_topics_db = pgp(options);

module.exports = class_topics_db;