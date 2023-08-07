'use client'

import styles from '@/styles/Forms/buttons/submit.module.css'
import { useState, ChangeEvent } from 'react';
import getTokenSession from '@/functions/getTokenSession';

interface Props<T> {
    data: T;
    rote: string
}

function ButtonSubmit<T>({ data, rote }: Props<T>) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = await getTokenSession()
            setLoading(true)
            //testando rejeição de Promisse
            // const res2 = await Promise.reject(new Error("Erro simulado"));
            const res = await fetch(`http://localhost:3004/${rote}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }).then((response) => {
                console.log(response)
            })
            console.log(res)

        } catch (error) {
            setError('Erro ao salvar dados. Por favor, tente novamente.')
        } finally {
            setLoading(false)
        }
    }
    return (
        <button className={styles.buttonSub} onClick={onSubmit}>Salvar</button>
    )
}

export default ButtonSubmit