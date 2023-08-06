'use client'
import { useReducer } from 'react'
import { reducerFuncionario } from '@/functions/reducer/reducerFuncionario'
import { initialStateFuncionario } from '@/functions/reducer/reducerFuncionario'
import styles from '@/styles/Forms/Funcionarios/components/Forms.module.css'

export default function FormFuncionario() {
    const [dataFuncionario, dispatch] = useReducer(reducerFuncionario, initialStateFuncionario)

    return (
        <form >
            <section className={styles.section1Container}>
                <label className={styles['form-label']}>
                    Nome do Funcionário:
                    <input
                        className={styles['form-input']}
                        style={{ width: '400px' }}
                        type="text"
                        value={dataFuncionario.nomeFuncionario}
                        onChange={(e) =>
                            dispatch({ type: 'setNomeFuncionario', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    CPF:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.CPF}
                        onChange={(e) => dispatch({ type: 'setCPF', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    RG:
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataFuncionario.Rg}
                        onChange={(e) => dispatch({ type: 'SET_RG', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    Número de Matrícula:
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataFuncionario.NumeroMatricula}
                        onChange={(e) =>
                            dispatch({ type: 'SET_NUMERO_MATRICULA', payload: e.target.value })
                        }
                    />
                </label>
            </section>
            <section className={styles.section2Container}>
                <label className={styles['form-label']}>
                    Número da Portaria:
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataFuncionario.NumeroPortaria}
                        onChange={(e) =>
                            dispatch({ type: 'SET_NUMERO_PORTARIA', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    Cidade:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.Cidade}
                        onChange={(e) => dispatch({ type: 'SET_CIDADE', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    UF da Cidade:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.UfCidade}
                        onChange={(e) => dispatch({ type: 'SET_UF_CIDADE', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    CEP:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.CEP}
                        onChange={(e) => dispatch({ type: 'SET_CEP', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    Número do Celular:
                    <input
                        className={styles['form-input']}
                        type="number"
                        value={dataFuncionario.Celular[0].Numero}
                        onChange={(e) =>
                            dispatch({ type: 'SET_NUMERO_CELULAR', payload: e.target.value })
                        }
                    />
                </label>
            </section>
            <section className={styles.section3Container}>
                <label className={styles['form-label']}>
                    Atividade Exercida:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.AtividadeExercida}
                        onChange={(e) =>
                            dispatch({ type: 'SET_ATIVIDADE_EXERCIDA', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    Data de Nascimento:
                    <input
                        className={styles['form-input']}
                        type="text" // ou "date" se preferir um datepicker
                        value={dataFuncionario.DataNascimento}
                        onChange={(e) =>
                            dispatch({ type: 'SET_DATA_NASCIMENTO', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    Centro de Saúde:
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataFuncionario.CentroDeSaude}
                        onChange={(e) =>
                            dispatch({ type: 'SET_CENTRO_DE_SAUDE', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    Data de Cadastro:
                    <input
                        className={styles['form-input']}
                        type="text" // ou "date" se preferir um datepicker
                        value={dataFuncionario.DataCadastro}
                        onChange={(e) =>
                            dispatch({ type: 'SET_DATA_CADASTRO', payload: e.target.value })
                        }
                    />
                </label>
            </section>
            <section className={styles.section4Container}>
                <label className={styles['form-label']}>
                    Observação:
                    <textarea
                        className={styles['form-inputLong']}
                        rows={2} // Define o número inicial de linhas
                        value={dataFuncionario.Observacao}
                        onChange={(e) => dispatch({ type: 'setObservacao', payload: e.target.value })}
                    />
                </label>
            </section>

        </form>
    )
}