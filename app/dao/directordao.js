//IMPORTING mysql connection from dbconfig.js
const pool = require('../../app/config/dbconfig')


//CONSTRUCTOR 
class DirectorDao {

    constructor() {
        this.pool = pool;
    }


    findALL(req, res) {
    
    
        pool.query('SELECT * FROM directors', (err, rows) => {
            console.log(rows)

            let merged = rows.map((movie, idx) => {
                return movie
                })

        
            res.send(merged)
        });

    }

}

module.exports = DirectorDao;