<template>
<html lang="en">
    <head>       
        <meta charset="UTF-8" />        
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700%display=swap" rel="stylesheet"/>
        

    </head>
    <body>
        <div class="container">
            <header>
                <img               
                src="https://pbs.twimg.com/profile_images/1270181086744674305/wYabbcSq_400x400.jpg"
                class="header__image"           
                />

                
                <form class="buscador" v-on:submit.prevent="guardar_dato">
                    <input
                        v-model= "pagina.busqueda_pagina"
                        id="entrada"
                        aria-label="Qué desea buscar?"
                        type="text"                       
                        placeholder="Qué desea buscar?"                        
                        required
                    />
                    
                    <button id="boton" type="submit" class="fas fa-search icon" aria-label="search"> </button>
                </form>
            </header>
        </div>

        <div class="results">
            <p id="error" class="results__error"></p>
            <div id="results" class="results__items"></div>
        </div>                        
    </body>      
</html>
</template>


<style>

* {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;    
}

body  {
    font-size: 16px;        
}

a {
    color: inherit;
    text-decoration: none;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    margin-top: 3rem;
}

.header__image {
    max-width: 250px;
    width: 200%;
    height: auto;
    align-content: center;
}

.header__title {
    font-family: 'PT Sans', serif;
    font-weight: 500;
    font-size: 2.5rem;
    align-content: center;
}

.buscador{
    position: absolute;
    padding: 5px;
}
.buscador input{
    width: 0px;
    height: 40px;
    padding: 0 20px;
    font-size: 18px;
    color: #000;
    outline: none;
    border: 1px solid silver;
    border-radius: 30px;
    transition: all 0.6s ease;
}

#boton{
    position: absolute;
    top: 0;
    right: 0;
    background: #440080;
    width: 55px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color:white;
    font-size: 20px;
    border-radius: 50%;
    cursor: pointer;
}

.buscador:hover input{
    width: 240px;
}

.buscador input:focus{
    width: 240px;
}


.results {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
}

.results__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.results__error {
    color: #ef0000;
}

.results__item {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    height: 275px;
    margin: 1rem;
    
    width: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    overflow: hidden;
}
.results__item:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.results__item__title {
    font-family: 'PT Sans', serif;
    font-weight: 500;
    margin: 20px;
}
.results__item__intro {
    margin: 0 20px;
    padding-bottom: 20px;
}
</style>



<script>



import axios from 'axios';

//Script que conecta con el backend y guarda las consultas en una base de datos. 
export default {
  name: "guardar",
  data: function(){
      return{
        pagina: {
          busqueda_pagina: "",
        },    
      }
    },

    components:{       
    },
    
    //conexión con el backend (axios).
   
   methods: {   
        guardar_dato: function(){
            axios.post(
                "https://backend-wikipedia-prueba.herokuapp.com/api/",
            this.pagina,
            {headers: {}}
        )      
        .catch((error) => {
            console.log(error)
                alert("ERROR: Se ha presentado un error.");
            });        
        },   
    }
};
 
</script>
