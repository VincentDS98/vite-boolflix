<script>
import { store } from '../store';
import axios from 'axios';



export default {
    data() {
        return {
          store,
          flags: ["it","en","fr","de","es"],
        };
        
    },
    
    methods: {
    
    changeimgflag(lang){
      if(lang=='en'){
        return 'GB';
      }else if(lang=='ja'){
        return 'JP';
      }else{
        return lang.toUpperCase();
      }
      
    },
    Film(img){
      let linkImg = 'http://image.tmdb.org/t/p/w342/';
      linkImg += img;
      return linkImg;
    }

    }
}
</script>

<template>

  
  <div class="container">
    <div class="contenuto" > 
      <div class="card" v-for="(film,index) in store.film" key="index"> 
        <div class="top-card">
          <div >
            <img :src="`http://image.tmdb.org/t/p/${Film(movie.poster_path)}`" alt="">
          </div>
        </div>   
        <div class="info-card">
          <h2>
            {{ film.title }}
          </h2>
          <h4 >
            {{ film.original_title }}
          </h4>
          <div class="conteiner-api">
            <img :src="`https://flagsapi.com/${changeimgflag(movie.original_language)}/flat/64.png`">
            

          </div>
          <span>Voto</span>
          <span>
            <i v-for="n in 5" class="fa-star" 
            :class="{ 
            'fa-solid': n <= Math.ceil(film.vote_average / 2), 
            'fa-regular': n > Math.ceil(film.vote_average / 2) 
            }" style="color: #ffff00;">
            </i> 
          </span>
        </div>
      </div>
      
      <div class="card serie" v-for="(serie,index) in store.series" key="index"> 
        <div>
          <div>
            <img :src="`http://image.tmdb.org/t/p/w1920/${Movieimg(serie.poster_path)}`" alt="">
          </div>
        </div>   
        <div class="infomain_card">
          <h2>
            {{ serie.name }}
          </h2>
          <h4 >
            {{ serie.original_name }}
          </h4>
          <div class="conteiner-img-api">
            <img :src="``">
            

          </div>
          
          
        </div>
      </div>   
    </div>
  </div>

</template>

<style lang="scss" scoped>
</style>