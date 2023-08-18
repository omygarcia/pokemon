import PokemonPictureVue from "@/components/PokemonPicture.vue";
import { shallowMount } from "@vue/test-utils";


describe('Pokemon Picture', () => {
  test('debe de mostrar el componente de la imagen', () => {
    let wrapper = shallowMount(PokemonPictureVue);
    expect(wrapper.html()).toMatchSnapshot();
  })
  
})
