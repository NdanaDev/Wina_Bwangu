async function loadRecentTransactions() {
    try {
        const response = await fetch('/api/transactions');
        const transactions = await response.json();
        
        const transactionsGrid = document.querySelector('.transactions-grid');
        transactionsGrid.innerHTML = ''; // Clear existing transactions
        
        transactions.forEach(transaction => {
            const card = `
                <div class="transaction-card">
                    <div class="transaction-header">
                        <span class="transaction-id">${transaction.id}</span>
                        <span class="transaction-date">${new Date(transaction.transaction_date).toLocaleString()}</span>
                    </div>
                    <div class="transaction-details">
                        <div class="detail-row">
                            <span class="label">Location</span>
                            <span class="value">${transaction.service_location}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Service</span>
                            <span class="value">${transaction.service_type}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Revenue/Kwacha</span>
                            <span class="value">${transaction.revenue_per_kwacha} K</span>
                        </div>
                        <div class="detail-row amount">
                            <span class="label">Amount</span>
                            <span class="value">K${transaction.amount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            transactionsGrid.insertAdjacentHTML('beforeend', card);
        });
    } catch (error) {
        console.error('Error loading transactions:', error);
    }
}

// Add this function to create the transaction performance chart
function createTransactionChart() {
    const ctx = document.getElementById('transactionChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Number of Transactions',
                data: [65, 59, 80, 81, 56, 55, 60, 70, 80, 90, 100, 110],
                borderColor: '#4A90E2',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Transaction Volume'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Add this function to create the revenue distribution chart
function createRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Wina-1', 'Wina-2', 'Wina-3', 'Wina-4', 'Wina-5', 'Wina-6'],
            datasets: [{
                data: [30, 25, 20, 25, 10, 15],
                backgroundColor: [
                    '#4A90E2',
                    '#67B26F',
                    '#f39c12',
                    '#e74c3c',
                    '#9b59b6',
                    '#34495e'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Revenue by Service Type'
                }
            }
        }
    });
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    loadRecentTransactions();
    createTransactionChart();
    createRevenueChart();
});

const darkModeToggle = document.querySelector('.darkmode-input');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }
    
    // Add event listener for dark mode toggle
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
