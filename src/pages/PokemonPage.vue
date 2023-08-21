<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h4>¿Quién es este pokémon?</h4>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />
        <template v-if="showAnswer">
            <h2 class="fade-in">{{message}}</h2>
            <button @click="newGame">Juego nuevo</button>
        </template>
    </div>
</template>

<script>
    import PokemonOptions from '@/components/PokemonOptions';
    import PokemonPicture from '@/components/PokemonPicture';
    import getPokemonOptions from '@/helpers/getPokemonOptions';

    //console.log(getPokemonOptions());

    export default{
        components:{
            PokemonOptions,
            PokemonPicture
        },
        data(){
            return{
                pokemonArr:[],
                pokemon:null,
                showPokemon:false,
                showAnswer:false,
                message:""
            }
        },
        methods:{
            async mixPokemonArray(){
                this.pokemonArr = await getPokemonOptions();
                //console.log(this.pokemonArr);
                const rndInt = Math.floor(Math.random()*4);
                //console.log('rndInt',rndInt);
                this.pokemon = this.pokemonArr[rndInt];
                console.log(this.pokemon);
            },
            checkAnswer(selectedId){
                console.log('pokemon llamado desde evento',selectedId);
                this.showPokemon = true;
                this.showAnswer = true;

                if(selectedId == this.pokemon.id)
                {
                    this.message = `Correcto, ${this.pokemon.name}`;
                }else{
                    this.message = `Oops, era ${this.pokemon.name}`;
                }
            },
            newGame()
            {
                this.pokemon = null;
                this.showPokemon = false;
                this.showAnswer = false;
                this.message = "";
                this.pokemonArr = [];
                this.mixPokemonArray();
            }
        },
        mounted(){
            //console.log('mounted');
            this.mixPokemonArray();
        }
    }
</script>

<style scoped>

</style>