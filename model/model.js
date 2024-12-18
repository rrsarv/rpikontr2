// model/model.js
export class FinanceModel {
    constructor() {
        this.transactions = [];
    }

    addTransaction(transaction) {
        this.transactions.push(transaction);
    }

    removeTransaction(index) {
        this.transactions.splice(index, 1);
    }

    getTotalBalance() {
        return this.transactions.reduce((total, transaction) => {
            return transaction.type === 'income' ? total + transaction.amount : total - transaction.amount;
        }, 0);
    }

    getTransactions() {
        return this.transactions;
    }

    getFilteredTransactions(typeFilter, categoryFilter) {
        return this.transactions.filter(transaction => {
            const typeMatch = typeFilter ? transaction.type === typeFilter : true;
            const categoryMatch = categoryFilter ? transaction.category === categoryFilter : true;
            return typeMatch && categoryMatch;
        });
    }
}
