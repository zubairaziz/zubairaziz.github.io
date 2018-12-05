<section id="intro">
	<div class="content">
		<div class="container">
			<img src="img/iphone.png" alt="iphone" class="float-left" height="500px">
			<div class="header text-right">
				<h1 class="display-1">
					<!-- <img src="img/logo.png" alt="logo"> -->
					UPTICK</h1>
				<h2 class="display-4">
					<strong>
						Student Run Marketplace
					</strong>
				</h2>
			</div>
			<hr>
			<div class="lead text-right">
				<p>
					Uptick is a network of college students for buying and selling products effortlessly. The Marketplace uses Data
					Mining and Predictive Analytics to find the best time and price to buy and sell products.
				</p>
				<div class="row">
					<div class="col float-right">
						<div id="custom-search-input">
							<div class="input-group col-md-12">
								<input type="text" class="form-control" placeholder="email" />
								<span class="input-group-btn">
									<button class="btn btn-warning" type="submit">
										subscribe
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="team">
	<div class="container">
		<h2 class="display-4 pt-4">Meet Our Team</h2>

		<div class="row">

			<?php

		$team = array(
			array("fName"=>"Sidhant", "lName"=>"Ahluwalia", "role"=>"CEO", "github"=>"https://github.com/sidhantal"),
			array("fName"=>"Naven", "lName"=>"Gazi", "role"=>"CTO", "github"=>"https://github.com/gnaven"),
			array("fName"=>"Yahouza", "lName"=>"Sabo", "role"=>"CFO", "github"=>""),
			array("fName"=>"Azmayeen", "lName"=>"Rhythm", "role"=>"Product Manager", "github"=>""),
			array("fName"=>"Ryan", "lName"=>"Maciel", "role"=>"Lead Front-End Developer", "github"=>"https://github.com/ryanmaciel"),
			array("fName"=>"Zubair", "lName"=>"Aziz", "role"=>"Lead Back-End Developer", "github"=>"https://github.com/zubairaziz"),
			array("fName"=>"Bartek", "lName"=>"Jazierski", "role"=>"Back-End Developer", "github"=>"https://github.com/brjezierski"),
		);

		$i = 0;

		foreach($team as $values){
			echo '
			<div class="col mx-auto">
				<div class="card text-center m-3 border border-dark text-dark" style="width:16rem;">
					<img src="img/team/' . $values['fName'] . '.jpg" class="card-img-top img-fluid" alt="' . $values['fName'] . '" />
					<div class="card-body border-dark">
						<h5 class="card-title">' . $values['fName'] . ' ' . $values['lName'] . '</h5>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item border-dark">' . $values['role'] . '</li>';
						?>
			<?php 
						if ($values['github']) {
							echo '
							<li class="list-group-item border-dark"><a href="'. $values['github'] .'"><i class="fab fa-github text-dark"></i></a></li>
							';
						}
						echo '
					</ul>
				</div>
			</div>
			';
			$i++;
			if (i >= 3) {
				echo '
					</div>
					<div class="row">
				';
			$i = 0;
			} 
		}
		echo '</div>';
		?>

		</div>
</section>