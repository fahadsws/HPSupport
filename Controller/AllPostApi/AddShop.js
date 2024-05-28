const pool = require('../../DB/Database');

async function addshop(req, res) {
    const {
        shop_name,
        description,
        shop_image,
        shop_city,
        phone,
    } = req.body;

    try {
        if (!shop_name || !description  || !shop_city || !phone || !req?.files?.shop_image) {
            return res.status(200).json({ status: 400, message: 'Please Fill All Fields' });
        }

        pool.query(
            `INSERT INTO shops (shop_name, description, shop_image, shop_city, phone, marked)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
                shop_name,
                description,
                req?.files?.shop_image ? req.files.shop_image[0].path:null,
                shop_city,
                phone,
                0
            ],
            (err, result) => {
                if (err) {
                    console.error('Error executing SQL query:', err);
                    return res.status(500).json({ error: 'Internal Server Error' });
                }

                // Get the ID of the inserted shop
                const insertedShopId = result.insertId;

                // Retrieve the details of the newly inserted shop
                pool.query('SELECT * FROM shops WHERE id = ?', [insertedShopId], (err, shopDetails) => {
                    if (err) {
                        console.error('Error executing SQL query:', err);
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }

                    // Return the details of the newly registered shop
                    return res.status(200).json({
                        status: 200,
                        message: 'Register Successfully',
                        shop: shopDetails[0] // Assuming the shopDetails is an array with one element
                    });
                });
            }
        );
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = addshop;

