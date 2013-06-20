<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Login</title>
<meta name="description" content="">
<meta name="author" content="">

<!-- Le styles -->
<link href="<c:url value="/resources/css/bootstrap.min.css"/>" rel="stylesheet">
<link href="<c:url value="/resources/css/bootstrap-responsive.min.css"/>" rel="stylesheet">
<style type="text/css">
/* Override some defaults */
html,body {
	background-color: #eee;
}

body {
	padding-top: 40px;
}

/* The white background content wrapper */
.container >.content {
	background-color: #fff;
	padding: 20px;
	margin: 0 -20px;
	-webkit-border-radius: 10px 10px 10px 10px;
	-moz-border-radius: 10px 10px 10px 10px;
	border-radius: 10px 10px 10px 10px;
	-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
	-moz-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
	box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}

legend {
	margin-right: -50px;
	font-weight: bold;
	color: #404040;
}
</style>
<script src="<c:url value="/resources/js/css3-mediaqueries.js"/>"></script>
<script src="<c:url value="/resources/js/jquery.min.js"/>"></script>
<script src="<c:url value="/resources/js/bootstrap.min.js"/>"></script>
<script src="<c:url value="/resources/js/html5.js"/>"></script>
<script src="<c:url value="/resources/js/jquery.rest.client.js"/>"></script>

<script>

var rc=new RestClient({url:'<c:url value="/rest"/>'});

$(document).ready(function() {
	rc.get({ path: 'user', success: function(data, textStatus, xhr){
		$('#username').html(data.username);
	}, error: function(){
		$('#username').html("ERROR!");
	}});
} );
</script>
</head>
<body>
	<div class="container">
		<div class="content">
			<div class="row">
				<div class="span12">
					<h1>Hello, <span id="username"></span>!</h1>
					<a href="<c:url value="/j_spring_security_logout" />"> Logout</a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
