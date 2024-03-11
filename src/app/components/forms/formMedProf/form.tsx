'use client';
import { useReducer } from 'react';
import { reducerMedProf } from '@/functions/reducer/reducerMedProf';
import { initialStateFuncionario } from '@/functions/reducer/reducerMedProf';
import styles from '@/styles/Forms/MedProf/components/forms.module.css';
import ButtonSubmit from '../../buttons/submitButton/buttonSubmit';

export default function FormMedProf() {
  const [dataMed, dispatch] = useReducer(
    reducerMedProf,
    initialStateFuncionario,
  );

  return (
    <div>
      <section className={styles.section1Container}>
        <label className={styles['form-label']}>
          Ident. Profissional
          <input
            className={styles['form-input']}
            type="number"
            value={dataMed.IdentProfissional}
            onChange={(e) =>
              dispatch({
                type: 'setIdentiProfissional',
                payload: e.target.value,
              })
            }
          />
        </label>
        <label className={styles['form-label']}>
          Nome Completo
          <input
            className={styles['form-input']}
            style={{ width: '350px' }}
            type="text"
            value={dataMed.NomeCompleto}
            onChange={(e) =>
              dispatch({ type: 'setNomeCompleto', payload: e.target.value })
            }
          />
        </label>

        <label className={styles['form-label']}>
          Numero do Registro:
          <input
            className={styles['form-input']}
            type="text"
            value={dataMed.NumeroRegistro}
            onChange={(e) =>
              dispatch({ type: 'setNumeroRegistro', payload: e.target.value })
            }
          />
        </label>

        <label className={styles['form-label']}>
          UF
          <input
            className={styles['form-input']}
            style={{ width: '50px' }}
            type="text"
            value={dataMed.UF}
            onChange={(e) =>
              dispatch({ type: 'setUF', payload: e.target.value })
            }
          />
        </label>

        <label className={styles['form-label']}>
          CPF
          <input
            className={styles['form-input']}
            type="string"
            value={dataMed.CPF}
            onChange={(e) =>
              dispatch({ type: 'setCPF', payload: e.target.value })
            }
          />
        </label>
      </section>
      <section className={styles.section2Container}>
        <label className={styles['form-label']}>
          Data de Nascimento
          <input
            className={styles['form-input']}
            style={{ width: '7rem' }}
            type="date"
            value={dataMed.DataNascimento}
            onChange={(e) =>
              dispatch({ type: 'setDataNascimento', payload: e.target.value })
            }
          />
        </label>

        <label className={styles['form-label']}>
          Cargo
          <input
            className={styles['form-input']}
            style={{ width: '200px' }}
            type="text"
            value={dataMed.Cargo}
            onChange={(e) =>
              dispatch({ type: 'setCargo', payload: e.target.value })
            }
          />
        </label>

        <label className={styles['form-label']}>
          Codigo CBO
          <input
            className={styles['form-input']}
            type="number"
            value={dataMed.CodigoCBO}
            onChange={(e) =>
              dispatch({ type: 'setCodigoCBO', payload: e.target.value })
            }
          />
        </label>
      </section>
      <section className={styles.section3Container}>
        <label className={styles['form-label']}>
          Especialidades
          <input
            className={styles['form-input']}
            type="text"
            value={dataMed.Especialidades[0].Nome}
            onChange={(e) =>
              dispatch({ type: 'addEspecialidade', payload: e.target.value })
            }
          />
        </label>
        <label className={styles['form-label']}>
          Centro de Saúde:
          <input
            className={styles['form-input']}
            type="text"
            value={dataMed.CentroDeSaude}
            onChange={(e) =>
              dispatch({ type: 'setCentroDeSaude', payload: e.target.value })
            }
          />
        </label>
        <label className={styles['form-label']}>
          DataCadastro
          <input
            className={styles['form-input']}
            style={{ width: '7rem' }}
            type="date"
            value={dataMed.DataCadastro}
            onChange={(e) =>
              dispatch({ type: 'setDataCadastro', payload: e.target.value })
            }
          />
        </label>
      </section>
      <section className={styles.section4Container}>
        <label className={styles['form-label']}>
          Afastamento
          <textarea
            className={styles['form-inputLong']}
            rows={2} // Define o número inicial de linhas
            value={dataMed.Afastamento}
            onChange={(e) =>
              dispatch({ type: 'setAfastamento', payload: e.target.value })
            }
          />
        </label>
      </section>
      <div className={styles.buttonSubmit}>
        <ButtonSubmit data={dataMed} rote={'med'}></ButtonSubmit>
      </div>
    </div>
  );
}
