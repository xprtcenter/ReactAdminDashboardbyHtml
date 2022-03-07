import React from "react";
import "./App.css";
import userimg from "./user.jpg";

function App() {
	return (
		<div className="container">
			<div className="navigation">
				<ul>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="logo-apple"></ion-icon>
							</span>
							<span className="title">Brand Name</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="home"></ion-icon>
							</span>
							<span className="title">Dashboard</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="people"></ion-icon>
							</span>
							<span className="title">Customers</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="chatbubbles"></ion-icon>
							</span>
							<span className="title">Message</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="help-circle"></ion-icon>
							</span>
							<span className="title">Help</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="settings"></ion-icon>
							</span>
							<span className="title">Setting</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="lock"></ion-icon>
							</span>
							<span className="title">Password</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span className="icon">
								<ion-icon name="log-out"></ion-icon>
							</span>
							<span className="title">Sign Out</span>
						</a>
					</li>
				</ul>
			</div>

			<div className="main">
				<div className="topbar">
					<div className="toggle">
						<ion-icon name="menu"></ion-icon>
					</div>

					<div className="search">
						<label>
							<input type="text" placeholder="search here" />
							<ion-icon name="search"></ion-icon>
						</label>
					</div>

					<div className="user">
						<img src={userimg} alt="" />
					</div>
				</div>

				<div className="cardBox">
					<div className="card">
						<div>
							<div className="numbers">1,504</div>
							<div className="cardName">Daily Views</div>
						</div>
						<div className="iconBox">
							<ion-icon name="eye"></ion-icon>
						</div>
					</div>
					<div className="card">
						<div>
							<div className="numbers">80</div>
							<div className="cardName">Sales</div>
						</div>
						<div className="iconBox">
							<ion-icon name="cart"></ion-icon>
						</div>
					</div>
					<div className="card">
						<div>
							<div className="numbers">254</div>
							<div className="cardName">Comments</div>
						</div>
						<div className="iconBox">
							<ion-icon name="chatbubbles"></ion-icon>
						</div>
					</div>
					<div className="card">
						<div>
							<div className="numbers">$2,542</div>
							<div className="cardName">Earning</div>
						</div>
						<div className="iconBox">
							<ion-icon name="cash"></ion-icon>
						</div>
					</div>
				</div>

				<div className="details">
					<div className="recentOrders">
						<div className="cardHeader">
							<h2>Recent Orders</h2>
							<a href="#" className="btn">
								View All
							</a>
						</div>
						<table>
							<thead>
								<tr>
									<td>Name</td>
									<td>Price</td>
									<td>Payment</td>
									<td>Status</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Ariel Alexander</td>
									<td>$5,955</td>
									<td>Yes</td>
									<td>
										<span className="status pending">pending</span>
									</td>
								</tr>
								<tr>
									<td>Rina Petersen</td>
									<td>$7,914</td>
									<td>No</td>
									<td>
										<span className="status return">Return</span>
									</td>
								</tr>
								<tr>
									<td>Autumn Walters</td>
									<td>$8,027</td>
									<td>No</td>
									<td>
										<span className="status inprogress">Inprogress</span>
									</td>
								</tr>
								<tr>
									<td>Thor Burks</td>
									<td>$9,318</td>
									<td>Yes</td>
									<td>
										<span className="status delivered">Delivered</span>
									</td>
								</tr>
								<tr>
									<td>Barclay Higgins</td>
									<td>$6,059</td>
									<td>Yes</td>
									<td>
										<span className="status pending">Pending</span>
									</td>
								</tr>
								<tr>
									<td>Ariel Alexander</td>
									<td>$5,955</td>
									<td>Yes</td>
									<td>
										<span className="status pending">pending</span>
									</td>
								</tr>
								<tr>
									<td>Rina Petersen</td>
									<td>$7,914</td>
									<td>No</td>
									<td>
										<span className="status return">Return</span>
									</td>
								</tr>
								<tr>
									<td>Autumn Walters</td>
									<td>$8,027</td>
									<td>No</td>
									<td>
										<span className="status inprogress">Inprogress</span>
									</td>
								</tr>
								<tr>
									<td>Thor Burks</td>
									<td>$9,318</td>
									<td>Yes</td>
									<td>
										<span className="status delivered">Delivered</span>
									</td>
								</tr>
								<tr>
									<td>Barclay Higgins</td>
									<td>$6,059</td>
									<td>Yes</td>
									<td>
										<span className="status pending">Pending</span>
									</td>
								</tr>
								<tr>
									<td>Ariel Alexander</td>
									<td>$5,955</td>
									<td>Yes</td>
									<td>
										<span className="status pending">pending</span>
									</td>
								</tr>
								<tr>
									<td>Rina Petersen</td>
									<td>$7,914</td>
									<td>No</td>
									<td>
										<span className="status return">Return</span>
									</td>
								</tr>
								<tr>
									<td>Autumn Walters</td>
									<td>$8,027</td>
									<td>No</td>
									<td>
										<span className="status inprogress">Inprogress</span>
									</td>
								</tr>
								<tr>
									<td>Thor Burks</td>
									<td>$9,318</td>
									<td>Yes</td>
									<td>
										<span className="status delivered">Delivered</span>
									</td>
								</tr>
								<tr>
									<td>Barclay Higgins</td>
									<td>$6,059</td>
									<td>Yes</td>
									<td>
										<span className="status pending">Pending</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="recentCustomers">
						<div className="cardHeader">
							<h2>Recent Customers</h2>
						</div>
						<table>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img1.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										David
										<br />
										<span>Italy</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img2.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Ram
										<br />
										<span>Bareilly</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img3.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Shobhit
										<br />
										<span>Delhi</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img4.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Pankaj
										<br />
										<span>Noida</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img5.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Ruchi
										<br />
										<span>Bina</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img6.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Khusboo
										<br />
										<span>Par</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img7.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Alladin
										<br />
										<span>Nainital</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img8.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Kapil
										<br />
										<span>Rudrapur</span>
									</h4>
								</td>
							</tr>
							<tr>
								<td width="60px">
									<div className="imgBx">
										<img src="img/img9.jpg" alt="" />
									</div>
								</td>
								<td>
									<h4>
										Bittu
										<br />
										<span>Haldwani</span>
									</h4>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
