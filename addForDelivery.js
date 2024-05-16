const productList = document.getElementsByClassName('card product-card ');

for (product of productList) {

    const priceSection = product.getElementsByClassName('product-card__price')[0];
    const buttonElement = document.createElement('div');

    buttonElement.style.width = '100%';
    
    const buttonHtml = `
        <button 
            class="btn btn-action btn_full btn-add-to-basket"
            style="margin-top: 1rem;"
        >
            Add for Delivery
        </button>
    `;

    const productCode = product.getAttribute('data-product-code');
    
    buttonElement.innerHTML = buttonHtml;

    const addForDelivery = () => {
        const details = {
            'productCodePost': Number(productCode),
            'postcode': '',
            'CSRFToken': 'd8e97933-8d25-496f-8ba1-b08584405eeb',
            'addedForDelivery': true,
            'qty': 1
        };
        
        let formBody = [];
        for (const property in details) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('https://www.wickes.co.uk/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        });

        let basketCounter = document.getElementsByClassName('header-minicart__counter')[0];

        let currentCount = Number(basketCounter.innerHTML);

        basketCounter.remove();

        let countParent = document.getElementsByClassName('header-right__link header-minicart__btn header-minicart__btn_link')[0];
        const countElement = document.createElement('span');
        
        countElement.classList.add('header-minicart__counter');
        countElement.style.right = '-7px';
        countElement.innerHTML = currentCount + 1;

        countParent.appendChild(countElement);
    }

    buttonElement.addEventListener('click', addForDelivery);

    if (!priceSection) continue;
    
    priceSection.appendChild(buttonElement);
    
}