const express = require('express');
const app = express();
const userRoutes = require('./Router/router');

const cors = require('cors'); 

app.use(express.json());

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use('/api', userRoutes); 

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});


// const https = require('https');
// const fs = require('fs');
// const express = require('express');
// const app = express();
// const userRoutes = require('./Router/router');
// const cors = require('cors');

// app.use(express.json());
// app.use(cors());
// app.use('/api', userRoutes);

// const options = {
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
// };

// const PORT = process.env.PORT || 8000;

// const server = https.createServer(options, app);

// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

