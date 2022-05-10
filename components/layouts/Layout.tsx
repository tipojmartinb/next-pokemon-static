import Head from "next/head"

import { FC, PropsWithChildren, Fragment, ReactNode } from 'react';
import { Navbar } from "../ui";

interface Props {    
    title?:string   
}

export const Layout:FC<PropsWithChildren<Props>> = ({children,title})=> {
    const origin = (typeof window ==='undefined')?'':window.location.origin
    console.log(origin)
    return(        
        <Fragment>
            <Head>  
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="Juan Martin"/>
                <meta name="description" content={`Informacion sobre el Pokemon ${title} `}/>
                <meta name="keywords" content={`${title}. pokemon, pokedex`}/>

                <meta property="og:title" content={`Información sobre ${title} `} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            {<Navbar/>}

            <main style={{
                padding:"0px 20px"
            }}>
                {children}
            </main>
        </Fragment>
    )
}