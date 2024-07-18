// JavaScript source code
const express = require('express');
const router = express.Router();
const Ticket = require('../models/ticket');

router.post('/', async (req, res) => {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
});

router.get('/', async (req, res) => {
    const tickets = await Ticket.find();
    res.send(tickets);
});

module.exports = router;
