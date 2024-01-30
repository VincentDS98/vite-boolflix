<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data() {
        return {
          store,
        };
    },
    methods: {
      searchbutton(){
      axios
             .get(this.store.Urlfilm,{
              params:{
                api_key:this.store.apiKey,
                query: this.store.search,
              }
             })
             .then((response) => {
                this.store.film = response.data.results;
                this.store.search = ''
                console.log("Film:",this.store.film);
             });
          axios
           .get(this.store.Urlserie,{
            params:{
              api_key:this.store.apiKey,
              query:this.store.search,
            }
           })
           .then((response) => {
            this.store.series = response.data.results;
            this.store.search = ''
            console.log("Serie:",this.store.series);
           });
        } 
      }
    } 
    



</script>

<template>
  <div>
    <header>
        <div class="bg-header">
          <div class="container">
            <div class="header-container">
              <div>
                <h1>
                  Boolfix
                </h1>
              </div>
              
              <div>
                <input v-model="store.search" @keyup.enter="searchbutton" type="text" >
                <button  class="button" type="button" @click="searchbutton">
                  Cerca
                </button>
              </div>
            </div>
          </div>
        </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.bg-header{
  
  height: 150px;
  padding: 20px;
}

.header-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1{
  color: orange;
  font-size: 5em;
}

  



input[type=text] {
  border: 2px solid orange;
 
  background-color: rgb(17, 16, 16);
  padding: 15px;
  margin-right: 10px;
  color: white;
}

.button {
  border: none;
  background-color: black;
  color: orange;
  border: 2px solid orange;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 10px ;
  
  cursor: pointer;
}


</style>