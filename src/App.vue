<template>
  <v-app>
    <!-- Navigation Bar -->
      <v-app-bar app height="200">
        
      <v-container class="text-center">
        <v-header>
          
        </v-header>
        <!-- Logo with separator -->
        <v-img src="/logo.png" alt="Logo" class="mr-2" max-height="60" contain></v-img>
        <v-divider class="custom-divider" horizontal></v-divider>
        <v-app-bar-title style="font-weight: 800;">twopercent</v-app-bar-title>
        <v-spacer></v-spacer>
        <hr>
        <!-- Navigation buttons for larger screens -->
        <v-btn style="margin-left:-60px; font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('home')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-home</v-icon> Home
        </v-btn>
        <v-btn style="margin:12px;font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('about')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-information</v-icon> About
        </v-btn>
        <v-btn style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('Outlier_Capital')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-chart-bar</v-icon> Outlier Capital
        </v-btn>
        <v-btn style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('TheatreofScale')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-theater</v-icon> Theatre of Scale
        </v-btn>
        <v-btn  style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('ShortTermFinancing')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-cash</v-icon> Short Term Financing
        </v-btn>
        <v-btn style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('PartnerWithUs')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-handshake</v-icon> Partner With Us
        </v-btn>
        <!-- Button to open the sidebar on small screens -->
        <v-btn style="font-weight: 500;" icon @click="sidebar = !sidebar" class="hidden-md-and-up">
          <v-icon size="16">mdi-menu</v-icon>
        </v-btn>
        <v-btn style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;" @click="navigateTo('contact')" class="hidden-sm-and-down">
          <v-icon size="16">mdi-email</v-icon> Contact
        </v-btn>
      </v-container>
    </v-app-bar>
    <!-- Sidebar for small screens -->
    <v-navigation-drawer v-model="sidebar" app class="sidebar-drawer">
    <v-list>
      <v-list-item-group>
        <v-list-item @click="navigateTo('home')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">Home</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('about')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">About</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('contact')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16" >mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">Contact</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('Outlier_Capital')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">Outlier Capital</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('TheatreofScale')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-theater</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;"> Theatre of Scale</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('ShortTermFinancing')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-cash</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">Short Term Financing</v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigateTo('PartnerWithUs')" class="sidebar-item">
          <v-list-item-icon>
            <v-icon size="16">mdi-handshake</v-icon>
          </v-list-item-icon>
          <v-list-item-content  style="font-weight: 500;font-family: 'poppins';text-transform: lowercase;">Partner With Us</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
    <!-- Main Content -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <section>
    <div class="newsletter-subscribe">
        <div class="container">
            <div class="intro">
                <h2 class="text-center" style="	color:white;font-size: 18px;font-weight: 500;">Subscribe for our Newsletter</h2>
                <p class="text-center" style="	color:white;font-size: 14px;font-weight: 500;">Sign up to receive the latest product news, alerts and industry news.</p>
            </div>
            <form class="form-inline" method="post">
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email"></div>
                <br>
                <div class="form-group"><button class="btn " type="submit" style="background: gold; border-radius: 0 20px;font-weight: 400;">Subscribe </button></div>
            </form>
        </div>
    </div>
   
    </section>
    <!-- Footer -->
   <!-- Footer -->
<footer
        class="text-center text-lg-start text-white"
        style="background-color: #1c2331"
        >
  <!-- Section: Social media -->
  
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 style="	color:white;font-size: 14px;font-weight: 800;">twopercent</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
            
            <v-img src="/logo.png" alt="Logo" class="down-logo" max-height="60" contain></v-img>

        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2  mx-auto mb-4">
          <!-- Links -->
          <h6 style="color:white;font-size: 14px;font-weight: 800;">Services</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p>
            <a href="#!" class="text-white" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">Outlier Capital</a>
          </p>
          <p>
            <a href="#!" class="text-white" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">Theatre of Scale</a>
          </p>
          <p>
            <a href="#!" class="text-white" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">Short Term Financing</a>
          </p>
          
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 style="color:white;font-size: 14px;font-weight: 800; text-decoration:none">Useful links</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
          <p>
            <a href="#!" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">Home</a>
          </p>
          <p>
            <a href="#!" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">About us</a>
          </p>
          <p>
            <a href="#!" style="color:white;font-size: 14px;font-weight: 400; text-decoration:none">Contact</a>
          </p>
        
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 style="color:white;font-size: 14px;font-weight: 800; text-decoration:none">Contact</h6>
          <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p style="color:white;font-size: 14px;font-weight: 400; text-decoration:none"><i class="mdi mdi-home mr-3"></i>Ole Sangale Road, off Langata Road</p>
              <p style="color:white;font-size: 14px;font-weight: 400; text-decoration:none"><i class="mdi mdi-home mr-3"></i>Madaraka Estate, Nairobi, Kenya</p>
              <p style="color:white;font-size: 14px;font-weight: 400; text-decoration:none"><i class="mdi mdi-email mr-3"></i>info@twopercent.co.ke</p>
              <p style="color:white;font-size: 14px;font-weight: 400; text-decoration:none"><i class="mdi mdi-phone mr-3"></i> +254110711373</p>

        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->
  <section
           class="d-flex justify-content-between p-4"
           style="background-color:white"
           >
    <!-- Left -->
    <div class="me-5" style="color:black;font-size: 14px;font-weight: 400; text-decoration:none">
      <span>Get connected with us on social networks:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div >
  <a href="#" class="text-white me-4">
    <v-icon style="color:black" class="mdi mdi-facebook"></v-icon>
  </a>
  <a href="#" class="text-white me-4">
    <v-icon style="color:black" class="mdi mdi-twitter"></v-icon>
  </a>
 
  <a href="#" class="text-white me-4">
    <v-icon style="color:black" class="mdi mdi-instagram"></v-icon>
  </a>
  <a href="#" class="text-white me-4">
    <v-icon  style="color:black"  class="mdi mdi-linkedin"></v-icon>
  </a>
 
</div>

    <!-- Right -->
  </section>
  <!-- Copyright -->
  <div
       class="text-center p-3"
       style="background-color: rgba(0, 0, 0, 0.2)"
       >
    © 2023 Copyright:
    <a class="text-white" href="" style="color:black;font-size: 14px;font-weight: 400; text-decoration:none"
       >Two Percent Venture Firm</a
      >
      <p style="color:white;font-size: 14px;font-weight: 500; text-decoration:none">Created and Developed by Beninbits</p>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->

  </v-app>
</template>

<style>

.sidebar-drawer {
  background-color: #282c34; /* Change to your desired background color */
}

.sidebar-item {
  font-weight: 800;
  color: white; /* Change to your desired text color */
}

.sidebar-item:hover {
  background-color: #3d4451; /* Change to your desired hover color */
}
.newsletter-subscribe {
  color:#313437;
  padding:50px 0;
  background:#313437;
  border-radius: 180px 180px 0px 0px;
}

.newsletter-subscribe p {
  color:#7d8285;
  line-height:1.5;
}

.newsletter-subscribe h2 {
  font-size:24px;
  font-weight:bold;
  margin-bottom:25px;
  line-height:1.5;
  padding-top:0;
  margin-top:0;
  color:inherit;
}

.newsletter-subscribe .intro {
  font-size:16px;
  max-width:500px;
  margin:0 auto 25px;
}

.newsletter-subscribe .intro p {
  margin-bottom:35px;
}

.newsletter-subscribe form {
  justify-content:center;
}

.newsletter-subscribe form .form-control {
  background:#eff1f4;
  border:none;
  border-radius:3px;
  box-shadow:none;
  outline:none;
  color:inherit;
  text-indent:9px;
  height:45px;
  margin-right:10px;
  min-width:250px;
}

.newsletter-subscribe form .btn {
  padding:16px 32px;
  border:none;
  background:none;
  box-shadow:none;
  text-shadow:none;
  opacity:0.9;
  text-transform:uppercase;
  font-weight:bold;
  font-size:13px;
  letter-spacing:0.4px;
  line-height:1;
}

.newsletter-subscribe form .btn:hover {
  opacity:1;
}

.newsletter-subscribe form .btn:active {
  transform:translateY(1px);
}

.newsletter-subscribe form .btn-primary {
  background-color:#055ada !important;
  color:#fff;
  outline:none !important;
}


.down-logo{
  margin-left:-82px;
} 
.header-info {
  font-size: 14px;
  color:black; /* Adjust color as needed */
  display: flex;
	align-items: center;
	padding-left: 20px;
  background: gold;
}



.custom-divider {
  width: 2px;
  height: 40px; /* Adjust height as needed */
  background-color: black;
  margin: 0 5px;
}
p{
  font-size: 19px;
  text-decoration: none;

}
@media (max-width: 880px) {
  .down-logo{
  margin-left:0px;
}
.newsletter-subscribe {
  color:#313437;
  padding:50px 0;
  background:#313437;
  border-radius: 18px 18px 0px 0px;
}
}


</style>

<script>
export default {
  data() {
    return {
      sidebar: false,
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
      this.sidebar = false; // Close the sidebar on navigation
    },
  },
};
</script>
