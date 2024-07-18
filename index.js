const express = require('express');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/tickets');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/esmtickets', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Usar as rotas de tickets
app.use('/tickets', ticketRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
