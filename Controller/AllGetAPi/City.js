const pool = require('../../DB/Database');

async function city(req, res) {
    try {
  pool.query('SELECT * FROM city',(err,result)=>{
    if (err) {
        console.error('Error executing SQL query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    return res.status(200).json({status:200, result});
  })
      

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = city ;
