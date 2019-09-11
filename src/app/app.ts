import {fetchByName} from '../app/api';

export function setUpDom() {
    const input = document.querySelector("#country");
    const datalist = document.querySelector("datalist");

    // Adds a keyup listener on the input.
    input.addEventListener("keyup", (e) => {
        const value = (<HTMLInputElement>e.target).value;
        // If input value is longer or equal than 2 chars, adding "users" on ID attribute.
        if (value.length >= 3) {
            datalist.setAttribute("id", "countries");
            fetchByName(value).then(res => {
                console.log(res);
            });
        } else {
            datalist.setAttribute("id", "");
        }
    });
}



(function () {
    setUpDom();
})();