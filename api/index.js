const PORT = 3000;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/getMinMaxValues', (req, res) => {
    const data = { min: 1, max: 100 };
    res.status(200).json(data);
});
app.get('/getStaticValues', (req, res) => {
    const data = [1.99, 5.99, 10.99, 30.99, 50.99, 70.99];
    res.status(200).json(data);
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
