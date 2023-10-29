//alert("javascript is working!");

function showHideNav() {
	$('.nav').toggleClass('small-nav-closed');
	$('.nav').toggleClass('small-nav-open');
	$('.fa-times').toggleClass('close-icon');
	$('.fa-times').toggleClass('hide');
};

$('.hamburger-icon').on('click', showHideNav);
$('.fa-times').on('click', showHideNav);


$("#mc-embedded-subscribe").on('click', function(e) {
	e.preventDefault();
	var firstNameInput = $("#mce-FNAME").val();
	var lastNameInput = $("#mce-LNAME").val();
	var emailInput = $("#mce-EMAIL").val();

	if (firstNameInput === "" || lastNameInput === "" || emailInput === "") {
		$(".error-msg").append("<p>One of the required fields is empty</p>");
	} else if (firstNameInput.length < 2) {
		$(".error-msg").append("<p>First name must have at least 2 letters</p>");
	} else if (lastNameInput.length < 2) {
		$(".error-msg").append("<p>Last name must have at least 2 letters</p>");
	} else if (emailInput.includes("@") === false || emailInput.includes(".") === false) {
		$(".error-msg").append("<p>email must contain @ and . </p>");
	} else {
		$("#mc-embedded-subscribe-form").submit();
	}
});








