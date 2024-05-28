const pool = require('../../DB/Database');

async function updateStatus(req, res) {
    try {
        const { id } = req.params;
        const { status , replaised_serial_no , changed_exp } = req.body;

        if (!status || !replaised_serial_no || !changed_exp) {
            return res.status(400).json({ error: 'Sumbit All Data' });
        }

        pool.query('UPDATE complaines SET status = ? , replaised_serial_no = ? ,changed_exp = ? WHERE id = ?', [status,replaised_serial_no,changed_exp,id], (err, result) => {
            if (err) {
                console.error('Error executing SQL query:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            return res.status(200).json({ status: 200, message: 'Status updated successfully' });
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = updateStatus;
