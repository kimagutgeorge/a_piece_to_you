<div class="wrapper about">
<?php include("components/response.php");?>
    <div class="nav-bar-wrapper">
    <?php include("components/smallbar.php");?>
        <div class="cover"></div>
        <div class="hero-84">
        <?php include("components/navbar.php");?>
      </div>
      </div>

  <div class="events hero-84 row four-vh">
    <!-- Show items in the cart -->
    <div id="display_cart_body">
      <table id="_tbl" class="cart-table" style="width:100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price <span id="cart_header_currency"></span></th>
            <th>Total <span id="cart_total_header_currency"><span></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="cart_table">
            <!-- feed cart here -->
        </tbody>
      </table>

      <!-- Show total price -->
      <form id="placeOrder">
      <div class="cart-summary four-vh">
        <h3 class="text-primary">Total <span id="cart_currency">(Kshs)</span>: <span class="text-dark fw-bold" id="cart_total"></span></h3>
        <div class="custom-twelve order-details four-vh" v-if="beforeCheckout">
          <div class="custom-twelve">
            <h3 class="text-muted">Please Fill In The Details</h3>
          </div>
          <div class="custom-twelve delivery">
            <div class="form-group">
              <label class="text-muted">Enter Your Name</label>
              <input type="text" name="client_name" class="form-control" placeholder="John Doe" required>
            </div>
            <div class="form-group">
              <label class="text-muted">Enter Your Phone Number</label>
              <input type="number" name="phone" class="form-control" placeholder="0700000000" required>
            </div>
            <div class="form-group">
              <label class="text-muted">Enter Your Email</label>
              <input type="email" name="email" class="form-control" placeholder="someone@example.com" required>
            </div>
            <div class="form-group">
              <label class="text-muted">County/Region</label>
              <select class="form-control" name="county" onfocus='this.size=10;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();' required>
                <option value="" disabled selected>Select a county</option>
                <option value="Baringo">Baringo</option>
                <option value="Bomet">Bomet</option>
                <option value="Bungoma">Bungoma</option>
                <option value="Busia">Busia</option>
                <option value="Elgeyo-marakwet">Elgeyo-Marakwet</option>
                <option value="Embu">Embu</option>
                <option value="Garissa">Garissa</option>
                <option value="Homa-bay">Homa Bay</option>
                <option value="Isiolo">Isiolo</option>
                <option value="Kajiado">Kajiado</option>
                <option value="Kakamega">Kakamega</option>
                <option value="Kericho">Kericho</option>
                <option value="Kiambu">Kiambu</option>
                <option value="Kilifi">Kilifi</option>
                <option value="Kirinyaga">Kirinyaga</option>
                <option value="Kisii">Kisii</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Kitui">Kitui</option>
                <option value="Kwale">Kwale</option>
                <option value="Laikipia">Laikipia</option>
                <option value="Lamu">Lamu</option>
                <option value="Machakos">Machakos</option>
                <option value="Makueni">Makueni</option>
                <option value="Mandera">Mandera</option>
                <option value="Marsabit">Marsabit</option>
                <option value="Meru">Meru</option>
                <option value="Migori">Migori</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Muranga">Murang'a</option>
                <option value="Nairobi">Nairobi</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Nandi">Nandi</option>
                <option value="Narok">Narok</option>
                <option value="Nyamira">Nyamira</option>
                <option value="Nyandarua">Nyandarua</option>
                <option value="Nyeri">Nyeri</option>
                <option value="Samburu">Samburu</option>
                <option value="Siaya">Siaya</option>
                <option value="Taita-taveta">Taita-Taveta</option>
                <option value="Tana-river">Tana River</option>
                <option value="Tharaka-nithi">Tharaka Nithi</option>
                <option value="Trans-nzoia">Trans Nzoia</option>
                <option value="Turkana">Turkana</option>
                <option value="Uasin-gishu">Uasin Gishu</option>
                <option value="Vihiga">Vihiga</option>
                <option value="Wajir">Wajir</option>
                <option value="West-pokot">West Pokot</option>
              </select>
              
            </div>
            <div class="form-group">
              <label class="text-muted">City/Town</label>
              <input type="text" name="town" class="form-control" placeholder="Kilomani" required>
            </div>
          </div>
        </div>
        <button v-if="beforeCheckout" class="btn btn-primary-box btn-primary" @click="checkout">Checkout</button>
        <div class="four-vh">
          <p id="cart_response"></p>
        </div>
      </div>
    </form>
    </div>

    <!-- Show message if cart is empty -->
    <div id="empty_cart">
      <p>Your cart is empty!</p>
    </div>
</div>
</div>