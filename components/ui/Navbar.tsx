import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link  from "next/link";
import { Link as NextUILink } from '@nextui-org/react';



export const Navbar = () => {
    const {theme} = useTheme();
  return (
      <div style={{
          display:"flex",
          width:'100%',
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"start",
          padding:'0px 20px',
          backgroundColor:theme?.colors.gray900.value
      }}>
          <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
                />
    
            <Link href="/" passHref >
                < NextUILink>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </NextUILink>                
            </Link>              

          <Spacer css={{flex:1}}/>

            <Link href='/favorites' passHref>
                <NextUILink>
                    <Text color="white">Favoritos</Text>
                </NextUILink>              
            </Link>          
      </div>    
  )
}
