const pool = require('../../DB/Database');

async function addcomplaine(req, res) {
    const {
        title,
        description,
        city,
        pin_code,
        product,
        created_by,
        seial_no,
        purchase_city,
        complaine_to
    } = req.body;

    const billPath = req.files?.bill ? req.files.bill[0].path : null;
    const imagePath = req.files?.image ? req.files.image[0].path : null;
    try {
        pool.query(
            `INSERT INTO complaines (tittle, description, bill, image, city, status, pin_code, product, created_by, seial_no, purchase_city, complaine_to)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                title,
                description,
                billPath,
                imagePath,
                city,
                'pending',
                pin_code,
                product,
                created_by,
                seial_no,
                purchase_city,
                complaine_to
            ],
            (err, result) => {
                if (err) {
                    console.error('Error executing SQL query:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }
                return res.status(200).json({ status: 200, message: 'Complaint registered successfully' });
            }
        );
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = addcomplaine;
