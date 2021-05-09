<template>
        <div class="navigation">
        <div class="inner-container inner--nav">
            <div class="logo">
                <nuxt-link to="/">
                    <img src="/Logo_small.svg" alt="">
                </nuxt-link>
                <img src="/Hamburger.svg" alt="" id="hammobileicon">    
                <img src="/Close.svg" alt="" id="closeicon">                        
            </div>
            <div id="menunav" class="menu">
                <ul>
                    <li>
                        <nuxt-link to="/download">Download App</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/activate">Activate App</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
