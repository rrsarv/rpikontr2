export class FinanceView {
    constructor() {
        this.transactionForm = document.getElementById('transaction-form');
        this.typeInput = document.getElementById('type');
        this.categoryInput = document.getElementById('category');
        this.amountInput = document.getElementById('amount');
        this.totalBalanceElement = document.getElementById('total-balance');
        this.transactionsListElement = document.getElementById('transactions-list');
        this.typeFilter = document.getElementById('type-filter');
        this.categoryFilter = document.getElementById('category-filter');
    }

    getFormData() {
        return {
            type: this.typeInput.value,
            category: this.categoryInput.value,
            amount: parseFloat(this.amountInput.value),
        };
    }

    displayTotalBalance(balance) {
        this.totalBalanceElement.textContent = balance.toFixed(2) + ' руб.';
    }

    displayTransactions(transactions) {
        this.transactionsListElement.innerHTML = ''; 
        transactions.forEach((transaction, index) => {
            const article = document.createElement('article');
            article.classList.add('transaction');
            article.style.backgroundColor = transaction.type === 'income' ? '#e0ffe0' : '#ffe0e0';
            article.innerHTML = `
                <strong>${transaction.category}</strong>: ${transaction.amount} руб.
                <button class="delete-button" data-index="${index}">Удалить</button>
            `;
            this.transactionsListElement.appendChild(article);
        });
    }

    bindAddTransaction(handler) {
        this.transactionForm.addEventListener('submit', (event) => {
            event.preventDefault();
            handler(this.getFormData());
            this.clearForm();
        });
    }

    bindRemoveTransaction(handler) {
        this.transactionsListElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete-button')) {
                const index = event.target.dataset.index;
                handler(index);
            }
        });
    }

    bindFilterChange(handler) {
        this.typeFilter.addEventListener('change', () => handler());
        this.categoryFilter.addEventListener('change', () => handler());
    }

    clearForm() {
        this.typeInput.value = '';
        this.categoryInput.value = '';
        this.amountInput.value = '';
    }
}
