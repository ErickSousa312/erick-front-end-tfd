'use client';
import { useReducer } from 'react';
import {
  initialStateParecer,
  reducerParecer,
} from '@/functions/reducer/reducerParecerMedico';
import styles from '@/styles/Forms/Parecer/components/Forms.module.css';
export default function FormParecer() {
  const [parecer, dispatch] = useReducer(reducerParecer, initialStateParecer);
  return (
    <form className={styles.section1Container}>
      <label className={styles['form-label']}>
        Data de nascimento
        <input
          className={styles['form-input']}
          style={{ width: '120px' }}
          type="string"
          value={parecer.Justificativa}
          onChange={(e) =>
            dispatch({ type: 'setDataNascimento', payload: e.target.value })
          }
        />
      </label>
    </form>
  );
}
