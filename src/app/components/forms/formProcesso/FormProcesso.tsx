
import { Reducer, useReducer } from 'react';
import { TypeLogin } from '../../../@types/dadosLogin';
import { ReduceType } from '../../../@types/reducer'



function reducer(dadosLogin:TypeLogin, action:ReduceType) {
    switch (action.type) {
      case 'setUsuario':
        console.log(dadosLogin.usuario)
        return { ...dadosLogin, usuario: action.payload };
      case 'setSenha':
        return { ...dadosLogin, senha: action.payload };
      default:
        throw new Error('Tipo de ação desconhecido.');
    }
  }

  const initialState: TypeLogin = {
    usuario: "",
    senha: ""
  };

const Form:React.FC= ()=>{
    const [dadosLogin, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            
        </div>
    )
}

export default Form