
const formContainer = document.getElementById('form-container')
const consentForm = document.getElementById("form");
const uploadText = document.getElementById('upload-text');

consentForm.addEventListener('submit', function(e){
     e.preventDefault();

    consentForm.innerHTML = `
     <div class="loading-data">
        <img src="../image/loading.svg" class="loading" alt="loading svg">
         <p id="accept-info">Accepting your order</p>
    </div>`

     setTimeout(function(){
         formContainer.innerHTML = `
         <div class="loading-data">
             <img src="../image/loading.svg" class="loading" alt="loading svg">
             <h2>Making the order!</h2>
        </div>
    `
    }, 1500) 

    setTimeout(function(){
        formContainer.innerHTML = `
        <div class="loading-data">
            <h2>Your order is Accepted!</h2>
            <h2>Thank you for ordering us! </h2>
            <p>Serving the You is our passion!.</p>
        </div>
        
        `
    }, 3000)

})
