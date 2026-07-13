export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TaskFlow Pro. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
