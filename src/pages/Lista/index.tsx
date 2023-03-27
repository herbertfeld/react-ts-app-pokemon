import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Busca } from "./components/Busca";
import * as Dialog from "@radix-ui/react-dialog";
import { ListContainer, ListTable, DialogRoot, DialogTrigger } from "./styles";
import { ModalDesContainer } from "../../components/ModalDescription";
import { ListaContext } from "../../contexts/ListaContext";




export function Lista() {
  const { listaPokemon } = useContext(ListaContext);
  const { nextPokemon } = useContext(ListaContext);
  const { previewPokemon } = useContext(ListaContext);
  return (
    <div>
      <Header />
      <ListContainer>
        <Busca />
        <ListTable>
          <tbody>
            {listaPokemon.map(listaPokemon => {
              return (
                <tr key={listaPokemon.name}>
                  <td width="50%">{listaPokemon.name}</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td>
                    <DialogRoot>
                      <Dialog.Trigger>
                        <button>Ver</button>
                      </Dialog.Trigger>
                      <ModalDesContainer name={listaPokemon.name}>
                      </ModalDesContainer>
                    </DialogRoot>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </ListTable >
        <div>
          <button className="preview" type="button" value={previewPokemon} disabled >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          </button>
          <button className="next" type="button" value={nextPokemon}>
            <svg viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
            </svg>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;</span>
          </button>
        </div>
      </ListContainer >
      <br />
      <br />
      <br />
      <br />
    </div >
  )
}