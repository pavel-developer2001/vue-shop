<template lang="">
  <div class="navbar">
    <strong class="navbar__logo"
      ><router-link to="/">vue-shop</router-link></strong
    >
    <div class="navbar__search">
      <svg
        width="18"
        class="search-logo"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
          fill="black"
        />
      </svg>
      <input class="search-input" placeholder="Поиск..." />
    </div>
    <span class="navbar__cart">
      <router-link to="/cart">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 20C6.125 20 5.0125 21.125 5.0125 22.5C5.0125 23.875 6.125 25 7.5 25C8.875 25 10 23.875 10 22.5C10 21.125 8.875 20 7.5 20ZM0 0V2.5H2.5L7 11.9875L5.3125 15.05C5.1125 15.4 5 15.8125 5 16.25C5 17.625 6.125 18.75 7.5 18.75H22.5V16.25H8.025C7.85 16.25 7.7125 16.1125 7.7125 15.9375L7.75 15.7875L8.875 13.75H18.1875C19.125 13.75 19.95 13.2375 20.375 12.4625L24.85 4.35C24.95 4.175 25 3.9625 25 3.75C25 3.0625 24.4375 2.5 23.75 2.5H5.2625L4.0875 0H0ZM20 20C18.625 20 17.5125 21.125 17.5125 22.5C17.5125 23.875 18.625 25 20 25C21.375 25 22.5 23.875 22.5 22.5C22.5 21.125 21.375 20 20 20Z"
            fill="#F2F2F2"
          />
        </svg>
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  background-color: #2f80ed;
  display: flex;
  padding: 10px 20px;
}
.navbar__logo {
  padding-right: 15%;
}
.navbar__logo a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
}
.search-input {
  border: none;
  border-radius: 8px;
  width: 350px;
  padding: 7px 24px;
}
.search-input:focus {
  outline: none;
}
.navbar__search {
  position: relative;
}
.search-logo {
  position: absolute;
  top: 17%;
  left: 1%;
}
.navbar__cart {
  padding-left: 35%;
}
@media (max-width: 1085px) {
  .navbar__cart {
    padding-left: 20%;
  }
}
@media (max-width: 845px) {
  .search-input {
    max-width: 250px;
  }
}
@media (max-width: 685px) {
  .search-input {
    max-width: 200px;
  }
  .navbar__cart {
    padding-left: 10%;
  }
}
@media (max-width: 540px) {
  .navbar__logo {
    padding-right: 5%;
  }
  .navbar__cart {
    padding-left: 5%;
  }
}
@media (max-width: 455px) {
  .search-input {
    max-width: 150px;
  }
  .navbar__logo a {
    font-size: 20px;
  }
}
@media (max-width: 375px) {
  .search-input {
    max-width: 100px;
  }
}
</style>
