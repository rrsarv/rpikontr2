// main.js
import { FinanceModel } from './model/model.js';
import { FinanceView } from './view/view.js';
import { FinancePresenter } from './presenter/presenter.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new FinanceModel();
    const view = new FinanceView();
    const presenter = new FinancePresenter(model, view);
});
