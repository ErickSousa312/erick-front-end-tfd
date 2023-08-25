'use client'
import { useReducer } from 'react'
import { reducerPaciente } from '@/functions/reducer/reducerPaciente'
import { initialStateFuncionario } from '@/functions/reducer/reducerPaciente'
import styles from '@/styles/Forms/Pacientes/components/Forms.module.css'
import ButtonSubmit from '../../buttons/submitButton/buttonSubmit'



export default function FormPaciente() {
    const [dataPaciente, dispatch] = useReducer(reducerPaciente, initialStateFuncionario)

    return (
        <form >
            <section className={styles.section1Container}>
                <label className={styles['form-label']}>
                    Data de nascimento
                    <input
                        className={styles['form-input']}
                        style={{ width: '120px' }}
                        type="string"
                        value={dataPaciente.DataNascimento}
                        onChange={(e) =>
                            dispatch({ type: 'setDataNascimento', payload: e.target.value })
                        }
                    />
                </label>
                
                <label className={styles['form-label']}>
                    NomePaciente
                    <input
                        className={styles['form-input']}
                        style={{ width: '350px' }}
                        type="text"
                        value={dataPaciente.NomePaciente}
                        onChange={(e) => dispatch({ type: 'setNomePaciente', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    OrgaoEmissor
                    <input
                        className={styles['form-input']}
                        
                        style={{ width: '110px' }}
                        type="text"
                        value={dataPaciente.OrgaoEmissor}
                        onChange={(e) => dispatch({ type: 'setOrgaoEmissor', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    NumeroCartaoSUS
                    <input
                        className={styles['form-input']}
                        style={{ width: '120px' }}
                        type="number"
                        value={dataPaciente.NumeroCartaoSUS}
                        onChange={(e) => dispatch({ type: 'setNumeroCartaoSUS', payload: e.target.value })}
                    />
                </label>
                
                <label className={styles['form-label']}>
                    NumeroRG
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataPaciente.NumeroRG}
                        onChange={(e) =>
                            dispatch({ type: 'setNumeroRG', payload: e.target.value })
                        }
                    />
                </label>
                
            </section>
            <section className={styles.section2Container}>
            <label className={styles['form-label']}>
                    NumeroTituloEleitor
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataPaciente.NumeroTituloEleitor}
                        onChange={(e) =>
                            dispatch({ type: 'setNumeroTituloEleitor', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Titulo EleitorUF
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.EleitorUF}
                        onChange={(e) =>
                            dispatch({ type: 'setEleitorUF', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    CPF
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataPaciente.NumeroCPF}
                        onChange={(e) =>
                            dispatch({ type: 'setNumeroCPF', payload: e.target.value })
                        }
                    />
                </label>

                

                <label className={styles['form-label']}>
                    Nome Social
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataPaciente.NomeSocial}
                        onChange={(e) => dispatch({ type: 'setNomeSocial', payload: e.target.value })}
                    />
                </label>
                <label className={styles['form-label']}>
                    Sexo
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataPaciente.Sexo}
                        onChange={(e) => dispatch({ type: 'setSexo', payload: e.target.value })}
                    />
                </label>
            </section>
            <section className={styles.section3Container}>
                
                <label className={styles['form-label']}>
                    Idade
                    <input
                        className={styles['form-input']}
                        style={{ width: '1.2rem' }}
                        type="text"
                        value={dataPaciente.Idade}
                        onChange={(e) =>
                            dispatch({ type: 'setIdade', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Raça
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.raca}
                        onChange={(e) =>
                            dispatch({ type: 'setRaca', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Cor
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.cor}
                        onChange={(e) =>
                            dispatch({ type: 'setCor', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    Sangue
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.Sangue}
                        onChange={(e) =>
                            dispatch({ type: 'setSangue', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Data Cadastro
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="date"
                        value={dataPaciente.DataCadastro}
                        onChange={(e) =>
                            dispatch({ type: 'setDataCadastro', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Nome Pai ou Responsavel
                    <input
                        className={styles['form-input']}
                        style={{ width: '14rem' }}
                        type="text"
                        value={dataPaciente.NomePaiouResponsavel}
                        onChange={(e) =>
                            dispatch({ type: 'setNomePaiouResponsavel', payload: e.target.value })
                        }
                    />
                </label>
            </section>



            <section className={styles.section3Container}>

            
                
                
                <label className={styles['form-label']}>
                    Nome da Mãe
                    <input
                        className={styles['form-input']}
                        style={{ width: '14rem' }}
                        type="text"
                        value={dataPaciente.NomeMae}
                        onChange={(e) =>
                            dispatch({ type: 'setNomeMae', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Estado Civil
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.EstadoCivil}
                        onChange={(e) =>
                            dispatch({ type: 'setEstadoCivil', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Endereço
                    <input
                        className={styles['form-input']}
                        style={{ width: '14rem' }}
                        type="text"
                        value={dataPaciente.Endereco}
                        onChange={(e) =>
                            dispatch({ type: 'setEndereco', payload: e.target.value })
                        }
                    />
                </label>

                
                <label className={styles['form-label']}>
                    Bairro
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.Bairro}
                        onChange={(e) =>
                            dispatch({ type: 'setBairro', payload: e.target.value })
                        }
                    />
                </label>
                

            </section>




            <section className={styles.section3Container}>
            
                


                <label className={styles['form-label']}>
                    Cidade
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.Cidade}
                        onChange={(e) =>
                            dispatch({ type: 'setCidade', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    UF
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.UF}
                        onChange={(e) =>
                            dispatch({ type: 'setUF', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    CEP
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.CEP}
                        onChange={(e) =>
                            dispatch({ type: 'setCEP', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Referencia
                    <input
                        className={styles['form-input']}
                        style={{ width: '11rem' }}
                        type="text"
                        value={dataPaciente.Referencia}
                        onChange={(e) =>
                            dispatch({ type: 'setReferencia', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Celular
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="number"
                        value={dataPaciente.Celular[0].Numero}
                        onChange={(e) =>
                            dispatch({ type: 'setCelular', payload: e.target.value })
                        }
                    />
                </label>
                


                
            </section>


            <section className={styles.section3Container}>
            <label className={styles['form-label']}>
                    Nome Acompanhante 
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.Acompanhantes[0]?.NomeAcompanhante}
                        onChange={(e) =>
                            dispatch({ type: 'setAcompanhantesNome', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Numero CPF
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }} 
                        type="text"
                        value={dataPaciente.Acompanhantes[0]?.NumeroCPF}
                        onChange={(e) =>
                            dispatch({ type: 'setAcompanhantesCPF', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    RG
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }} 
                        type="text"
                        value={dataPaciente.Acompanhantes[0]?.NumeroRG}
                        onChange={(e) =>
                            dispatch({ type: 'setAcompanhantesRG', payload: e.target.value })
                        }
                    />
                </label>
                <label className={styles['form-label']}>
                    Data Nascimento
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }} 
                        type="date"
                        value={dataPaciente.Acompanhantes[0]?.DataNascimento}
                        onChange={(e) =>
                            dispatch({ type: 'setAcompanhantesDataNascimento', payload: e.target.value })
                        }
                    />
                </label>
            </section>

            <section className={styles.section3Container}>

            <label className={styles['form-label']}>
                    Email
                    <input
                        className={styles['form-input']}
                        style={{ width: '14rem' }}
                        type="text"
                        value={dataPaciente.Email}
                        onChange={(e) =>
                            dispatch({ type: 'setEmail', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    IdentZona
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.identZona}
                        onChange={(e) =>
                            dispatch({ type: 'setIdentZona', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    Tratamento Atual
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.TratamentoAtual}
                        onChange={(e) =>
                            dispatch({ type: 'setTratamentoAtual', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    Ocupação
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.Ocupacao}
                        onChange={(e) =>
                            dispatch({ type: 'setOcupacao', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    Grau Estudo
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="text"
                        value={dataPaciente.GrauEstudo}
                        onChange={(e) =>
                            dispatch({ type: 'setGrauEstudo', payload: e.target.value })
                        }
                    />
                </label>
            <label className={styles['form-label']}>
                    Conta
                    <input
                        className={styles['form-input']}
                        style={{ width: '7rem' }}
                        type="number"
                        value={dataPaciente.Conta}
                        onChange={(e) =>
                            dispatch({ type: 'setConta', payload: e.target.value })
                        }
                    />
                </label>


            </section>
            <div className={styles.buttonSubmit}>
                <ButtonSubmit data={dataPaciente} rote={'paciente'}></ButtonSubmit>
            </div>
        </form>
    )
}