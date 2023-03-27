import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const ListContainer = styled.main`
background-color: white;
width: 100%;
max-width: 1120px;
margin: -1rem auto;
padding: 1rem;
align-items: center;border-radius: 10px;
color: ${props => props.theme['white']};
font-weight: 500;

.preview{
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 1rem;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: "Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 0.875rem;
  text-transform: uppercase;
  min-width: 64px;
  border-radius: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  font-weight: 500;
  line-height: 1.7143;
  letter-spacing: 0.43px;
  padding: 0.4375rem 1.25rem;
  background-color: ${props => props.theme['yellow-300']};

}
.next{
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  outline: 0px;
  border: 0px;
  margin: 1rem;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-family: "Public Sans", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 0.875rem;
  text-transform: uppercase;
  min-width: 64px;
  border-radius: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color: rgb(255, 255, 255);
  font-weight: 500;
  line-height: 1.7143;
  letter-spacing: 0.43px;
  padding: 0.4375rem 1.25rem;
  background-color: ${props => props.theme['yellow-300']};
 
}
`;

export const ListTable = styled.table`

width: 100%;
border-collapse: separate;
border-spacing: 0 0.75rem;
border-radius: 10px;
td{
  padding: 1.25rem 1.5rem;
  background-color: ${props => props.theme['blue-500']};

  &:first-child{
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child{
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
`;
export const DialogRoot = styled(Dialog.Root)`
background-color: white;
width: 100%;
max-width: 1120px;
margin: -1rem auto;
padding: 1rem;
align-items: center;border-radius: 10px;
color: ${props => props.theme['white']};
font-weight: 500;
`;

export const DialogTrigger = styled(Dialog.Root)`
background-color: white;
width: 100%;
max-width: 1120px;
margin: -1rem auto;
padding: 1rem;
align-items: center;border-radius: 10px;
color: ${props => props.theme['white']};
font-weight: 500;
`;


export const preview = styled.button`
background-color: white;
width: 100%;
max-width: 1120px;
margin: -1rem auto;
padding: 1rem;
align-items: center;border-radius: 10px;
color: ${props => props.theme['white']};
font-weight: 500;
`;
