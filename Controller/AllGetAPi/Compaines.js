const pool = require('../../DB/Database');

async function complaints(req, res) {
    try {
        const { id } = req.params;
        
        pool.query('SELECT marked, shop_city FROM shops WHERE id = ?', [id], (err, userResult) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (userResult.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            const user = userResult[0];
            let query;
            let queryParams;

            if (user.marked === 1) {
                query = 'SELECT * FROM complaines WHERE city = ? AND status = ?';
                queryParams = [user.shop_city, 'pending'];
            } else {
                query = 'SELECT * FROM complaines WHERE complaine_to = ? AND status = ?';
                queryParams = [id, 'pending'];
            }

            pool.query(query, queryParams, (err, result) => {
                if (err) {
                    console.error('Error executing SQL query:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.status(200).json({ status: 200, result });
            });
        });

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = complaints;
