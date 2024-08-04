import { useState } from 'react';
// import getTokenSession from '@/functions/getTokenSession';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import axios from 'axios';

export async function GetDataPaciente(): Promise<any> {
  const { user }: any = await getServerSession(authOptions);
  const config = {
    headers: {
      authorization: `Bearer ${user?.token}`,
      'Content-Type': 'application/json',
    },
  };
  console.log(user);
  try {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/pacientes/`,
          config,
        );
        if (!response.data) {
          throw new Error('Erro ao buscar dados da API2');
        }
        resolve(response.data);
      } catch (error) {
        console.error('Erro na requisição fetch:', error);
        reject(error);
      }
    });
  } catch (error) {
    console.error('Erro na requisição fetch:', error);
  }
}
