import React from 'react';
import LogoutButton from '../../../components/LogoutButton.jsx';

import customerImg01 from '../../../assets/imgs/customer01.jpg';
import customerImg02 from '../../../assets/imgs/customer02.jpg';
import { NavLink } from 'react-router-dom';

export default function ProfilsPanel() {

  return (
    <div>
      <div>
        <div className='container'>
          <center><h1>Profils Panel</h1></center>
          {/* <LogoutButton /> */}
        </div>
        

        <div className="container text-center">
          {/* <div className="row">
            <div className="col-sm-8">col-sm-8</div>
            <div className="col-sm-4">col-sm-4</div>
          </div> */}
          <div className="row">
            <div className="col-sm">
              {/* col-sm */}
            </div>
            <div className="col-sm"><h2>Liste Profils</h2></div>
            <div className="col-sm">
              <NavLink
                to="/profilAdd"
                className="btn btn-outline-success"
              >
                {/* <span className="icon_dash">
                  <ion-icon name="people-outline" />
                </span> */}
                <span className="title">Add Profils</span>
              </NavLink>
            </div>
          </div>
        </div>



        {/*  */}
        <div className="details_dashV2">
          <div className="recentOrders_dash">
            <div className="cardHeader_dash">
              <h2>Recent Orders</h2>
              <a href="#" className="btn_dash">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash return">Return</span></td>
                </tr>
                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash inProgress">In Progress</span></td>
                </tr>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash return">Return</span></td>
                </tr>
                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash inProgress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* ================= New Customers ================ */}
          
        </div>
        {/*  */}
        <hr /> {/* This is the horizontal line */}
        <hr /> {/* This is the horizontal line */}
      </div>
        
        <div className="cardBox_dash">
          <div className="card_dash">
            <div>
              <div className="numbers_dash">1,504</div>
              <div className="cardName_dash">Daily Views</div>
            </div>

            <div className="iconBx_dash">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
          </div>

          <div className="card_dash">
            <div>
              <div className="numbers_dash">80</div>
              <div className="cardName_dash">Sales</div>
            </div>

            <div className="iconBx_dash">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
          </div>

          <div className="card_dash">
            <div>
              <div className="numbers_dash">284</div>
              <div className="cardName_dash">Comments</div>
            </div>

            <div className="iconBx_dash">
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </div>
          </div>

          <div className="card_dash">
            <div>
              <div className="numbers_dash">$7,842</div>
              <div className="cardName_dash">Earning</div>
            </div>

            <div className="iconBx_dash">
              <ion-icon name="cash-outline"></ion-icon>
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="details_dash">
          <div className="recentOrders_dash">
            <div className="cardHeader_dash">
              <h2>Recent Orders</h2>
              <a href="#" className="btn_dash">View All</a>
            </div>
            <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Price</td>
                  <td>Payment</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash return">Return</span></td>
                </tr>
                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash inProgress">In Progress</span></td>
                </tr>
                <tr>
                  <td>Star Refrigerator</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash delivered">Delivered</span></td>
                </tr>
                <tr>
                  <td>Dell Laptop</td>
                  <td>$110</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Apple Watch</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash return">Return</span></td>
                </tr>
                <tr>
                  <td>Addidas Shoes</td>
                  <td>$620</td>
                  <td>Due</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td>Paid</td>
                  <td>$1200</td>
                  <td><span className="status_dash inProgress">In Progress</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* ================= New Customers ================ */}
          <div className="recentCustomers_dash">
            <div className="cardHeader_dash">
              <h2>Recent Customers</h2>
            </div>
            <table>
              <tbody>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg01} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>Davidx <br /><span>Italy</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg02} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>Amit <br /> <span>India</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg01} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>David <br /> <span>Italy</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg02} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>Amit <br /> <span>India</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg01} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>David <br /> <span>Italy</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg02} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>Amit <br /> <span>India</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg01} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>David <br /> <span>Italy</span></h4>
                  </td>
                </tr>
                <tr>
                  <td width="60px">
                    <div className="imgBx_dash">
                      <img src={customerImg02} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>Amit <br /> <span>India</span></h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        
    </div>
  )
}
