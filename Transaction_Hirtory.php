<?php
require_once 'db_operations.php';
$transactions = getTransactions($pdo);
?>
<!DOCTYPE html>
<html lang="en">
<!-- ... (keep your existing head and header sections) ... -->

<div class="contentss">
    <!-- ... (keep your existing sidebar section) ... -->
    
    <h1>Transaction History</h1>
    <div class="container">
        <table class="transaction-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($transactions as $transaction): ?>
                <tr>
                    <td><?= htmlspecialchars($transaction['date']) ?></td>
                    <td><?= htmlspecialchars($transaction['description']) ?></td>
                    <td><?= htmlspecialchars($transaction['amount']) ?></td>
                    <td><?= htmlspecialchars($transaction['type']) ?></td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    
    <!-- ... (keep your existing chart sections) ... -->
</div>

<!-- ... (keep your existing script tags) ... -->
</body>
</html>
