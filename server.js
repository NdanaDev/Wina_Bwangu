const express = require('express');
const db = require('./database/db');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// API endpoint to save transaction
app.post('/api/transactions', (req, res) => {
    const { transactionID, location, service, amount, tax, revenue } = req.body;
    
    db.run(`INSERT INTO transactions (id, service_location, service_type, amount, tax, revenue_per_kwacha)
            VALUES (?, ?, ?, ?, ?, ?)`,
        [transactionID, location, service, amount, tax, revenue],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({ message: 'Transaction saved successfully' });
        });
});

// API endpoint to get recent transactions
app.get('/api/transactions', (req, res) => {
    db.all(`SELECT * FROM transactions ORDER BY transaction_date DESC LIMIT 10`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 