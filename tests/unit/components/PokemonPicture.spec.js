import PokemonPicture from "@/components/PokemonPicture.vue";
import { shallowMount } from "@vue/test-utils";


describe('Pokemon Picture', () => {
  test('debe de hacer match con el snapshot', () => {
    const wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:1,
        showPokemon:false
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  })

  test('debe de mostrar la imagen ocula y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:100,
        showPokemon:false
      }
    });

    const [img1,img2] = wrapper.findAll('img');

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    //console.log(img1.classes());
    expect(img1.classes('hidden-pokemon')).toBe(true)

    expect(img1.attributes('src'))
    .toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
  })
  
  test('debe mostrar el pokemon si showPokemon:true', () => {
    const wrapper = shallowMount(PokemonPicture,{
      props:{
        pokemonId:100,
        showPokemon:true
      }
    });

    const img1 = wrapper.find('img');

    expect(img1.exists()).toBeTruthy();
    //console.log(img1.classes());
    expect(img1.classes('fade-in')).toBe(true)
  })
  
  
})
