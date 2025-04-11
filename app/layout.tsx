import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <Navbar></Navbar>
       <main className="relative overflow-hidden">

       {/* Encabezado principal con imagen de fondo */}
<header
  id="home"
  className="relative flex items-center justify-center text-center min-h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/eventos.jpg')" }}
>
  {/* Capa de superposición para mejorar la legibilidad */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Contenido del encabezado con animación */}
  <div className="relative z-10 px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
      Bienvenidos a <span className="text-[#3b78a4]">InviTrack</span>
    </h1>
    <p className="text-lg md:text-2xl text-gray-300 mt-4 drop-shadow-md animate-slideUp">
      Confirmaciones sin estrés
    </p>

    {/* Botón de acción */}
    <a
      href="#contacto"
      className="mt-8 inline-block bg-[#5E7A8E] text-black font-semibold py-3 px-6 rounded-lg shadow-md text-lg md:text-xl hover:bg-[#E0A800] transition duration-300 animate-fadeIn"
    >
      ¡Contáctanos Ahora!
    </a>
  </div>
</header>



      {/* Sección de Misión con imagen a la izquierda y texto a la derecha */}
      <section id="mision" className="py-24 px-12 bg-white flex flex-col-reverse md:flex-row items-center">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/mision.jpg" alt="Nuestra Misión" className="w-3/4 md:w-full rounded-lg shadow-lg" />
        </div>

        {/* Texto a la derecha */}
        <div className="w-full md:w-1/2 text-left md:pl-12">
          <h2 className="text-4xl font-semibold text-blue-700">Nuestra Misión</h2>
          <h2 className="text-4xl font-semibold text-[#66b1e6]">Nuestra Misión</h2>
          <h2 className="text-4xl font-semibold text-[#D5D4C7]">Nuestra Misión</h2>
          <h2 className="text-4xl font-semibold text-[#5d9c81]">Nuestra Misión</h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Facilitar la organización de eventos mediante un seguimiento eficiente y automatizado de los invitados, 
            mejorar la comunicación y garantizar que cada invitado reciba la mejor experiencia desde la invitación hasta el día del gran evento.
          </p>
        </div>
      </section>


      {/* Sección de Visión con texto a la izquierda e imagen a la derecha */}
      <section id="vision" className="py-24 px-12 bg-gray-100 flex flex-col md:flex-row-reverse items-center">
        {/* Texto a la izquierda */}
        <div className="w-full md:w-1/2 text-left md:pl-12">
          <h2 className="text-4xl font-semibold text-blue-700">Nuestra Visión</h2>
          <h2 className="text-4xl font-semibold text-[#66b1e6]">Nuestra Visión</h2>
          <h2 className="text-4xl font-semibold text-[#D5D4C7]">Nuestra Visión</h2>
          <h2 className="text-4xl font-semibold text-[#5d9c81]">Nuestra Visión</h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Convertirnos en la plataforma líder en gestión de invitados para bodas y eventos, 
            ofreciendo soluciones tecnológicas innovadoras y personalizadas.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/vision.jpg" alt="Nuestra Visión" className="w-3/4 md:w-full rounded-lg shadow-lg" />
        </div>
      </section>


      {/* Sección de Objetivos Específicos con imágenes intercaladas */}
      <section id="sobre-nosotros" className="py-16 px-8 bg-white text-center">
  <h2 className="text-4xl font-semibold text-blue-700">Objetivos</h2>
  <h2 className="text-4xl font-semibold text-[#66b1e6]">Objetivos</h2>
  <h2 className="text-4xl font-semibold text-[#D5D4C7]">Objetivos</h2>

  <div className="flex flex-col gap-12 mt-12">
    {/* Objetivo 1 */}
    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6">
      <div className="order-2 md:order-1 text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Control Organizado</h3>
        <p className="text-gray-700 mt-2">Llevar un control organizado de los invitados.</p>
      </div>
      <div className="order-1 md:order-2">
        <img src="/objetivo1.jpg" alt="Control de invitados" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Objetivo 2 */}
    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6">
      <div className="order-2 text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Confirmación a Tiempo</h3>
        <p className="text-gray-700 mt-2">
          Asegurar la confirmación de asistencia dentro de los plazos establecidos.
        </p>
      </div>
      <div className="order-1">
        <img src="/objetivo2.jpg" alt="Confirmación de asistencia" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Objetivo 3 */}
    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6">
    <div className="order-2 md:order-1 text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Gestión de Ausencias</h3>
        <p className="text-gray-700 mt-2">
          Identificar a tiempo a quienes no puedan asistir para ajustar logística y costos.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img src="/objetivo3.jpg" alt="Identificación de ausencias" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>

    {/* Objetivo 4 */}
    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-6">
      <div className="order-2 text-left">
        <h3 className="text-2xl font-semibold text-gray-800">Mejor Comunicación</h3>
        <p className="text-gray-700 mt-2">
          Mejorar la comunicación con los invitados antes del evento.
        </p>
      </div>
      <div className="order-1">
        <img src="/objetivo4.jpg" alt="Comunicación con invitados" className="w-full rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
</section>



      {/* Sección de Contacto */}
<section id="contacto" className="py-24 px-6 md:px-16 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold text-[#5E7A8E] mb-6">Contáctanos</h2>
  <p className="text-lg text-gray-700 mb-12">
    ¿Tienes dudas o quieres más información? Completa el siguiente formulario o escríbenos directamente a 
    <a href="mailto:contacto@inviTrack.com" className="text-[#5E7A8E] font-semibold underline ml-1">Invi.track.family@gmail.com
    </a>
  </p>

  <form
  action="https://formspree.io/f/xjkyeqyb"
  method="POST"
  className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6"
>
  <input
    type="text"
    name="nombre"
    placeholder="Juan Perez"
    required
    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5E7A8E]"
  />
  <input
    type="email"
    name="email"
    placeholder="juan@correo.com"
    required
    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5E7A8E]"
  />
  <textarea
    name="mensaje"
    placeholder="Escribe tu mensaje aquí... Incluye un numero de contacto. Gracias!"
    rows={5}
    required
    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#5E7A8E]"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-[#5E7A8E] text-white font-semibold py-3 rounded-md hover:bg-[#4b677a] transition duration-300"
  >
    Enviar mensaje
  </button>
</form>


  {/* Redes Sociales */}
  <div className="mt-12 flex justify-center gap-6">
    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="https://instagram.com/invitrack" target="_blank" rel="noopener noreferrer">
      <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
    </a>
    <a href="mailto:contacto@inviTrack.com">
      <img src="/email.svg" alt="Email" className="w-8 h-8 hover:scale-110 transition" />
    </a>
  </div>
</section>


       </main>
       <Footer></Footer>
      </body>
    </html>
  );
}
