// const donateButton=document.getElementById('donate');
// donateButton.addEventListener('click',function() {
//     const addAmount =document.getElementById('amount').value;
//     if(isNaN(addAmount) || addAmount <=0){
//         console.log('Congrates! You Have Donated for HumanKind Successfully')

//         const balance = document.getElementById('amount-balance').innerText;

//         const newBalance = balance + addAmount;
       
//     }
//     else{
//         alert('Invalid Donation Amount');
//     }

// });


//1st card
document.getElementById('donateButton').addEventListener('click', function() {  
    const donationInput = document.getElementById('donationAmount');  
    const amountDisplay = document.getElementById('amount');  
    const donationValue = parseFloat(donationInput.value);  

    if (isNaN(donationValue) || donationValue <= 0) {  
        console.log('Congrates! You Have Donated for HumanKind Successfully')

        // const balance=document.getElementById('amount').innerText;
        
        // const addMoneyNumber= parseFloat(donationInput);
        // const balanceNumber=parseFloat(amount);
        // const newBalance=addMoneyNumber + balanceNumber ;
        // console.log(newBalance);

        // document.getElementById('amount').innerText=newBalance;

    }  
    else{
                alert('Invalid Donation Amount');
             }
           

    amountDisplay.textContent = `${donationValue.toFixed(2)} BDT`;

});  

//2nd card
document.getElementById('donateBtn').addEventListener('click', function() {  
    const donationInput = document.getElementById('donationAccount');  
    const amountDisplay = document.getElementById('account');  
    const donationValue = parseFloat(donationInput.value);  

    if (isNaN(donationValue) || donationValue <= 0) {  
        console.log('Congrates! You Have Donated for HumanKind Successfully')


    }  
    else{
                alert('Invalid Donation Amount');
             }
           

    amountDisplay.textContent = `${donationValue.toFixed(2)} BDT`;
    newBalance=amountDisplay +donationValue;
    

});  


//3rd card
document.getElementById('donate').addEventListener('click', function() {  
    const donationInput = document.getElementById('quota-donate-amount');  
    const amountDisplay = document.getElementById('total-amount');  
    const donationValue = parseFloat(donationInput.value);  

    if (isNaN(donationValue) || donationValue <= 0) {  
        console.log('Congrates! You Have Donated for HumanKind Successfully')


    }  
    else{
                alert('Invalid Donation Amount');
             }
           

    amountDisplay.textContent = `${donationValue.toFixed(2)} BDT`;
    

});

    




document.getElementById('btn-blog')
.addEventListener('click',function() {

    window.location.href = './home.html'
});

document.getElementById('btn-home')
.addEventListener('click',function() {

    window.location.href = './index.html'
});

