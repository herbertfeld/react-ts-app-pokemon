import { createContext, ReactNode, useEffect, useState } from "react";

interface ListPokekmons {
  id: number;
  name: string;

}

interface NextPokekmons {
  next: string;

}
interface PreviewPokekmons {
  previous: string;
}

interface PokemonContextType {
  listaPokemon: ListPokekmons[];
  nextPokemon: NextPokekmons[];
  previewPokemon: PreviewPokekmons[];
  loadList: (query?: string) => Promise<void>
}

interface ListaPokemonsProviderProps {
  children: ReactNode;
}

export const ListaContext = createContext({} as PokemonContextType);

export function ListaPokemonsProvider({ children }: ListaPokemonsProviderProps) {

  const [listaPokemon, setListaPokemon] = useState<ListPokekmons[]>([])

  const [nextPokemon, setNextPokemon] = useState<NextPokekmons[]>([])
  const [previewPokemon, setPreviewPokemon] = useState<PreviewPokekmons[]>([])

  const ClickedNext = (event: React.MouseEvent<HTMLButtonElement>) => {

  }
  const ClickedPreview = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  async function loadList(query?: string) {
    const url = new URL('http://localhost:3001/api/pokelista/')
    if (query) {
      url.searchParams.append('name', query);
    }
    const response = await fetch(url)
    const data = await response.json();

    setListaPokemon(data.results)
    setNextPokemon(data.next)
    setPreviewPokemon(data.preview)
  }
  useEffect(() => {
    loadList()
  }, [])

  return (
    <ListaContext.Provider
      value={{ listaPokemon, nextPokemon, previewPokemon, loadList }}

    >
      {children}
    </ListaContext.Provider>
  )
}