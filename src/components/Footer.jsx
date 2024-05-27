// import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = (props) => {
    let emailHref = `mailto: ${props.email}`;
  return (
    <footer className="bg-dark text-light py-5 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dignissim convallis est. Quisque aliquam.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light">Home</a></li>
              <li><a href="#" className="text-light">About</a></li>
              <li><a href="#" className="text-light">Services</a></li>
              <li><a href="#" className="text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              {props.addr1}<br />
              {props.addr2}<br />
              <a href={emailHref} className="text-light">{props.email}</a><br />
              {props.phone}
            </address>
            <div className="d-flex">
              <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin fa-2x"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; {props.year} {props.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
