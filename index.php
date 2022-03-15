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

      <div class="responsive"><ion-icon name="menu"></ion-icon></div>

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
      <div class="msg-container"></div>
      <div class="header-content">
        <!-- <div style="height:12%"></div> -->
        <h1 id="typeArea" style="color:#dddddd;font-family: 'Lato', sans-serif;padding-left:13px;">
          <button class="moreAboutMe">About Me 
            <i id="about-me-double-down" class="fas fa-angle-double-down"></i>
          </button>
          <span class="typed"></span>
        </h1>
        <!--        <p class="liu">designer, developer, photographer</p>-->
        <ul class="list-unstyled list-social">
          <li><a href="https://github.com/lhy2016" target="_blank">
              <ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://www.linkedin.com/in/haoyang-liu-39156a164/" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a id="social-mail-link"><ion-icon name="mail"></ion-icon></a></li>
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
              <li class="filter" data-filter=".react">React</li>
              <li class="filter" data-filter=".php">PHP</li>
              <li class="filter" data-filter=".python">Python</li>
              <li class="filter" data-filter=".java">Java</li>
              <li class="filter" data-filter=".flask">Flask</li>
              <li class="filter" data-filter=".web">Website</li>
              <li class="filter" data-filter=".mobile">Mobile</li>
            </ul>
          </div>



          <div class="portfolio-container">

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all react flask python web">
              <a class="popup-img" style="background-image: url('images/homefinder.jpeg');" href="https://homefinder.haoyangliu.com" target="_blank">
                <div class="hoverText">Home Finder</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all php web">
              <a class="popup-img" style="background-image: url('images/education.jpg');" href="http://otp.whv.mybluehost.me/" target="_blank">
                <div class="hoverText">Learn Education</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all flask python web">
              <a class="popup-img" style="background-image: url('images/stock.jpg');" href="https://invest.haoyangliu.com" target="_blank">
                <div class="hoverText">Invest Assist</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all java">
              <a class="popup-img" style="background-image: url('images/portfolio/4.jpg');" href="https://github.com/lhy2016/WhiteBoard" target="_blank">
                <div class="hoverText">White Board</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all java">
              <a class="popup-img" style="background-image: url('images/Java-logo.jpg');" href="https://github.com/lhy2016/Java-Basic" target="_blank">
                <div class="hoverText">Java Basics</div>
              </a>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-thumbnail all mobile">
              <a class="popup-img" style="background-image: url('images/lock.jpg');" href="https://www.youtube.com/watch?v=H4pr_lUBNPo" target="_blank">
                <div class="hoverText">Smart Lock</div>  
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
                    <textarea class="form-control" name="message" rows="20" cols="50" placeholder="Message" style="height:80px;"></textarea>
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
          <li><a href="https://github.com/lhy2016"><ion-icon name="logo-github"></ion-icon></a></li>
          <li><a href="https://www.linkedin.com/in/haoyang-liu-39156a164/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
          <li><a><ion-icon name="mail"></ion-icon></a></li>
        </ul>

      </div>
    </div>
  </div>
  <!-- End section footer -->
  <div id="game">
    <div id="gameButton">
      <ion-icon id="gameIcon" name="logo-game-controller-b"></ion-icon>
    </div>
  </div>
  <!-- JavaScript Libraries -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/jquery/jquery-migrate.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="lib/typed/typed.js"></script>
  <script src="lib/bgSwitcher/bgswitcher.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/magnific-popup/magnific-popup.min.js"></script>
  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <!-- Contact Form JavaScript File -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>
  <script src="https://kit.fontawesome.com/5511ce970b.js"></script>
  <!-- Template Main Javascript File -->
  <script src="js/main.js"></script>
  <script src="js/progressBar.js"></script>
  <script src="js/validate.js"></script>
  <script src="js/game.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule="" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"></script>
</body>

</html>
