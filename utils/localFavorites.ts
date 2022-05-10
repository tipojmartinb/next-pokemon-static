import { type } from "os";

const toggleFavorites = (id:number)=>{
    console.log('Toggle Favorite llamado');

    let favorites:number[]=JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)){
        favorites= favorites.filter(pokeId=> pokeId!== id);
    }else{
        favorites.push(id);
    }

    localStorage.setItem('favorites',JSON.stringify(favorites))
}

const existInFavorites =(id:number):boolean=>{   
    if (typeof window ==='undefined') return false
    
    let favorites:number[]=JSON.parse(localStorage.getItem('favorites') || '[]');
    
    return favorites.includes(id);
}

const pokemons =():number[]=>{

    let favorites:number[]=JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
}

const exportedFunctions = {toggleFavorites,existInFavorites,pokemons}

export default exportedFunctions;
