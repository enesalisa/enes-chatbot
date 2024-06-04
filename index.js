const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('react/dist'));
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`React app running on port ${port}`);
});