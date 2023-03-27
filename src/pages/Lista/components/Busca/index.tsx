import { useForm } from 'react-hook-form'
import { BuscaContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ListaContext } from '../../../../contexts/ListaContext'

const bucaFormSchema = z.object({
  query: z.string()
})

type BuscaInputs = z.infer<typeof bucaFormSchema>;

export function Busca() {
  const { loadList } = useContext(ListaContext)

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<BuscaInputs>({
    resolver: zodResolver(bucaFormSchema),
  })

  async function handleBuscaPokemons(data: BuscaInputs) {
    await loadList(data.query)
  }

  return (
    <BuscaContainer onSubmit={handleSubmit(handleBuscaPokemons)}>
      <input
        type="text" placeholder="Localizar Pokémon"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting} >
        Buscar
      </button>
    </BuscaContainer>
  )
}