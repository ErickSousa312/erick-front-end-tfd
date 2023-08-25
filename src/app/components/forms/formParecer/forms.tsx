'use client'
import { useReducer, useState,  useEffect, memo, useMemo  } from 'react'
import { reducerEntidade } from '@/functions/reducer/reducerEntidade'
import { initialStatEntidade } from '@/functions/reducer/reducerEntidade'
import styles from '@/styles/Forms/Funcionarios/components/Forms.module.css'
import ButtonSubmit from '../../buttons/submitButton/buttonSubmit'


import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



export default function FormEntidade({ Pacientes }) {
    const [dataEntidade, dispatch] = useReducer(reducerEntidade, initialStatEntidade)

    const [search, setSearch] = useState<string>("")
    // const data2 = data2.filter((paciente:any)=>paciente.NomePaciente.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    const [rowData, setRowData] = useState([]);

    const columnDefs = useMemo(() =>[
        {
            headerName: 'Expandir',
            headerGroupComponent: 'MyGroupHeader',
            children: [
                
        { headerName: 'Nome', field: 'NomePaciente', sortable: true, filter: true ,resizable: true,enableRowGroup: true, flex:1},
        { headerName: 'CPF', field: 'NumeroCPF', sortable: true, filter: true ,resizable: true},
        { headerName: 'Cartão SUS', field: 'NumeroCartaoSUS', sortable: true, filter: true ,resizable: true},
        { headerName: 'Numero RG', field: 'NumeroRG', sortable: true, filter: true ,resizable: true},
        { headerName: 'Idade', field: 'Idade', sortable: true, filter: true ,resizable: true},
        { headerName: 'cor', field: 'cor', sortable: true, filter: true ,resizable: true,columnGroupShow: 'open' },
        { headerName: 'Sangue', field: 'Sangue', sortable: true, filter: true ,resizable: true,columnGroupShow: 'open' },
        { headerName: 'NomeMae', field: 'NomeMae', sortable: true, filter: true ,resizable: true,columnGroupShow: 'open' },
        { headerName: 'Email', field: 'Email', sortable: true, filter: true ,resizable: true,columnGroupShow: 'open' },
        { 
            headerName: 'Ação', 
            cellRenderer: 'buttonRenderer', // Usaremos um renderer personalizado
            cellRendererParams: {
              onClick: (_id) => alert(`Botão clicado para o paciente com ID ${_id}`)
            }
          }
            ]
        },
      ],[]);


      const Componentes:any = {
        buttonRenderer: ButtonRenderer
      };

      function cellClickedListener(event) {
        // O parâmetro "event" contém informações sobre o evento de clique
        console.log('Célula clicada!', event.value);
        
        // Realize ações com base no evento de clique, se necessário
    }

    return (
        <div className="ag-theme-alpine" style={{ height: '86%', width: '100%' }}>
            {/* <input type='search'/> */}
      <AgGridReact
        columnDefs={columnDefs}
        onCellClicked={cellClickedListener}
        rowData={Pacientes}
        components={Componentes}
        pagination={true}
        paginationPageSize={15}
        animateRows={true}
        rowSelection={'multiple'}
        suppressRowClickSelection={true}
      />
    </div>
    )
}

function ButtonRenderer(params:any):JSX.Element {
    return (
      <button onClick={() => params.onClick(params.data._id)}>Vizualizar histórico</button>
    );
  }