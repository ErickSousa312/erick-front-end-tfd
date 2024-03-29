'use client';
import styles from '@/styles/login/Login.module.css';
import { useState, ChangeEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { TypeLogin } from '@/app/@types/dadosLogin';

export default function FormLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formValues, setFormValues] = useState<TypeLogin>({
    userName: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/views/entidades';

  const onSurmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      //testando rejeição de Promisse
      // const res2 = await Promise.reject(new Error("Erro simulado"));
      const res = await signIn('credentials', {
        redirect: false,
        userName: formValues.userName,
        password: formValues.password,
        callbackUrl,
      });
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError(res.error);
      }
    } catch (error) {
      setError('Erro ao autenticar. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className={styles.form}>
      <input
        name="userName"
        value={formValues.userName}
        className={styles.inputs}
        placeholder="Usuario"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={formValues.password}
        className={styles.inputs}
        placeholder="Senha"
        type="password"
        onChange={handleChange}
      ></input>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <button className={styles.buttonLogin} onClick={onSurmit}>
        Login
      </button>
    </form>
  );
}
