import getPokemonOptions, {getPokemons, getPokemonsNames} from "@/helpers/getPokemonOptions";


describe('getPokemonOptions helpers', () => {
  test('debe regresar un arreglo de numeros', () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[499]).toBe(500);
    expect(pokemons[649]).toBe(650);
  })
  
  test('debe retornar un arreglo de 4 elementos con nombres de pokemons', async() => {
    
    const pokemons = await getPokemonsNames([1,2,3,4]);
    //console.log(pokemons);
    expect(pokemons).toStrictEqual([
        { name: 'bulbasaur', id: 1 },
        { name: 'ivysaur', id: 2 },
        { name: 'venusaur', id: 3 },
        { name: 'charmander', id: 4 }
      ]);
  })

  test('getPokemonsOptions debe retornar un arreglo mezclado', async() => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) },
        { name: expect.any(String), id: expect.any(Number) }
      ]);
  })
  
  
})
