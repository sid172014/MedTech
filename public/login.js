
document.getElementById('signupForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    var form = document.getElementById('signupForm');
    
    var username = form.elements['username'].value;
    var password = form.elements['password'].value;
    var email = form.elements['email'].value;
    var phone = form.elements['phone'].value;

    axios.patch('http://localhost:3000/users/signup',{
        username : username,
        password : password,
        email : email,
        phone : Number(phone)
    }).then(function(response){
        document.getElementById('display').innerText = "Registered";
    });  
});

document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();
    
    var loginform = document.getElementById('loginform');

    var email = loginform.elements['email'].value;
    var password = loginform.elements['password'].value;

    axios.post('http://localhost:3000/users/signin',{
        email : email,
        password : password
    }).then(function(response){
        document.getElementById('displaylogin').innerText = "Logged In";
    })
})