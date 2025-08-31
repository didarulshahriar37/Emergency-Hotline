const callHistory = [];

function copyAlert(id) {
    const number = document.getElementById(id).innerText;
    alert('Copied Number: ' + number);

    navigator.clipboard.writeText(number);
}
function callAlert(idName, idNumber) {
    const name = document.getElementById(idName).innerText;
    const number = document.getElementById(idNumber).innerText;
    alert('Calling: ' + name + ' (' + number + ')');
}

// WishList Update
const heart_classes = document.getElementsByClassName('heart-icon');
for (const cls of heart_classes) {
    cls.addEventListener('click', function () {
        const heartCount = parseInt(document.getElementById('heart-count').innerText);

        const updatedHeartCount = heartCount + 1;

        document.getElementById('heart-count').innerText = updatedHeartCount;
    })
}

// Copy Functionalities
document.getElementById('emergency-copy-btn').addEventListener('click', function () {
    copyAlert('emergency-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('police-copy-btn').addEventListener('click', function () {
    copyAlert('police-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('fire-copy-btn').addEventListener('click', function () {
    copyAlert('fire-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('ambulance-copy-btn').addEventListener('click', function () {
    copyAlert('ambulance-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('child-copy-btn').addEventListener('click', function () {
    copyAlert('child-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('dudok-copy-btn').addEventListener('click', function () {
    copyAlert('dudok-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('elec-copy-btn').addEventListener('click', function () {
    copyAlert('elec-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('brac-copy-btn').addEventListener('click', function () {
    copyAlert('brac-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})

document.getElementById('rail-copy-btn').addEventListener('click', function () {
    copyAlert('rail-number');

    const copyCount = parseInt(document.getElementById('copy-count').innerText);

    const updatedCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = updatedCopyCount;
})


// Call Functionalities
document.getElementById('emergency-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('emergency-name', 'emergency-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'National Emergency Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('police-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('police-name', 'police-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Police Helpline Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('fire-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('fire-name', 'fire-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Fire Service Number',
            number: '999',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('ambulance-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('ambulance-name', 'ambulance-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Ambulance Service',
            number: '1994-999999',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('child-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('child-name', 'child-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Women & Child Helpline',
            number: '109',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('dudok-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('dudok-name', 'dudok-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Anti-Corruption Helpline',
            number: '106',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('elec-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('elec-name', 'elec-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Electricity Helpline',
            number: '16216',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('brac-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('brac-name', 'brac-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Brac Helpline',
            number: '16445',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

document.getElementById('rail-call-btn').addEventListener('click', function () {
    const coinCount = parseInt(document.getElementById('coin-count').innerText);

    if (coinCount >= 20) {
        callAlert('rail-name', 'rail-number');

        const updatedCoinCount = coinCount - 20;
        document.getElementById('coin-count').innerText = updatedCoinCount;

        const data = {
            name: 'Bangladesh Railway Helpline',
            number: '163',
            date: new Date().toLocaleTimeString()
        };

        callHistory.push(data);
        const historyContainer = document.getElementById('history-container');
        historyContainer.innerHTML = '';

        for (const data of callHistory) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="flex justify-between items-center bg-[#fafafa] p-[16px] rounded-[8px] mb-[8px]">
                        <div>
                            <h1 class="font-bold">${data.name}</h1>
                            <p class="text-[#5c5c5c]">${data.number}</p>
                        </div>
                        <div>
                            <p>${data.date}</p>
                        </div>
                    </div>
    `
            historyContainer.appendChild(div);
        }
    }
    else {
        alert('Insufficient Coins !');
    }
})

// Clear Button Functionality
document.getElementById('clear-btn').addEventListener('click', function(){
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';
})