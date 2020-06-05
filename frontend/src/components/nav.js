import React from "react";

function Nav(props) {
  return (
    <React.Fragment>
      <nav class="navigation">
        <div class="flexbox">
          <div class="flexbox-logo">
            <img class="flexbox-logo--img" src="img/logo.png" alt="icon" />
            <h1 class="flexbox-logo--type heading">E-Commerce</h1>
          </div>

          <form action="#" class="search">
            <input type="text" class="search-input" placeholder="Search" />
            <button class="search-button"></button>
          </form>
          <form action="#">
            <button class="button">Sing In</button>
            <button class="button">Register</button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Nav;
