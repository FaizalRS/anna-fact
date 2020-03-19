function validate()
	{
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (username == "Great" && password == "learning12")
		{
			window.alert("Login Succesfully");
			window.open("main-page.html");
			return false;
		}
		else
		{
			alert("Try Again");
		}
	}