// 1st card

let totalBalance = 0;  

document.getElementById('donateButton').addEventListener('click', function() {  
    const donationInput = document.getElementById('donationAmount').value;  
    const donationAmount = parseFloat(donationInput);  

    if (donationAmount > 0) {  
        totalBalance += donationAmount;  
        document.getElementById('balance').innerText = totalBalance.toFixed(2);  
        alert('Congratulations! Your donation of ' + donationAmount + ' BDT has been added. You Have Donated for HumanKind Successfully ');  
    } else {  
        alert('Invalid Donation Amount');  
    }  

    document.getElementById('donationAmount').value = '';  
}); 





// 2nd card 

let totalAmount = 660;  

        document.getElementById('donateButtonNew').addEventListener('click', function() {  
            const donationValue = document.getElementById('donationInput').value;  
            const donationAmount = parseFloat(donationValue);  

            if (donationAmount > 0) {  
                totalAmount += donationAmount;  
                document.getElementById('currentBalance').innerText = totalAmount.toFixed(2);  
                alert('Congratulations! Your donation of ' + donationAmount + ' BDT has been added.You Have Donated for HumanKind Successfully ');  
            } else {  
                alert('Invalid Donation Amount');  
            }  

            document.getElementById('donationInput').value = '';  
        });  

        // 3rd card



        let currentBalance = 2400;  

        document.getElementById('donateNowButton').addEventListener('click', function() {  
            const donationValue = document.getElementById('donationAmountInput').value;  
            const donationAmount = parseFloat(donationValue);  

            if (donationAmount > 0) {  
                currentBalance += donationAmount;  
                document.getElementById('totalFunds').innerText = currentBalance.toFixed(2);  
                alert('Congratulations! Your donation of ' + donationAmount + ' BDT has been added. You Have Donated for HumanKind Successfully');  
            } else {  
                alert('Invalid Donation Amount');  
            }  

            document.getElementById('donationAmountInput').value = '';  
        });  









    





