'use client';
import styles from '@/styles/Forms/Entidades/Entidade.module.css';
import Label from '@/app/components/forms/labelForms/label';
import FormEntidade from '@/app/components/forms/formEntidade/form';
import { useSession } from 'next-auth/react';
export default async function Entidades() {
  const { data: session, status } = useSession();
  return (
    <div className={styles.MainContainer}>
      <Label label={'Cadastrar Entidade'}></Label>
      <FormEntidade />
    </div>
  );
}
