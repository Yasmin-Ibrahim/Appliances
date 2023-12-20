let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let appliance = document.querySelector('.appliance');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value*3 + 'px';
    appliance.style.fontSize = value + 'px';
    if(scrollY >= 67)
        appliance.style.fontSize = 67 + 'px';
        appliance.style.position = 'fixed';
        if(scrollY >= 600){
            appliance.style.display = 'none';
        }else{
            appliance.style.display = 'block';
        }
        if(scrollY >= 152){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
}
// Function to filter devices based on category
function filterDevices() {
    const categoryFilter = document.getElementById('category').value;
    const deviceList = document.getElementById('device-list');

    // Clear existing devices
    deviceList.innerHTML = '';

    // Filter and display devices
    devices.filter(device => categoryFilter === 'all' || device.category === categoryFilter)
        .forEach(device => {
            const deviceCard = createDeviceCard(device);
            deviceList.appendChild(deviceCard);
        });
}

function addToCart(productId) {
    var product = document.getElementById(productId);
    var cartItems = document.getElementById('cart-items');
    
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(product.querySelector('h3').textContent));
    
    cartItems.appendChild(li);
}

