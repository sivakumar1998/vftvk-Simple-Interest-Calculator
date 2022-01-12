document.querySelector('#interest').addEventListener('mouseout', () => {
    document.querySelector('#interest_rate').innerHTML = document.querySelector('#interest').value + '%';
})

document.querySelector('#compute').addEventListener('click', () => {
    const amount = parseFloat(document.querySelector('#amount').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const years = parseFloat(document.querySelector('#years').value);
    if (Number.isNaN(amount) && Number.isNaN(years)) {
        alert("amount  and year should not be empty");
    } else if (Number.isNaN(years)) {
        alert("please enter a valid year input");
    } else if (Number.isNaN(amount)) {
        alert("please enter a valid amount")
    }
    else {
        const output = document.querySelector('#output');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');
        const para4 = document.createElement('p');

        const finalAmount = parseFloat(((amount * years * interest) / 100));
        para1.innerHTML = 'If you deposit <mark>' + amount + '</mark>,';
        para2.innerHTML = `at an interest rate of  <mark>${interest}%</mark>.`;
        para3.innerHTML = 'You will receive an amount of <mark>' + finalAmount + '</mark>'+',';
        para4.innerHTML = `in the year <mark>${new Date().getFullYear() + years}</mark>`;
        if (output.children.length == 0) {
            output.appendChild(para1);
            output.appendChild(para2);
            output.appendChild(para3);
            output.appendChild(para4);
        } else {
            output.innerHTML = ''
            output.appendChild(para1);
            output.appendChild(para2);
            output.appendChild(para3);
            output.appendChild(para4);
        }
    }
});

        
