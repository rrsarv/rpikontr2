
export class FinancePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddTransaction(this.handleAddTransaction.bind(this));
        this.view.bindRemoveTransaction(this.handleRemoveTransaction.bind(this));
        this.view.bindFilterChange(this.handleFilterChange.bind(this));
        this.updateView();
    }

    handleAddTransaction(transactionData) {
        if (transactionData.amount <= 0 || !transactionData.type || !transactionData.category) {
            alert("Заполните все поля корректно!");
            return;
        }
        const transaction = {
            type: transactionData.type,
            category: transactionData.category,
            amount: transactionData.amount
        };
        this.model.addTransaction(transaction);
        this.updateView();
    }

    handleRemoveTransaction(index) {
        this.model.removeTransaction(index);
        this.updateView();
    }

    handleFilterChange() {
        const typeFilter = this.view.typeFilter.value;
        const categoryFilter = this.view.categoryFilter.value;
        const filteredTransactions = this.model.getFilteredTransactions(typeFilter, categoryFilter);
        this.view.displayTransactions(filteredTransactions);
    }

    updateView() {
        const totalBalance = this.model.getTotalBalance();
        this.view.displayTotalBalance(totalBalance);
        this.handleFilterChange(); 
    }
}
