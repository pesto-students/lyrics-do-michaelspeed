import Components from "../../libs/Components/Components.js";
import store from "../../libs/StateManagement/index.js";
import Fetcher from "../../libs/Fetcher/Fetcher.js";

export default class Pagination extends Components {
    constructor() {
        super({
            store,
            element: document.querySelector('.paginated')
        })
    }

    render() {
        const self = this;

        if (store.state.searchTerm !== '') {
            self.element.innerHTML = `<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
            <button class="btn btn-prev">Prev</button>
            <button class="btn btn-next">Next</button>
        </div>`
        } else {
            self.element.innerHTML = `<div/>`
        }

        if (store.state.searchTerm !== ''){
            document.querySelector('.btn-next').addEventListener('click', () => {
                Fetcher(store.state.next, {
                    mode: 'no-cors'
                })
                    .then((response) => {
                        console.log(response)
                    })
            })
        }
    }
}
