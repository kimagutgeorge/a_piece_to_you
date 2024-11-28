<div class="wrapper about">
    <div class="nav-bar-wrapper">
    <?php include("components/smallbar.php");?>
        <div class="cover"></div>
        <div class="hero-84">
        <?php include("components/navbar.php");?>
      </div>
      </div>

  <div class="events hero-84 row four-vh">
    <!-- Show items in the cart -->
    <div v-if="cartItems.length > 0">
      <table id="_tbl" class="cart-table" style="width:100%">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>
              <img :src="require(`../../assets/images/bg/products/${item.product_image}`)" alt="" class="cart-image" />
              <p class="text-muted" style="margin-top:10px !important">{{ item.product_name }}</p>
            </td>
            <td>
              <div class="quantity-control">
                <div class="quantity-side">
                <span>{{ item.quantity }}</span>
              </div>
              <div class="control-side">
                <button class="btn btn-primary-box btn-primary" @click="updateQuantity(item.product_id, 'increase')">
                  <i class="fa-solid fa-angle-up"></i>
                </button>
                <button class="btn btn-primary-box btn-primary" @click="updateQuantity(item.product_id, 'decrease')">
                  <i class="fa-solid fa-angle-down"></i>
                </button>
              </div>
              </div>
            </td>
            <td>{{ item.product_price }}</td>
            <td>{{ item.product_price * item.quantity }}</td>
            <td>
              <i class="fa-solid fa-close bg-danger text-white" @click="removeFromCart(item.product_id)">
                
              </i>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Show total price -->
      <div class="cart-summary four-vh">
        <h3 class="text-primary">Total (Kshs): <span class="text-dark fw-bold">{{ totalPrice }}</span></h3>
        <div class="col-12 order-details four-vh" v-if="beforeCheckout">
          <div class="col-12">
            <h3 class="text-muted">Please Fill In The Details</h3>
          </div>
          <div class="col-12 delivery">
            <div class="form-group">
              <label class="text-muted">Enter Your Name</label>
              <input type="text" v-model="client_name" class="form-control" placeholder="John Doe">
            </div>
            <div class="form-group">
              <label class="text-muted">Enter Your Phone Number</label>
              <input type="number" v-model="phone" class="form-control" placeholder="0700000000">
            </div>
            <div class="form-group">
              <label class="text-muted">Enter Your Email</label>
              <input type="text" v-model="email" class="form-control" placeholder="someone@example.com">
            </div>
            <div class="form-group">
              <label class="text-muted">County/Region</label>
              <select class="form-control" v-model="county" onfocus='this.size=10;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();'>
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
              <input type="text" v-model="town" class="form-control" placeholder="Kilomani">
            </div>
          </div>
        </div>
        <button v-if="beforeCheckout" class="btn btn-primary-box btn-primary" @click="checkout">Checkout</button>
        <button v-if="!beforeCheckout" class="btn btn-primary-box btn-primary" @click="nextPage">Next <i class="fa-solid fa-angle-right"></i></button>
        <div class="four-vh">
          <p>{{ response }}</p>
        </div>
      </div>
    </div>

    <!-- Show message if cart is empty -->
    <div v-else>
      <p>Your cart is empty!</p>
    </div>
</div>
</div>