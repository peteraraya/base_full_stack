'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [apiResponse, setApiResponse] = useState<string>('Conectando con el backend...');

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
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Gestiona tus proyectos con <span className="text-blue-600">TaskFlow Pro</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          La plataforma definitiva para equipos ágiles. Organiza tareas, colabora en tiempo real y aumenta la productividad de tu empresa. (Prueba 2 de despliegue)
        </p>

        {/* Estado del Backend (Prueba de Despliegue) */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-10 inline-block">
          <p className="text-sm font-semibold text-gray-500 mb-1">Estado del servidor (NestJS):</p>
          <div className="text-md font-bold text-green-600">
            {apiResponse}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all text-lg">
            Comenzar gratis
          </Link>
          <Link href="#" className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold py-3 px-8 rounded-lg shadow-sm transition-all text-lg">
            Ver demostración
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Organización</h3>
            <p className="text-gray-600">Crea tableros, asigna tareas y mantén todo tu trabajo estructurado en un solo lugar.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Colaboración</h3>
            <p className="text-gray-600">Comunícate con tu equipo en tiempo real y no pierdas el hilo de ningún proyecto importante.</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Velocidad</h3>
            <p className="text-gray-600">Flujos de trabajo optimizados para que puedas entregar resultados mucho más rápido.</p>
          </div>
        </div>

        {/* Sección de Precios */}
        <div className="mt-32 w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Planes que se adaptan a tu equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Básico</h3>
              <p className="text-gray-500 mb-6">Ideal para equipos pequeños y startups.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$0</span>
                <span className="text-gray-500">/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Hasta 5 usuarios
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Proyectos ilimitados
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Soporte comunitario
                </li>
              </ul>
              <Link href="#" className="block w-full py-3 px-4 bg-white border-2 border-blue-600 text-blue-600 text-center font-bold rounded-lg hover:bg-blue-50 transition-colors">
                Elegir Básico
              </Link>
            </div>

            {/* Plan Pro */}
            <div className="bg-blue-600 p-8 rounded-2xl border border-blue-600 shadow-lg relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider text-yellow-900">
                Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
              <p className="text-blue-100 mb-6">Para empresas que necesitan más potencia.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">$12</span>
                <span className="text-blue-200">/usuario/mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Usuarios ilimitados
                </li>
                <li className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Analíticas avanzadas
                </li>
                <li className="flex items-center text-blue-50">
                  <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Soporte prioritario 24/7
                </li>
              </ul>
              <Link href="#" className="block w-full py-3 px-4 bg-white text-blue-600 text-center font-bold rounded-lg hover:bg-gray-100 transition-colors">
                Elegir Pro
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
