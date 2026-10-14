import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <div className="error-number">404</div>
      <span className="section-label">PAGE NOT FOUND</span>
      <h1>Lost your <span>way?</span></h1>
      <p>
        This page isn't available yet. Let's get you back to the Stackly
        contact page and start a conversation.
      </p>
      <Link to="/contact" className="submit-button">
        Go to Contact Us <span>↗</span>
      </Link>
    </main>
  );
}

export default NotFound;