import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Ilussia Agency",
  description: "Política de privacidad y tratamiento de datos de Ilussia Agency.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-bar">
            <div className="logo-mark">I</div>
            <span className="logo-name">Ilussia Agency</span>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="hero">
          <span className="label">Documento legal</span>
          <h1>
            Política de
            <br />
            Privacidad
          </h1>
          <p className="meta">Última actualización: Junio 2026 &nbsp;·&nbsp; Versión 1.0</p>
        </div>

        <div className="toc">
          <p className="toc-title">Contenido</p>
          <ol>
            <li><a href="#responsable">Responsable del tratamiento</a></li>
            <li><a href="#datos">Datos que recopilamos</a></li>
            <li><a href="#finalidad">Finalidad del tratamiento</a></li>
            <li><a href="#base">Base legal</a></li>
            <li><a href="#compartir">Compartición de datos</a></li>
            <li><a href="#retencion">Retención de datos</a></li>
            <li><a href="#derechos">Tus derechos</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#seguridad">Seguridad</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ol>
        </div>

        <div className="highlight-box">
          <p>
            Esta Política de Privacidad describe cómo{" "}
            <strong>Ilussia Agency</strong> recopila, usa y protege la información
            personal de los usuarios que interactúan con nuestra plataforma y
            servicios.
          </p>
        </div>

        <section id="responsable">
          <h2>
            <span className="num">01</span> Responsable del tratamiento
          </h2>
          <p>
            <strong>Ilussia Agency</strong> es la entidad responsable del
            tratamiento de tus datos personales. Operamos desde Guatemala y
            ofrecemos servicios de marketing digital, CRM, automatizaciones y
            gestión de presencia digital a empresas en Latinoamérica.
          </p>
          <p>
            Correo de contacto: <strong>hola@ilussia.agency</strong>
          </p>
        </section>

        <section id="datos">
          <h2>
            <span className="num">02</span> Datos que recopilamos
          </h2>
          <p>Podemos recopilar los siguientes tipos de información personal:</p>
          <ul>
            <li>
              <strong>Datos de identificación:</strong> nombre, apellido,
              empresa.
            </li>
            <li>
              <strong>Datos de contacto:</strong> correo electrónico, número de
              teléfono, WhatsApp.
            </li>
            <li>
              <strong>Datos de uso:</strong> interacciones con formularios,
              encuestas, calendarios y enlaces del sistema.
            </li>
            <li>
              <strong>Datos de comunicación:</strong> mensajes enviados a través
              de nuestros canales (email, SMS, WhatsApp).
            </li>
            <li>
              <strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo,
              navegador, cookies de sesión.
            </li>
          </ul>
        </section>

        <section id="finalidad">
          <h2>
            <span className="num">03</span> Finalidad del tratamiento
          </h2>
          <p>Utilizamos tus datos para las siguientes finalidades:</p>
          <ul>
            <li>
              Gestionar la relación comercial y dar seguimiento a prospectos y
              clientes (CRM).
            </li>
            <li>
              Enviar comunicaciones de marketing por correo electrónico y otros
              canales.
            </li>
            <li>
              Ejecutar automatizaciones de marketing y ventas en nombre de
              nuestros clientes.
            </li>
            <li>
              Construir y operar sitios web y funnels de conversión.
            </li>
            <li>
              Generar reportes de rendimiento y analítica de campañas.
            </li>
            <li>Cumplir con obligaciones legales y contractuales.</li>
          </ul>
        </section>

        <section id="base">
          <h2>
            <span className="num">04</span> Base legal
          </h2>
          <p>El tratamiento de tus datos se basa en:</p>
          <ul>
            <li>
              <strong>Consentimiento:</strong> cuando aceptas recibir
              comunicaciones de marketing.
            </li>
            <li>
              <strong>Ejecución de contrato:</strong> cuando los datos son
              necesarios para prestarte un servicio.
            </li>
            <li>
              <strong>Interés legítimo:</strong> para el seguimiento comercial y
              la mejora de nuestros servicios.
            </li>
            <li>
              <strong>Cumplimiento legal:</strong> cuando la ley nos obliga a
              conservar ciertos datos.
            </li>
          </ul>
        </section>

        <section id="compartir">
          <h2>
            <span className="num">05</span> Compartición de datos
          </h2>
          <p>
            No vendemos tus datos personales a terceros. Podemos compartir
            información con:
          </p>
          <ul>
            <li>
              <strong>GoHighLevel (HighLevel Inc.):</strong> plataforma de CRM y
              automatización que procesa datos en nuestro nombre.
            </li>
            <li>
              <strong>Meta Platforms:</strong> para la gestión de campañas
              publicitarias en Facebook e Instagram.
            </li>
            <li>
              <strong>Proveedores de email/SMS:</strong> para el envío de
              comunicaciones autorizadas.
            </li>
            <li>
              <strong>Proveedores de análisis:</strong> para medir el rendimiento
              de campañas.
            </li>
          </ul>
          <p>
            Todos los subprocesadores están sujetos a acuerdos de tratamiento de
            datos y deben mantener estándares adecuados de seguridad.
          </p>
        </section>

        <section id="retencion">
          <h2>
            <span className="num">06</span> Retención de datos
          </h2>
          <p>
            Conservamos los datos personales durante el tiempo necesario para
            cumplir con las finalidades descritas en esta política, o mientras
            exista una relación contractual activa.
          </p>
          <p>
            Una vez finalizada la relación, los datos se eliminarán o
            anonimizarán en un plazo máximo de <strong>24 meses</strong>, salvo
            que la ley exija un período de conservación mayor.
          </p>
        </section>

        <section id="derechos">
          <h2>
            <span className="num">07</span> Tus derechos
          </h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>
              <strong>Acceder</strong> a los datos personales que tenemos sobre
              ti.
            </li>
            <li>
              <strong>Rectificar</strong> datos incorrectos o incompletos.
            </li>
            <li>
              <strong>Solicitar la eliminación</strong> de tus datos cuando ya no
              sean necesarios.
            </li>
            <li>
              <strong>Oponerte</strong> al tratamiento para fines de marketing
              directo.
            </li>
            <li>
              <strong>Retirar el consentimiento</strong> en cualquier momento sin
              que afecte la licitud del tratamiento previo.
            </li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, escríbenos a{" "}
            <strong>hola@ilussia.agency</strong>.
          </p>
        </section>

        <section id="cookies">
          <h2>
            <span className="num">08</span> Cookies
          </h2>
          <p>
            Nuestros sitios y funnels pueden utilizar cookies técnicas y de
            análisis para mejorar la experiencia del usuario y medir el
            rendimiento de las páginas. Al continuar navegando, aceptas su uso.
          </p>
          <p>
            Puedes configurar tu navegador para rechazar cookies, aunque esto
            puede afectar la funcionalidad de algunas páginas.
          </p>
        </section>

        <section id="seguridad">
          <h2>
            <span className="num">09</span> Seguridad
          </h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para
            proteger tus datos contra accesos no autorizados, pérdida o
            destrucción, incluyendo cifrado SSL/TLS en todas nuestras
            comunicaciones y acceso restringido a la información personal.
          </p>
        </section>

        <section id="contacto">
          <h2>
            <span className="num">10</span> Contacto
          </h2>
          <p>
            Si tienes preguntas sobre esta Política de Privacidad o sobre el
            tratamiento de tus datos, puedes contactarnos en:
          </p>
          <div className="highlight-box">
            <p>
              <strong>Ilussia Agency</strong>
              <br />
              Guatemala, Centroamérica
              <br />
              📧 hola@ilussia.agency
              <br />
              🌐 ilussia.agency
            </p>
          </div>
          <p>
            Nos reservamos el derecho de actualizar esta política
            periódicamente. La versión vigente siempre estará disponible en esta
            página.
          </p>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <span className="footer-copy">
              © 2026 Ilussia Agency. Todos los derechos reservados.
            </span>
            <Link href="/terminos" className="footer-link">
              Términos y Condiciones →
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
