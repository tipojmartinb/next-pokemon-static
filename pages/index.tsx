import {Grid} from '@nextui-org/react'
import type { NextPage,GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'
import { pokeApi } from './api'



interface Props{
  pokemons: SmallPokemon[]
}

const pokemonData =async(url:string)=>{
  const [,urlApi] = url.split('https://pokeapi.co/api/v2/') 
  const dat = pokeApi.get(`/${urlApi}`)
  return dat
  
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  return (    
      <Layout title={'Listado de Pokemones'}>

        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map((pokemon)=>
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>           
          )}          
        </Grid.Container>
      </Layout>         
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data}= await pokeApi.get<PokemonListResponse>('pokemon?limit=151');
  let promises:any[]=[];
  
  for (let p of data.results){
    promises.push(pokemonData(p.url));
  }

  const results = await Promise.allSettled(promises);
  const pokemons:SmallPokemon[]= results.map((re:any)=>{
    return {
      url:re.value.data.forms[0].url,
      name:re.value.data.forms[0].name,
      id:re.value.data.id,
      img:re.value.data.sprites.other.dream_world.front_default
    }
  })
  
  return {
    props: {
      pokemons:pokemons
    }
  }
}


export default HomePage
