import PokemonPageVue from "@/pages/PokemonPage.vue"
import { shallowMount, mount } from "@vue/test-utils"
import { pokemons } from "../mocks/pokemon.mock";

describe('Pokemon Page', () => {

    let wrapper = null;

    beforeEach(()=>{
        wrapper = shallowMount(PokemonPageVue);
    });

    test('debe de hacer match con el snapshot ', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de llamar mixPokemonArray al montar', () => {
      const mixPokemonArraySpy = jest.spyOn(PokemonPageVue.methods,'mixPokemonArray');
      const wrapper = shallowMount(PokemonPageVue);
      expect(mixPokemonArraySpy).toHaveBeenCalled();
    })
    
    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPageVue,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:""
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })
    
    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPageVue,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:""
                }
            }
        });


        const picture = wrapper.find('pokemon-picture-stub');
        const options = wrapper.find('pokemon-options-stub');

        expect(picture.exists()).toBeTruthy();
        expect(options.exists()).toBeTruthy();

        expect(picture.attributes('pokemonid')).toBe("1");
        expect(options.attributes('pokemons')).toBeTruthy();
        
    })


    test('pruebas con checkAnswer', async() => {
        const wrapper = shallowMount(PokemonPageVue,{
            data(){
                return{
                    pokemonArr:pokemons,
                    pokemon:pokemons[0],
                    showPokemon:false,
                    showAnswer:false,
                    message:""
                }
            }
        });

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBe(true);
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`);

        await wrapper.vm.checkAnswer(3);
        expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`);
    })
    
    
    
})
