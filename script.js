function withdraw_click(){
    const withdraw = document.getElementById('withdraw').value;
    const withdraw_password = document.getElementById('withdraw_password').value;
    var withdraw_amount = document.getElementById('withdraw_amount').value;
    
    const withdraws = "6385291287";
    const withdraw_passwords = "1234";
    let total =20000;
    if(withdraw == withdraws && withdraw_password == withdraw_passwords){
        if(withdraw_amount <= 9000){
            total=parseInt(total)-parseInt(withdraw_amount)
            alert(`balance amount ${total} 
                the amount is withdraw ${withdraw_amount}
                `);
        }
        else{
            alert("Limited amount is only 9000")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}
function withdraw_cancel(){
    location.reload();
}


// deposit

function deposite_click(){
    const deposite = document.getElementById('deposite').value;
    const deposite_password = document.getElementById('deposite_password').value;
    var deposite_amount = document.getElementById('deposite_amount').value;

    const deposites = "6385291287";
    const deposite_passwords = "1234";
    let total =20000;

    if(deposite == deposites && deposite_password == deposite_passwords){
        if(deposite_amount <= 20000){
            total=parseInt(total)+parseInt(deposite_amount)
            alert(`Amount is deposite ${total}`);
        }
        else{
            alert("Limited amount is only 20000 deposited")
        }
    }
    else{
        alert("Invalid Account Number or Password");
    }
}

// create

function create(){
    var create_name = document.getElementById('create_name').value;
    var create_email = document.getElementById('create_email').value;
    var create_pass = document.getElementById('create_pass').value;

    var details = document.getElementById('data_details');
    // details.style.display = "block";
    var name =document.getElementById("name").innerHTML = `Name : ${create_name}`;
    var name =document.getElementById("email").innerHTML = `email: ${create_email}`;
    var name =document.getElementById("password").innerHTML =` password : ${create_pass}`;
    
    alert("hi")
    
    
    
}

function another(){
    location.reload();
}


// balance 

function balance_click(){
    const balance = document.getElementById('balance').value;
    const balance_password = document.getElementById('balance_password').value;

    const balances = "6385291287";
    const balance_passwords = "1234";
    let total = 30000;
    if(balance == balances && balance_password == balance_passwords){
            alert(`Bank balance ${total}`);
    }
    else{
        alert("Invalid Account Number or Password");
    }

}