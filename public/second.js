$(function(){
    $('.datepicker').datepicker({
      dateFormat:'yyyy/mm/dd'
    });
  });
  
document.getElementById('save').addEventListener('click', function(){ 
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const split = window.location.pathname.split('/');

  axios.patch(`http://localhost:3000/users/update/${split[3]}`, {
    phone,address
  }).then(function(response){
    console.log(response.data);
  });
})

document.getElementById('medRem').addEventListener("click", function(){ 
  const split = window.location.pathname.split('/');
  window.location.href = `http://localhost:3000/users/call/${split[3]}`
})