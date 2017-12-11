			function Function1() 
			{
			var x = document.getElementById("myNumber").value;
			var text = '{"employees":[' +
			'{"firstName":"John","lastName":"Doe" },' +
			'{"firstName":"Anna","lastName":"Smith" },' +
			'{"firstName":"Peter","lastName":"Jones" }]}';

			obj = JSON.parse(text);
			document.getElementById("Employ").innerHTML =
			"Name : " + obj.employees[x-1].firstName + " " + obj.employees[x-1].lastName;
			}
			
			function Function2() 
			{
			document.getElementById("Java2").innerHTML = '<div class="w3-card-4 w3-margin w3-white"><div class="w3-container"><div class="w3-container"><h3><b>JavaScript#2.1</b></h3><h5>Input HTML Element and change it attribute. <span class="w3-opacity"> [Input HTML Element, Display Element, Hide Element, ##Can repeat(change attribute).]</span></span></h5></div><div class="w3-container"><br><button onclick="Function2a()" id="Button2">Hide</button><span class="w3-opacity">This button will hide all script 2.1</span><p>How it work? 1# When you hide it the attribute of context just change to "none" so if you want it to re appear just change it to "block" or something else, <br>Then it can repeat many time as you want. <br>How it work? 2# Input HTML Element just put context in between id-tag, So i just make empty id-tag and put the whole context between it when click the button, not so good method but easy to manage when use external script.</p><p><strong>Note:</strong> You can use same id-tag to input different context.</p><p id="Outputfield1"></p></div>';
			document.getElementById('Java2').style.display='block';
			}

			function Function2a()
			{
			document.getElementById('Java2').style.display='none';
			document.getElementById('Button1').innerHTML='Show Script 2 again';
			}
			
			function Function3()
			{
				var Fahrenheit = document.getElementById("Fahrenheit").value;
				var Celsius;
				Celsius = (5/9)*(Fahrenheit-32);
				document.getElementById("Output2").innerHTML = Celsius;
				
			}
			
			function Function4()
			{
				var pass = document.getElementById("password").value;
				if(pass == 11247889)
				{
					document.getElementById("Output3").style.display='block';
				}
				else
				{
					window.alert("Wrong password");
				}
			}
			
			function Incimg(ind)            
			{
				var Imgvalue = document.getElementById("imgvalue").value;
				
				if (ind.indexOf("Submit") > -1) 	{ document.getElementById('image1').style.width = Imgvalue + "%"; };
				if (ind.indexOf("ChangeB") > -1) 	{ document.getElementById('image1').style.border = Imgvalue + "px solid blue"; };
				if (ind.indexOf("ChangeR") > -1) 	{ document.getElementById('image1').style.borderRadius = Imgvalue + "em"; };
			}
			