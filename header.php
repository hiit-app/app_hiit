<head>
	<meta charset="UTF-8">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<!-- for ios 7 style, multi-resolution icon of 152x152 -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-barstyle" content="black-translucent">
<link rel="apple-touch-icon" href="icon-152.png">
<!-- for Chrome on Android, multi-resolution icon of 196x196 -->
<meta name="mobile-web-app-capable" content="yes">
<link rel="shortcut icon" sizes="196x196" href="icon-196.png">
<meta name="mobile-web-app-capable" content="yes">
<script src="ch01/jquery.js">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<title>Document</title>
	<meta name="viewport" content="user-scalable=no, width=device-width" />
	<link href="https://fonts.googleapis.com/css?family=Barrio" rel="stylesheet"> <!-- Desordenada -->
	<link href="https://fonts.googleapis.com/css?family=Audiowide|Barrio" rel="stylesheet"><!-- bonita en mayuscula -->
	<link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet"><!-- bonita -->
	
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap-theme.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.eot">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.svg">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.ttf">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.woff">
<link rel="stylesheet" href="bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.woff2">
</head>
<style>

  h4 {
   line-height: 150px;
}
.blend {
text-align: center;

color:white;
    height: 28%;
    background-image: url("images/entreno1.jpg");
    background-color: #148;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: luminosity;
    margin: 3px;
}
.blend2 {
	text-align: center;

color:white;
    min-height: 28%;
    background-image: url("images/entreno3.jpg");
    background-color: #148;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: luminosity;
    margin: 3px;
}
.blend1 {
	text-align: center;

color:white;
    min-height: 28%;
    background-image: url("images/entreno2.jpg");
    background-color: #148;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: luminosity;
    margin: 3px;
}








html,body {overflow:hidden;}


	#header div.pressed {
-webkit-border-image: url(images/button_clicked.png) 0 8 0 8;
}

@font-face {
font-family: "Audiowide";
src: url("Audiowide.ttf");
}
	body {

background-color: #ddd; /* Background color */
color: #222; /* Foreground color used for text */
font-family: 'Barrio', cursive;
font-family: 'Audiowide', cursive;

font-size: 14px;
margin: 0; /* Amount of negative space around the
outside of the body */
padding: 0; /* Amount of negative space around the
inside of the body */
}
#header h1 {
margin: 0;
padding: 0;
}
#header h1 a {
background-color: red;
border-bottom: 1px solid #666;
color: white;
display: block;
font-size: 20px;
font-weight: bold;
padding: 10px 0;
text-align: center;
text-decoration: none;
}


#header ul li a {
background-color: #FFFFFF;
border: 1px solid #999999;
color: #222222;
display: block;
font-size: 17px;
font-weight: bold;
margin-bottom: -1px;
padding: 12px 10px;
text-decoration: none;
}




#header h1 a {
text-shadow: 0px 1px 1px grey;
background-image: -webkit-gradient(linear, left top, left bottom, from(black), to(black));

}

#header{
	box-shadow: 1px 1px 50px 5px grey;
}

#header div.leftButton {
position: absolute;
top: 7px;
left: 6px;
height: 30px;
font-weight: bold;
text-align: center;
color: white;
text-shadow: rgba (0,0,0,0.6) 0px -1px 1px;
line-height: 28px;
border-width: 0 8px 0 8px;
cursor: pointer;

}
#header div.leftButton1 {
position: absolute;
top: 12px;
left: 6px;
height: 30px;
font-weight: bold;
text-align: center;
color: white;
text-shadow: rgba (0,0,0,0.6) 0px -1px 1px;
line-height: 28px;
border-width: 0 8px 0 8px;
cursor: pointer;

}






/* Hacia abajo está menu torso pierna, el nav solamente*/

#menutorsopierna {
text-shadow: 0px 1px 1px grey;
background-image: -webkit-gradient(linear, left top, left bottom, from(grey), to(black));
height:5%;
color:white;

}
#menutorsopierna1 {
text-shadow: 0px 1px 1px grey;
background-image: -webkit-gradient(linear, left top, left bottom, from(grey), to(black));
height:5%;
color:white;

}







#menu_a{
		display:none;
	}
#menu_a ul {
list-style: none;
margin: 10px;
padding: 0;
}

#menu_a ul li a {
background-color: #FFFFFF;
border: 1px solid #999999;
color: #222222;
display: block;
font-size: 17px;
font-weight: bold;
margin-bottom: -1px;
padding: 12px 10px;
text-decoration: none;
}
#menu_a ul li:last-child a {
-webkit-border-bottom-left-radius: 8px;
-webkit-border-bottom-right-radius: 8px;
}




#menu_b{
		display:none;
	}
#menu_b ul {
list-style: none;
margin: 10px;
padding: 0;
}

#menu_b ul li a {
background-color: #FFFFFF;
border: 1px solid #999999;
color: #222222;
display: block;
font-size: 17px;
font-weight: bold;
margin-bottom: -1px;
padding: 12px 10px;
text-decoration: none;
}
#menu_b ul li:last-child a {
-webkit-border-bottom-left-radius: 8px;
-webkit-border-bottom-right-radius: 8px;
}



</style>