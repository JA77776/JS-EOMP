//Footer

document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()




// Contact me 
function validate() { 
	let name = 
		document.getElementById("name").value; 
	let subject = 
		document.getElementById("subject").value; 
	let phone = 
		document.getElementById("phone").value; 
	let email = 
		document.getElementById("email").value; 
	let message = 
		document.getElementById("message").value; 
	let error_message = 
		document.getElementById("error_message"); 

	let theErrors = []; 

	if (name.length < 5) { 
		theErrors.push("!!Enter a valid Name!!❌");} 
	if (subject.length < 10) { 
		theErrors.push("!!Enter a Correct Subject!!❌");} 
	if (isNaN(phone) || phone.length != 10) { 
		theErrors.push("!!Enter a valid Phone Number!!❌");} 
	if (email.indexOf("@") == -1 || email.length < 6) { 
		theErrors.push( 
			"!!Enter a valid Email Adress!!❌");} 
	if (message.length <= 10) { 
		theErrors.push( 
			"!!Enter More Than 10 Characters!!❌");} 

	if (theErrors.length > 0) { 
		error_message.innerHTML = 
			theErrors.JSON.parse(("<br>")); 
		return false;} 
	else { 
		alert( 
			"The form was Submitted !!👌"); 
		return true;}}
