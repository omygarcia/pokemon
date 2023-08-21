import PokemonOptionsVue from "@/components/PokemonOptions.vue";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemon.mock";


describe('Pokemon Options', () => {

  let wrapper = null;

  beforeEach(()=>{
    wrapper = shallowMount(PokemonOptionsVue,{
      props:{
        pokemons
      }
    });
  });
  
  test('debe de hacer match con el snapshot', () => {
    //console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  })
  
  test('debe de mostrar las 4 opciones correctamente', () => {
    let li = wrapper.findAll('li');
    
    expect(li.length).toBe(4);
    expect(li[0].text()).toBe('bulbasaur')
    expect(li[1].text()).toBe('ivysaur')
    expect(li[2].text()).toBe('venusaur')
    expect(li[3].text()).toBe('charmander')

  })

  test('debe de emitir "selection" con sus respectivos paámetros al hacer click', () => {
    const [li1,li2,li3,li4] = wrapper.findAll('li');
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    console.log(wrapper.emitted('selectionPokemon'));

    expect(wrapper.emitted('selectionPokemon').length).toBeGreaterThanOrEqual(1);
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1]);
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2]);
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3]);
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4]);
  })
  
  
})
