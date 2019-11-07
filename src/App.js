import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Restaurant from './Restaurant.js';
import './html5up-strongly-typed/assets/css/main.css';


function App() {
  return (
  <div id="page-wrapper">

	
				<section id="header">
					<div class="container">

							<h1 id="logo">Happy Hours</h1>
                            <br></br>
                            <img src={require('./html5up-strongly-typed/images/HHp.png')} height="300" width="300"/>

							<nav id="nav">
								<ul>
									<li><a class="icon fa-chart-bar" href="index.html"><span>Sort By</span></a></li>
									<li>
										<a href="#" class="icon fa-chart-bar"><span>Search</span></a>
										<ul>
											<li><a href="#">Lorem ipsum dolor</a></li>
											<li><a href="#">Magna phasellus</a></li>
											<li><a href="#">Etiam dolore nisl</a></li>
											<li>
												<a href="#">Phasellus consequat</a>
												<ul>
													<li><a href="#">Magna phasellus</a></li>
													<li><a href="#">Etiam dolore nisl</a></li>
													<li><a href="#">Phasellus consequat</a></li>
												</ul>
											</li>
											<li><a href="#">Veroeros feugiat</a></li>
										</ul>
									</li>
									<li><a class="icon solid fa-cog" href="left-sidebar.html"><span>Filter</span></a></li>
									<li><a class="icon solid fa-retweet" href="right-sidebar.html"><span>Right Sidebar</span></a></li>
								</ul>
							</nav>
					</div>
				</section>

				<section id="features">
					<div class="container">
						<header>
							<h2>Restaurants offering <strong>Discounts</strong>!</h2>
						</header>
						<div class="row aln-center">
							<div class="col-4 col-6-medium col-12-small">
									<section>
                                        <img src={require('./html5up-strongly-typed/images/logohere.jpg')}/>
									</section>

							</div>
							<div class="col-4 col-6-medium col-12-small">

									<section>
									<a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
										<header>
											<h3>Nice! What is HTML5 UP?</h3>
										</header>
										<p><a href="http://html5up.net">HTML5 UP</a> is a side project of <a href="http://twitter.com/ajlkn">AJ’s</a> (= me).
										I started it as a way to both test my responsive tools and sharpen up my coding
										and design skills a bit.</p>
									</section>

							</div>
							<div class="col-4 col-6-medium col-12-small">

									<section>
										<a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
										<header>
											<h3>What's this built with?</h3>
										</header>
										<p><strong>Responsive Tools</strong> is a simple set of tools for building responsive
										sites and apps. All of my templates at <a href="http://html5up.net">HTML5 UP</a> are built using these tools.</p>
									</section>

							</div>
							
						</div>
					</div>
				</section>

				

				


		</div>
  );
}

export default App;
