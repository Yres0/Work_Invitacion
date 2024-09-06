/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FYLjV0lLml7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] font-['Playfair Display', serif]">
      <header className="bg-[#f0e8e0] py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-[#6c5d53]">Boda de María y Juan</div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors" prefetch={false}>
              Detalles
            </Link>
            <Link href="#" className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors" prefetch={false}>
              Novios
            </Link>
            <Link href="#" className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors" prefetch={false}>
              Mesa de Regalos
            </Link>
            <Link href="#" className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors" prefetch={false}>
              RSVP
            </Link>
            <Link href="#" className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors" prefetch={false}>
              Galería
            </Link>
          </nav>
          <button className="md:hidden text-[#6c5d53] hover:text-[#9b8b7f] transition-colors">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section id="details" className="bg-[#f0e8e0] py-12 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#6c5d53]">Detalles de la Boda</h2>
              <p className="text-[#9b8b7f] mt-4">Únanse a nosotros para celebrar el amor de María y Juan.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Fecha</h3>
                  <p className="text-[#9b8b7f]">10 de Junio de 2023</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Hora</h3>
                  <p className="text-[#9b8b7f]">5:00 PM</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Lugar</h3>
                  <div className="text-[#9b8b7f] flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5" />
                    <p>Hacienda El Rosal, Carretera a Tequisquiapan Km 5.5, Querétaro, México</p>
                  </div>
                  <div className="mt-2">
                    <Link
                      href="#"
                      target="_blank"
                      className="text-[#6c5d53] hover:text-[#9b8b7f] transition-colors"
                      prefetch={false}
                    >
                      Ver en el mapa
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Dress Code</h3>
                  <p className="text-[#9b8b7f]">Formal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="couple" className="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#6c5d53]">Sobre los Novios</h2>
              <p className="text-[#9b8b7f] mt-4">Conoce a María y Juan, la pareja que se unirá en matrimonio.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-6">
                <img src="/placeholder.svg" alt="María" width={120} height={120} className="rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">María</h3>
                  <p className="text-[#9b8b7f]">
                    María es una apasionada de la fotografía y el diseño. Le encanta pasar tiempo al aire libre y viajar
                    a nuevos lugares.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <img src="/placeholder.svg" alt="Juan" width={120} height={120} className="rounded-full" />
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Juan</h3>
                  <p className="text-[#9b8b7f]">
                    Juan es un emprendedor apasionado por la tecnología y la innovación. Le gusta pasar tiempo con su
                    familia y amigos.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <h3 className="text-xl font-bold text-[#6c5d53]">Padres de los Novios</h3>
              <p className="text-[#9b8b7f] mt-2">
                Padres de María: Alejandro y Sofía
                <br />
                Padres de Juan: Enrique y Luisa
              </p>
            </div>
            <div className="text-center mt-8">
              <h3 className="text-xl font-bold text-[#6c5d53]">Padrinos</h3>
              <p className="text-[#9b8b7f] mt-2">Padrinos de María y Juan: Pedro y Ana</p>
            </div>
          </div>
        </section>
        <section id="registry" className="bg-[#f0e8e0] py-12 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#6c5d53]">Mesa de Regalos</h2>
              <p className="text-[#9b8b7f] mt-4">
                Ayúdanos a celebrar nuestro amor con un regalo de nuestra lista de bodas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Tienda de Registro</h3>
                  <p className="text-[#9b8b7f]">
                    Visita nuestra lista de bodas en Crate & Barrel para ver los artículos que hemos seleccionado.
                  </p>
                  <div className="mt-2">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-[#6c5d53] text-white px-6 py-2 rounded-md hover:bg-[#9b8b7f] transition-colors"
                      prefetch={false}
                    >
                      Ver Lista de Bodas
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Efectivo y Transferencia</h3>
                  <p className="text-[#9b8b7f]">
                    Si lo prefieres, también puedes hacer una donación en efectivo o mediante transferencia bancaria.
                  </p>
                  <div className="mt-2">
                    <p className="text-[#9b8b7f]">
                      Número de cuenta: 1234567890
                      <br />
                      CLABE: 987654321
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Tarjeta de Regalo</h3>
                  <p className="text-[#9b8b7f]">Si lo prefieres, puedes enviarnos una tarjeta de regalo virtual.</p>
                  <div className="mt-2">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-[#6c5d53] text-white px-6 py-2 rounded-md hover:bg-[#9b8b7f] transition-colors"
                      prefetch={false}
                    >
                      Enviar Tarjeta de Regalo
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#6c5d53]">Donación a Caridad</h3>
                  <p className="text-[#9b8b7f]">
                    Si lo prefieres, puedes hacer una donación a una organización benéfica en nuestro nombre.
                  </p>
                  <div className="mt-2">
                    <Link
                      href="#"
                      target="_blank"
                      className="bg-[#6c5d53] text-white px-6 py-2 rounded-md hover:bg-[#9b8b7f] transition-colors"
                      prefetch={false}
                    >
                      Hacer Donación
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="rsvp" className="bg-[#f0e8e0] py-12 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#6c5d53]">Confirma tu Asistencia</h2>
              <p className="text-[#9b8b7f] mt-4">
                Por favor, envía un mensaje de WhatsApp para confirmar tu asistencia a la boda.
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                target="_blank"
                className="bg-[#6c5d53] text-white px-6 py-2 rounded-md hover:bg-[#9b8b7f] transition-colors"
              >
                Confirmar Asistencia por WhatsApp
              </a>
            </div>
          </div>
        </section>
        <section id="gallery" className="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#6c5d53]">Galería de Fotos</h2>
              <p className="text-[#9b8b7f] mt-4">Disfruta de algunas fotos de la pareja.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img src="/placeholder.svg" alt="Foto 1" width={400} height={300} className="rounded-md" />
              <img src="/placeholder.svg" alt="Foto 2" width={400} height={300} className="rounded-md" />
              <img src="/placeholder.svg" alt="Foto 3" width={400} height={300} className="rounded-md" />
              <img src="/placeholder.svg" alt="Foto 4" width={400} height={300} className="rounded-md" />
              <img src="/placeholder.svg" alt="Foto 5" width={400} height={300} className="rounded-md" />
              <img src="/placeholder.svg" alt="Foto 6" width={400} height={300} className="rounded-md" />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#6c5d53] text-white py-6 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <p>&copy; 2023 Boda de María y Juan. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <Link href="#" prefetch={false} />
          </div>
        </div>
      </footer>
    </div>
  )
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}