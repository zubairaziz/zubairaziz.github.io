<?php

if (isset($_GET['page'])) { 
	$page = ($_GET['page']);
} else { 
	$page = 'home'; 
}

$title = ucfirst($page);

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="icon" href="img/favicon.ico" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	 crossorigin="anonymous" />
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	 crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
	 crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
	 crossorigin="anonymous"></script>
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat|Raleway">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
	 crossorigin="anonymous">
	<title>UPTICK |
		<?php echo $title; ?>
	</title>
</head>

<body>
	<div id="page"></div>
	<?php require_once "components/footer.php"; ?>
	<script>
		display();

		function display() {
			$(document).ready(function () {
				$.ajax({
					type: 'POST',
					url: 'pages/<?php echo $page; ?>.php',
					success: function (result) {
						$('#page')
							.hide()
							.html(result)
							.fadeIn(120);
						eval($('#page'));
					}
				});
			});
		}
	</script>
	<script>
		$(document).ready(function () {
			$('a[href="' + this.location.pathname + '"]').parent().addClass('active');
		});
	</script>
	<script src="js/scripts.js"></script>
</body>

</html>