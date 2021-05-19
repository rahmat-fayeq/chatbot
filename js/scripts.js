

	var username="";
	function send_message(message)
	{
		var prevState=$("#container").html();
		if(prevState.length > 5)
		{
			prevState=prevState+"<br/>";
		}
		$("#container").html(prevState +"<span class='current_message'>" + "<span class='bot'>Chatbot: </span>" + message+"</span>");
		$(".current_message").hide();
		$(".current_message").delay(800).fadeIn();
		$(".current_message").removeClass("current_message");
	}

	function get_username()
	{
		send_message("Hello, What is your name?");
	}

	function ai(message)
	{
		if(username.length<5)
		{
			username=message;
			send_message("Nice to meet you "+username+", How are you doing?");
		}
		if((message.indexOf("how about you")>=0 ) || (message.indexOf("how are you")>=0 ))
		{
			send_message("Thanks, I am good");
		}
		if((message.indexOf("time")>=0) || (message.indexOf("hour")>=0 ))
		{
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();

			send_message("The current time is "+ h +":" + m + ":" +s);
		}
		if((message.indexOf("date")>=0))
		{
			var date = new Date();

			send_message("Today date is:  "+ date);
		}

		if(message.indexOf("fuck")>=0)
		{
			send_message("Calm down, please be polite");
		}
	}

	$(document).ready(function(){

		get_username();
		$("#textbox").keypress(function(event){
			if(event.which==13)
			{
				if( $("#enter").prop("checked"))
				{
					event.preventDefault();
					$("#send").click();
					
				}
			}
		});

		$("#send").click(function(){

			var username="<span class='username'>You: </span>";
			var newMessage=$("#textbox").val();
			$("#textbox").val("");
			var prevState=$("#container").html();
			//console.log(prevState.length);
			if(prevState.length > 5)
			{
				prevState=prevState+"<br/>";
			}
			$("#container").html(prevState + username + newMessage);
			$("#container").scrollTop($("#container").prop("scrollHeight"));

			ai(newMessage);

		});
	});
