<template>
    <div class="navbar">
        <ul>
            <a href="#/app1">
                <li>
                    App 1 (React)
                </li>
            </a>
            <a href="#/app2">
                <li>
                    App 2 (Angular 6)
                </li>
            </a>
            <a href="#/app3">
                <li>
                    App 3 (Angular 1)
                </li>
            </a>

        </ul>
         <img class="logo" src="../assets/logo.png">
    </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.navbar {
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #116466;
    color: white;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    overflow: hidden;
}

.navbar ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    height: 100%;
}

.navbar li:hover {
    background-color: #d1e8e2;
}

.navbar li {
    padding-top: 14px;
    padding-bottom: -14px;
    padding-left: 10px;
    padding-right: 10px;
    height: 100%;
}

.navbar li:hover {
    color: black;
}

.navbar a {
    height: 100%;
    text-decoration: none;
    color: white;
}

.logo {
    height: 60px;
    position: absolute;
    top: 0;
    right: 25px;
}
</style>
