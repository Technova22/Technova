class Footer extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback(){
        this.innerHTML=`
        <link rel="stylesheet" href="../styles/footer.css">
        
        <div class="footer pt-5 " >
        <div class="container">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div class="footer_section">
                <h4>Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Docs</a></li>
                  <li><a href="#">Examples</a></li>
                  <li><a href="#">Icons</a></li>
                  <li><a href="#">Themes</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Swag Store</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div class="footer_section">
                <h4>Guides</h4>
                <ul>
                  <li><a href="#">Getting started</a></li>
                  <li><a href="#">Starter template</a></li>
                  <li><a href="#">Webpack</a></li>
                  <li><a href="#">Parcel</a></li>
                  <li><a href="#">Vite</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mb-2">
              <div class="footer_section">
                <h4>Projects</h4>
                <ul>
                  <li><a href="#">Bootstrap 5</a></li>
                  <li><a href="#">Bootstrap 4</a></li>
                  <li><a href="#">Icons</a></li>
                  <li><a href="#">RFS</a></li>
                  <li><a href="#">npm starter</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-12 col-lg-3 mb-2">
              <div class="row">
                <div
                  class="col-sm-12 col-md-6 col-lg-12 footer_section footer_section_contact"
                >
                  <h4>Contact Us</h4>
                  <div class="search">
                    <form action="#" class="subscribe">
                      <input
                        type="email"
                        class="contact_input"
                        placeholder="E-mail address"
                      />
                      <button type="submit" class="submit_button">
                        <i class="fa fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-12 social_media">
                  <h4>Follow Up</h4>
                  <ul>
                    <li>
                      <a href=""><i class="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href=""><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fab fa-google-plus-g"></i></a>
                    </li>
                    <li>
                      <a href=""><i class="fab fa-instagram"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    }
  }
  
  customElements.define('footer-component', Footer);