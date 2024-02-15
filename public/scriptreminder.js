// document.addEventListener('DOMContentLoaded', function() {
//     const reminderForm = document.getElementById('reminderForm');
//     const reminderList = document.getElementById('reminderList');

//     reminderForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const medicine = document.getElementById('medicine').value;
//         const time = document.getElementById('time').value;
//         const whatsapp = document.getElementById('whatsapp').value;
//         const userPhoneNumber = document.getElementById('userPhoneNumber').value; // Assuming you add an 'id' to your phone number input

//         // Create a new list item to display the reminder
//         const listItem = document.createElement('li');
//         listItem.textContent = Medicine: ${medicine}, Time: ${time}, User Phone: ${userPhoneNumber};
//         if (whatsapp) {
//             listItem.textContent += , WhatsApp Number: ${whatsapp};
//         }

//         // Add the new list item to the reminder list
//         reminderList.appendChild(listItem);

//         // Clear the form inputs
//         reminderForm.reset();

//         // Now you can use userPhoneNumber in your Twilio code
//         sendTwilioReminder(userPhoneNumber);
//     });
// });

// function sendTwilioReminder(userPhoneNumber) {
//     const accountSid = "ACf382cb92769be8308a0b5e397b2d464b";
//     const authToken = "ffa02d33c01a2d2b93859fc7bf3934d4";
//     const client = require('twilio')(accountSid, authToken);

//     // Replace this with your Twilio phone number
//     const twilioPhoneNumber = '+17853902979';

//     // Create a TwiML document with a custom message
//     const twiml = `
//         <Response>
//             <Say>Hello! This is your medicine reminder call. Please take your medicine now. Thank you!</Say>
//         </Response>
//     `;

//     // Send a phone call reminder
//     client.calls
//         .create({
//             twiml: twiml,
//             to: userPhoneNumber,
//             from: twilioPhoneNumber,
//         })
//         .then(call => console.log(call.sid))
//         .catch(error => console.error('Error:', error));


document.getElementById('reminderForm').addEventListener('submit', function(event){
    event.preventDefault();
    const form = document.getElementById('reminderForm');
    const medicine = form.elements['medicine'].value;
    const dateTime = form.elements['datetime'].value;
    const number = form.elements['whatsapp'].value;
    
    const split = window.location.pathname.split('/');
    
    axios.post(`http://localhost:3000/users/call/${split[3]}`, {
        medicine,dateTime,number
    }).then(function(response){
        if(response.data.message){
            console.log("Success");
        }else{
            console.log("Error");
        }
    })
})