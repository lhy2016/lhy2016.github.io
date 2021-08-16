<?php 
  session_start(); 
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- meta -->
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Welcome - Haoyang's Personal Site</title>
  <meta content="haoyang, haoyang liu, software engineer, lhy920104, personal site, portfolio" name="keywords">
  <meta content="Haoyang's personal site" name="description">

  <!-- Dependencies -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet">
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="lib/magnific-popup/magnific-popup.css" rel="stylesheet">
  <link href="lib/hover/hover.min.css" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Bilbo Swash Caps' rel='stylesheet'>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap" rel="stylesheet">
  <!-- Main Stylesheet File -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/main.css" rel="stylesheet">

  <!-- Responsive css -->
  <link href="css/responsive.css" rel="stylesheet">

  <!-- Favicon -->
  <link rel="shortcut icon" href="images/favicon.png">
  <script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule="" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"></script>
</head>

<body>

  <!-- start section navbar -->
  <nav id="main-nav">
    <!-- <div class="row"> -->
    <div class="container">

      <div class="logo">
        <a href="index.php">
          <!-- &ltHL &#8260&gt -->
          <img src="images/logo1.jpg" alt="logo">
        </a>
      </div>

      <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>

      <ul class="nav-menu list-unstyled">
        <li><a href="#header" class="smoothScroll">Home</a></li>
        <li><a href="#about" class="smoothScroll">About</a></li>
        <li><a href="#resume" class="smoothScroll">Resume</a></li>
        <li><a href="#portfolio" class="smoothScroll">Projects</a></li>
        <li><a href="#contact" class="smoothScroll">Contact</a></li>
      </ul>

    </div>
    <!-- </div> -->
  </nav>
  <!-- End section navbar -->


  <!-- start section header -->
  <div id="header" class="home">

    <div class="container" id="main-panel" style="position:relative">
      <div class="header-content">
        <div style="height:12%"></div>
        <h1 id="typeArea" style="color:#dddddd;font-family: 'Lato', sans-serif;">
          <button class="moreAboutMe">About Me </button>
          <span class="typed"></span>
        </h1>
        <!--        <p class="liu">designer, developer, photographer</p>-->
        <ul class="list-unstyled list-social">
          <li><a href="https://www.facebook.com/profile.php?id=100004179810966" target="_blank">
              <i class="ion-social-facebook"></i></a></li>
          <li><a href="https://github.com/lhy2016" target="_blank">
              <i class="ion-social-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/haoyang-liu-39156a164/" target="_blank">
              <i class="ion-social-linkedin"></i></a></li>
          <li><a href="#"><i class="ion-ios-email"></i></a></li>
        </ul>
      </div>
      <div id="heart-tag">
        <ion-icon id="heart-icon" name="heart-empty"></ion-icon>
        <div id="icon-text">Like it?</div>
      </div>
      <div id="hover-content"></div>
    </div>
    <div id="arrow-back" onclick="">
      <ion-icon name="ios-arrow-back"></ion-icon>
    </div>
    <div id="arrow-forward" onclick="">
      <ion-icon name="ios-arrow-forward"></ion-icon>
    </div>
  </div>
  <!-- End section header -->


  <!-- start section about us -->
  <div id="about" class="paddsection">
    <div class="container">
      <div class="row justify-content-between">

        <div class="col-lg-4 col-md-4">
          <div class="div-img-bg">
            <div class="about-img">
              <img src="images/me.jpg" class="img-responsive" alt="me">
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="about-descr">
            <p class="p-heading">I'm a software engineer focusing on web development using Spring,
              Flask/Django, PHP and React.js. I'm actively looking for a software development position.
            </p>
            <p class="separator">I always believe that interest should be the best motivation no matter what
              I do. Programming is one of such things that I really have passion on because the knowledge
              and the skills I put in will eventually become the product I imagined. This process always
              brings satisfaction. As an entry-level engineer, I'm making effort on continuously learning new
              stuff.</p>
          </div>

        </div>
      </div>
    </div>

    <div id="services">
      <div class="container">
        <div class="services-carousel owl-theme">
        </div>
      </div>
    </div>
  </div>
  <!-- end section about us -->


  <!-- start section services -->

  <!-- end section services -->
  <div id="resume" class="text-center paddsection">

    <div class="container">
      <div class="section-title text-center">
        <h2>My Resume</h2>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4">
              <div class="button_cont" align="center"><a class="resButton" href="./file/Resume.pdf" target="_blank" rel="nofollow noopener">Open <i style="margin-left:3px" class="fas fa-external-link-alt"></i></a></div>
            </div>
            <div class="col-md-4">
              <div class="button_cont" align="center"><a class="resButton" id="showResume">Expend<i style="margin-left:5px" class="fas fa-angle-double-down"></i></a></div>
            </div>
            <div class="col-md-4">
              <div class="button_cont" align="center"><a class="resButton" href="./file/Resume.pdf" target="_blank" download="resume">Download <i class="fas fa-cloud-download-alt"></i></a></div>
            </div>
          </div>
          <iframe id="myResume" src="./file/Resume.pdf" height="0" width="100%" style="border-width: 0px"></iframe>
        </div>
      </div>
    </div>

  </div>
  <!-- start section portfolio -->
  <div id="portfolio" class="text-center paddsection">

    <div class="container">
      <div class="section-title text-center">
        <h2>My Projects</h2>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12">

          <div class="portfolio-list">

            <ul class="nav list-unstyled" id="portfolio-flters">
              <li class="filter filter-active" data-filter=".all">all</li>
              <li class="filter" data-filter=".react">react.js</li>
              <li class="filter" data-filter=".php">PHP</li>
              <li class="filter" data-filter=".jsp">JSP</li>
              <li class="filter" data-filter=".java">Java</li>
              <li class="filter" data-filter=".web">Website</li>
            </ul>

          </div>



          <div class="portfolio-container">

            <div class="col-lg-4 col-md-6 portfolio-thumbnail react" style="display:none;">
              <a class="popup-img" href="images/comingSoon.jpg" target="_blank">
                <img src="images/comingSoon.jpg" alt="img">
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all php web">
              <a class="popup-img" href="http://haoyangliu.com/stock/stock.php" target="_blank">
                <div class="hoverText">Stock Search</div>
                <img src="images/stock.jpg" alt="img">
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all jsp java web">
              <a class="popup-img" href="http://haoyangliu.com:8080/Security" target="_blank">
                <div class="hoverText">InfoSec Blog</div>
                <img src="images/security.jpg" alt="img">
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all java">
              <a class="popup-img" href="https://github.com/lhy2016/WhiteBoard" target="_blank">
                <div class="hoverText">White Board</div>
                <img src="images/portfolio/4.jpg" alt="img">
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all java">
              <a class="popup-img" href="https://github.com/lhy2016/Java-Basic" target="_blank">
                <div class="hoverText">Java Basics</div>
                <img src="images/Java-logo.jpg" alt="img">
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all ">
              <a class="popup-img" href="images/portfolio/6.jpg">
                <img src="images/portfolio/6.jpg" alt="img">
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- End section portfolio -->


  <!-- start sectoion contact -->
  <div id="contact" class="paddsection">
    <div class="container">
      <div class="contact-block1">
        <div class="row">

          <div class="col-lg-6">
            <div class="contact-contact">

              <h2 class="mb-30">CONTACT ME</h2>

              <ul class="contact-details">
                <li><span>Please feel free to ask any questions!</span></li>
              </ul>

            </div>
          </div>

          <div class="col-lg-6">
            <form id="contact-form" onsubmit="return emailValidate(event);" method="POST" role="form" class="contactForm">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group contact-block1">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" />
                    <div class="validation"></div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" />
                    <div class="validation"></div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" />
                    <div class="validation"></div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="12" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <input type="submit" name="contact" class="btn btn-defeault btn-send" value="Send message">
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- start sectoion contact -->


  <!-- start section footer -->
  <div id="footer" class="text-center">
    <div class="container">
      <div class="socials-media text-center">

        <ul class="list-unstyled">
          <li><a href="https://www.facebook.com/profile.php?id=100004179810966">
              <i class="ion-social-facebook"></i></a></li>
          <li><a href="#"><i class="ion-social-github"></i></a></li>
          <li><a href="#"><i class="ion-social-linkedin"></i></a></li>
          <li><a href="#"><i class="ion-ios-email"></i></a></li>
        </ul>

      </div>
    </div>
  </div>
  <?php 
    if(isset($_SESSION["message"])) {
      echo "<Script>alert('". $_SESSION["message"] ."');</Script>";
      unset($_SESSION["message"]);
    }
  ?>
  <!-- End section footer -->

  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/typed/typed.js"></script>
  <script src="lib/bgSwitcher/bgswitcher.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/magnific-popup/magnific-popup.min.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
  <script src="https://kit.fontawesome.com/5511ce970b.js"></script>
  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>
  <script src="js/progressBar.js"></script>
  <script src="js/validate.js"></script>
</body>

</html>
