import * as Dialog from '@radix-ui/react-dialog';
import { Children, useEffect, useState } from 'react';
import { Overlay, Content, CloseButton } from "./styles";
//import { Lista } from './../../pages/Lista'

interface atributosPokemon {
  front_default: string;
}
interface abilityPokemon {
  name: string;
}

export function ModalDesContainer(props: any) {
  const [detalhesPokemon, setDetalhesPokemons] = useState<atributosPokemon[]>([]);
  const [abilityPokemon, setAbilityPokemons] = useState<abilityPokemon[]>([]);

  async function loadImage() {
    const responseImage = await fetch('http://localhost:3001/api/pokemon/img/' + props.name)
    const dataImage = await responseImage.json();
    setDetalhesPokemons(dataImage)

  }

  async function loadAbility() {
    const responseAbility = await fetch('http://localhost:3001/api/pokemon/ability/' + props.name)
    const dataAbility = await responseAbility.json();
    setAbilityPokemons(dataAbility)

  }

  useEffect(() => {
    loadImage(),
      loadAbility()
  }, [])


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>{props.name}</Dialog.Title>
        <Dialog.Description>
          <form >
            <br />
            <img src={detalhesPokemon.front_default}></img>
            <br />
            <br />
            <h3>Main skill</h3>
            <span>{abilityPokemon.name}</span>
            <br />
            <button type="submit">Capturar</button>
          </form>
        </Dialog.Description>
        <CloseButton>X</CloseButton>
      </Content>
    </Dialog.Portal>
  )
}