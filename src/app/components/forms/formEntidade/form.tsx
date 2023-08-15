'use client'
import { useReducer } from 'react'
import { reducerEntidade } from '@/functions/reducer/reducerEntidade'
import { initialStatEntidade } from '@/functions/reducer/reducerEntidade'
import styles from '@/styles/Forms/Funcionarios/components/Forms.module.css'
import ButtonSubmit from '../../buttons/submitButton/buttonSubmit'

export default function FormEntidade() {
    const [dataEntidade, dispatch] = useReducer(reducerEntidade, initialStatEntidade)

    return (
        <form>
            <section className={styles.section1Container}>
                <label className={styles['form-label']}>
                    Nome da Entidade:
                    <input
                        className={styles['form-input']}
                        style={{ width: '400px' }}
                        type="text"
                        value={dataEntidade.NomeEntidade}
                        onChange={(e) =>
                            dispatch({ type: 'setNomeEntidade', payload: e.target.value })
                        }
                    />
                </label>

                <label className={styles['form-label']}>
                    Cidade
                    <input
                        className={styles['form-input']}
                        type="text"
                        value={dataEntidade.Cidade}
                        onChange={(e) => dispatch({ type: 'setCidade', payload: e.target.value })}
                    />
                </label>

                <label className={styles['form-label']}>
                    Estado
                    <input
                        className={styles['form-input']}
                        style={{ width: '50px' }}
                        type="text"
                        value={dataEntidade.Estado}
                        onChange={(e) => dispatch({ type: 'setEstado', payload: e.target.value })}
                    />
                </label>

                
            </section>
            <section className={styles.section2Container}>
            <label className={styles['form-label']}>
                    Especialidades
                    <input
                        className={styles['form-input']}
                        style={{ width: '300px' }}
                        type="text"
                        value={dataEntidade.Especialidades[0].Nome}
                        onChange={(e) =>
                            dispatch({ type: 'setEspecialidade', payload: e.target.value })
                        }
                    />
                </label>
            </section>
            
            <div className={styles.buttonSubmit}>
                <ButtonSubmit data={dataEntidade} rote={'entid'}></ButtonSubmit>
            </div>
        </form>
    )
}