// JavaScript source code
const ticketSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
