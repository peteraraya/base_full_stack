'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<string>('Cargando...');

  useEffect(() => {
    // Apunta a la API definida en variables de entorno, o usa localhost por defecto
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    fetch(apiUrl)
      .then((res) => res.text())
      .then((data) => {
        setApiResponse(data);
      })
      .catch((err) => {
        console.error('Error conectando a la API:', err);
        setApiResponse('Error: No se pudo conectar a la API.');
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">
          TaskFlow Pro - Test de Despliegue
        </h1>
        
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Respuesta desde el Backend (NestJS):
          </h2>
          <div className="bg-gray-100 p-4 rounded text-lg font-bold text-green-600 border border-gray-300">
            {apiResponse}
          </div>
          <p className="mt-4 text-gray-500 text-xs">
            Si ves el mensaje Hello World significa que el frontend se está comunicando correctamente con la API.
          </p>
        </div>
      </div>
    </main>
  );
}
