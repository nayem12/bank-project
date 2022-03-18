const btn = document.getElementById('login');
btn.addEventListener('click', function(){
    const area = document.getElementById('login-area');
    area.style.display="none";
    const tran = document.getElementsByClassName('transaction');
    tran[0].style.display="block";
    
})

const dipobtn = document.getElementById('dipositbtn');
dipobtn.addEventListener('click',function(){
    const amount = document.getElementById('dipositamount').value;
    const NumOfamount = parseFloat(amount);
    const camount =parseFloat(document.getElementById('currentAmount').innerText); 
    const tamount = NumOfamount + camount;


    document.getElementById('currentAmount').innerText = tamount;
    document.getElementById('dipositamount').value="";

    const bamount = parseFloat(document.getElementById('balanceAmount').innerText);
    const btamount = bamount + NumOfamount;
    
    document.getElementById('balanceAmount').innerText = btamount;
})

const wbtn = document.getElementById('withdrawbtn');
wbtn.addEventListener('click',function(){
    const wamount =parseFloat (document.getElementById('withdrawAmount').value);
    
    const cwithd =parseFloat ( document.getElementById('currentWithdraw').innerText);
    const wtamount = wamount+cwithd;

    const bamount = parseFloat(document.getElementById('balanceAmount').innerText);
    const btamount = bamount - wamount;
    document.getElementById('currentWithdraw').innerText = wtamount;
    document.getElementById('withdrawAmount').value = '';
    
    
    
    document.getElementById('balanceAmount').innerText = btamount;

})
