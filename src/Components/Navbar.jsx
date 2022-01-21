import PropTypes from "prop-types";

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
          <a class="navbar-brand" href="{{ url('/') }}">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="{{ __('Toggle navigation') }}"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto"></ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="{{ route('login') }}">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{ route('register') }}">
                  Bases
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="{{ route('contacts.index') }}">
                  Contact Us
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="{{ route('logout') }}">
                    Log
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
