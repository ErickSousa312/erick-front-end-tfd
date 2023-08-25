'use cliente'
import { useState } from 'react';
import getTokenSession from '@/functions/getTokenSession';
import { getServerSession } from 'next-auth';

export async function GetDataPaciente():Promise<any> {

    try {
        return new Promise(async (resolve, reject) => {
            try {
              const response = await fetch(`http://localhost:3004/paciente`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
              if (!response.ok) {
                throw new Error('Erro ao buscar dados da API2');
              }
              const data = await response.json();
              resolve(data);
            } catch (error) {
              console.error('Erro na requisição fetch:', error);
              reject(error);
            }
          });
    } catch (error) {
      console.error('Erro na requisição fetch:', error);
      throw error; // Rejeite a Promise com o erro
    }
  }