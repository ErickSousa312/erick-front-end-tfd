'use client'
import { DataGrid, GridColDef, GridToolbar, GridColumnVisibilityModel,GridRowParams,GridRowSelectionModel  } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import "@/app/components/forms/formParecer/style/teste.css"
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import { ptBR } from '@/Traduction/ptBR'
import Label from '../labelForms/label';

import { useRouter } from 'next/navigation';


const ArrayCellRenderer = (params) => {

  const{value}= params
  console.log(value)
  if (Array.isArray(value)) {
    return (
      <ul>
        {value.map((item, index) => (
          <li key={index}>
            {item.Numero}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};
const ButtonCellRenderer = ({ value }) => {
  
  return (
    <button>
      editar
    </button>
  );
};


export default function FormEntidade({ Pacientes }) {
  const router = useRouter()
  const pathname = usePathname()

  const [ id, setId] = useState<number>(null)

  const [selectedRow, setSelectedRow] = useState(null)
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const handleSelectionChange = (params) => {
  
      setId(params.row._id)
      console.log(params)
  };

  const Nextpage = (params) => {
    console.log(params)
      router.push(`${pathname}/${id}`)
    }
  ;

  const isVariavelVazia = () => {
    return id === null;
  };

  const [columnVisibilityModel, setColumnVisibilityModel] =
  useState<GridColumnVisibilityModel>({
    DataNascimento: false,
    NumeroCPF: true,
    NumeroRG : true,
    OrgaoEmissor: false,
    NumeroCartaoSUS: true,
    NumeroTituloEleitor: false,
    EleitorUF: false,
    NomePaciente: true,
    NomeSocial: false ,
    Sexo: true,
    Idade: true,
    raca:true,
    cor:true,
    Sangue: true,
    DataCadastro: true,
    NomePaiouResponsavel: false ,
    NomeMae: true,
    EstadoCivil: true ,
    Endereco: true,
    Bairro: false,
    Cidade: false,
    UF: false,
    CEP: false,
    Referencia: false,
    Celular: true,
    Email: true,
    identZona: false,
    TratamentoAtual: false,
    Ocupacao: false,
    GrauEstudo: false,
    Conta: true,
  });
  

  const columns:GridColDef[] = [
    { field: 'NomePaciente', headerName: 'Nome', width: 200, },
    { field: 'NumeroCPF', headerName: 'CPF', width: 150 },
    { field: 'NumeroRG', headerName: 'RG', width: 150 , },
    { field: 'DataNascimento', headerName: 'Data de Nascimento', width: 200,  },
  { field: 'OrgaoEmissor', headerName: 'Órgão Emissor', width: 200,  },
  { field: 'NumeroCartaoSUS', headerName: 'Número Cartão SUS', width: 200,  },
  { field: 'NumeroTituloEleitor', headerName: 'Número Título Eleitor', width: 200,  },
  { field: 'EleitorUF', headerName: 'UF Eleitor', width: 200,  },
  { field: 'NomeSocial', headerName: 'Nome Social', width: 200, },
  { field: 'Sexo', headerName: 'Sexo', width: 200,  },
  { field: 'Idade', headerName: 'Idade', width: 200,  },
  { field: 'raca', headerName: 'Raça', width: 200,  },
  { field: 'cor', headerName: 'Cor', width: 200,  },
  { field: 'Sangue', headerName: 'Tipo Sanguíneo', width: 200,  },
  { field: 'DataCadastro', headerName: 'Data de Cadastro', width: 200,  },
  { field: 'NomePaiouResponsavel', headerName: 'Nome do Pai ou Responsável', width: 200,  },
  { field: 'NomeMae', headerName: 'Nome da Mãe', width: 200,  },
  { field: 'EstadoCivil', headerName: 'Estado Civil', width: 200,  },
  { field: 'Endereco', headerName: 'Endereço', width: 200,  },
  { field: 'Bairro', headerName: 'Bairro', width: 200,  },
  { field: 'Cidade', headerName: 'Cidade', width: 200,  },
  { field: 'UF', headerName: 'UF', width: 200,  },
  { field: 'CEP', headerName: 'CEP', width: 200, },
  { field: 'Referencia', headerName: 'Referência', width: 200,  },
  { field: `Celular`, headerName: 'Celular', width: 200,renderCell: ArrayCellRenderer,  },
  { field: 'Email', headerName: 'Email', width: 200,  },
  { field: 'identZona', headerName: 'Zona de Identificação', width: 200,  },
  { field: 'TratamentoAtual', headerName: 'Tratamento Atual', width: 200,  },
  { field: 'Ocupacao', headerName: 'Ocupação', width: 200,  },
  { field: 'GrauEstudo', headerName: 'Grau de Estudo', width: 200,  },
  { field: 'Conta', headerName: 'Conta', width: 200,  },
  { field: 'Editar', headerName: 'Conta', width: 200,  renderCell:ButtonCellRenderer},
  ];


  return (
  <>
  <section>
  <Label label={'Parecer Médico'}></Label>
  <button  className={` ${isVariavelVazia() ? 'button2':'button'}`} onClick={Nextpage} disabled={isVariavelVazia()} >
      Novo Parecer
    </button>

  </section>
  
    <Box sx={{ height: '85%', width: '100%' }}>
      <DataGrid 
      rows={Pacientes} 
      
        columns={columns}
        disableRowSelectionOnClick={false}
        getRowId={(row) => row._id}
        
        slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        className="custom-data-grid"
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        pageSizeOptions={[25, 50, 100]}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={(newModel) =>
          setColumnVisibilityModel(newModel)
        }
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        onCellClick={handleSelectionChange}
        // onRowSelected={handleRowSelection}
      />
    </Box>
  </>
    
  )
}

