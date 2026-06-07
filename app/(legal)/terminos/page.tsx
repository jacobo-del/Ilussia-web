import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Ilussia Agency",
  description:
    "Términos y condiciones de uso de los servicios de Ilussia Agency.",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
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
            Términos y
            <br />
            Condiciones
          </h1>
          <p className="meta">Última actualización: Junio 2026 &nbsp;·&nbsp; Versión 1.0</p>
        </div>

        <div className="toc">
          <p className="toc-title">Contenido</p>
          <ol>
            <li><a href="#aceptacion">Aceptación de los términos</a></li>
            <li><a href="#servicios">Descripción de servicios</a></li>
            <li><a href="#uso">Uso de la plataforma</a></li>
            <li><a href="#cuentas">Cuentas de usuario</a></li>
            <li><a href="#pagos">Pagos y facturación</a></li>
            <li><a href="#propiedad">Propiedad intelectual</a></li>
            <li><a href="#datos">Datos y privacidad</a></li>
            <li><a href="#limitacion">Limitación de responsabilidad</a></li>
            <li><a href="#suspension">Suspensión del servicio</a></li>
            <li><a href="#ley">Ley aplicable</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ol>
        </div>

        <div className="highlight-box">
          <p>
            Al acceder y utilizar la plataforma y servicios de{" "}
            <strong>Ilussia Agency</strong>, aceptas quedar vinculado por los
            presentes Términos y Condiciones. Si no estás de acuerdo con alguno
            de estos términos, te pedimos que no utilices nuestros servicios.
          </p>
        </div>

        <section id="aceptacion">
          <h2>
            <span className="num">01</span> Aceptación de los términos
          </h2>
          <p>
            Estos Términos y Condiciones regulan el acceso y uso de la
            plataforma de gestión de clientes, automatizaciones y marketing
            digital operada por <strong>Ilussia Agency</strong> bajo el dominio{" "}
            <strong>ilussia.agency</strong> y sus subdominios.
          </p>
          <p>
            El uso continuado de la plataforma implica la aceptación plena de
            estos términos, así como de nuestra Política de Privacidad.
          </p>
        </section>

        <section id="servicios">
          <h2>
            <span className="num">02</span> Descripción de servicios
          </h2>
          <p>Ilussia Agency ofrece, entre otros, los siguientes servicios:</p>
          <ul>
            <li>
              <strong>CRM y gestión de contactos:</strong> seguimiento de
              prospectos, pipelines de ventas y comunicación con clientes.
            </li>
            <li>
              <strong>Email marketing:</strong> diseño, programación y envío de
              campañas de correo electrónico.
            </li>
            <li>
              <strong>Automatizaciones de marketing:</strong> flujos de trabajo
              automatizados para nurturing, seguimiento y calificación de leads.
            </li>
            <li>
              <strong>Sitios web y funnels:</strong> construcción y alojamiento
              de páginas de aterrizaje y embudos de conversión.
            </li>
            <li>
              <strong>Reportes y analítica:</strong> dashboards de rendimiento de
              campañas y conversiones.
            </li>
          </ul>
          <p>
            Los servicios específicos contratados se detallarán en el acuerdo o
            propuesta comercial individual de cada cliente.
          </p>
        </section>

        <section id="uso">
          <h2>
            <span className="num">03</span> Uso de la plataforma
          </h2>
          <p>Al utilizar nuestra plataforma, te comprometes a:</p>
          <ul>
            <li>
              Proporcionar información veraz y actualizada durante el registro.
            </li>
            <li>
              No utilizar la plataforma para enviar comunicaciones no solicitadas
              (spam).
            </li>
            <li>
              No intentar acceder a áreas restringidas del sistema sin
              autorización.
            </li>
            <li>
              No realizar actividades que puedan dañar, deshabilitar o
              sobrecargar la infraestructura.
            </li>
            <li>
              Cumplir con las leyes aplicables en materia de protección de datos
              y comunicaciones electrónicas.
            </li>
          </ul>
          <p>
            Ilussia Agency se reserva el derecho de suspender el acceso a
            cualquier usuario que incumpla estas condiciones.
          </p>
        </section>

        <section id="cuentas">
          <h2>
            <span className="num">04</span> Cuentas de usuario
          </h2>
          <p>
            Cada cliente recibe credenciales de acceso personales e
            intransferibles. Eres responsable de mantener la confidencialidad de
            tu contraseña y de todas las actividades realizadas bajo tu cuenta.
          </p>
          <p>
            En caso de uso no autorizado o brecha de seguridad, debes
            notificarnos de inmediato a <strong>hola@ilussia.agency</strong>.
          </p>
        </section>

        <section id="pagos">
          <h2>
            <span className="num">05</span> Pagos y facturación
          </h2>
          <p>
            Los servicios de Ilussia Agency se facturan conforme a los planes y
            acuerdos establecidos en la propuesta comercial aceptada por el
            cliente. Las condiciones específicas incluyen:
          </p>
          <ul>
            <li>
              Los pagos se realizan en los plazos acordados (mensual, trimestral
              o según contrato).
            </li>
            <li>
              El impago de facturas puede resultar en la suspensión temporal del
              servicio.
            </li>
            <li>
              No se realizan reembolsos por períodos ya iniciados salvo causa
              justificada.
            </li>
            <li>
              Los precios pueden ajustarse con un aviso previo de 30 días.
            </li>
          </ul>
        </section>

        <section id="propiedad">
          <h2>
            <span className="num">06</span> Propiedad intelectual
          </h2>
          <p>
            Todo el contenido, diseño, código, flujos de automatización,
            plantillas y materiales desarrollados por Ilussia Agency son
            propiedad de la agencia, salvo que se acuerde expresamente lo
            contrario por escrito.
          </p>
          <p>
            Los activos de marca del cliente (logotipos, imágenes, textos)
            permanecen como propiedad del cliente. Al compartirlos con Ilussia
            Agency, otorgas una licencia limitada para usarlos exclusivamente en
            la prestación de los servicios contratados.
          </p>
        </section>

        <section id="datos">
          <h2>
            <span className="num">07</span> Datos y privacidad
          </h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <Link href="/privacidad" style={{ color: "var(--accent)" }}>
              Política de Privacidad
            </Link>
            . Como cliente, eres responsable de obtener los consentimientos
            necesarios de tus propios contactos para el envío de comunicaciones
            de marketing a través de nuestra plataforma.
          </p>
          <p>
            Ilussia Agency actúa como encargado del tratamiento de los datos de
            tus contactos, procesándolos únicamente según tus instrucciones y en
            el marco de los servicios contratados.
          </p>
        </section>

        <section id="limitacion">
          <h2>
            <span className="num">08</span> Limitación de responsabilidad
          </h2>
          <p>Ilussia Agency no será responsable por:</p>
          <ul>
            <li>
              Pérdidas de negocio derivadas de interrupciones del servicio fuera
              de nuestro control.
            </li>
            <li>
              Resultados específicos de campañas publicitarias o de marketing.
            </li>
            <li>
              Daños causados por el uso incorrecto de la plataforma por parte del
              cliente.
            </li>
            <li>
              Fallos en servicios de terceros (Meta, proveedores de email, etc.).
            </li>
          </ul>
          <p>
            En ningún caso la responsabilidad total de Ilussia Agency excederá el
            importe pagado por el cliente en los últimos 3 meses de servicio.
          </p>
        </section>

        <section id="suspension">
          <h2>
            <span className="num">09</span> Suspensión y terminación
          </h2>
          <p>
            Cualquiera de las partes puede terminar la relación de servicio con
            un preaviso de <strong>30 días</strong> por escrito, salvo que el
            contrato específico establezca condiciones distintas.
          </p>
          <p>
            Ilussia Agency puede suspender el servicio de forma inmediata en caso
            de incumplimiento grave de estos Términos, impago reiterado o uso de
            la plataforma para actividades ilícitas.
          </p>
          <p>
            Tras la terminación, los datos del cliente estarán disponibles para
            exportación durante 30 días, transcurridos los cuales podrán ser
            eliminados definitivamente.
          </p>
        </section>

        <section id="ley">
          <h2>
            <span className="num">10</span> Ley aplicable
          </h2>
          <p>
            Estos Términos y Condiciones se rigen por las leyes de la{" "}
            <strong>República de Guatemala</strong>. Cualquier controversia
            derivada de la interpretación o ejecución de estos términos se
            resolverá preferentemente por vía de negociación directa entre las
            partes.
          </p>
          <p>
            De no alcanzarse un acuerdo, las partes se someten a la jurisdicción
            de los tribunales competentes de Guatemala.
          </p>
        </section>

        <section id="contacto">
          <h2>
            <span className="num">11</span> Contacto
          </h2>
          <p>
            Para cualquier consulta relacionada con estos Términos y Condiciones,
            puedes contactarnos en:
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
            Nos reservamos el derecho de modificar estos términos. Los cambios
            serán notificados con al menos 15 días de anticipación a través de la
            plataforma o por correo electrónico.
          </p>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <span className="footer-copy">
              © 2026 Ilussia Agency. Todos los derechos reservados.
            </span>
            <Link href="/privacidad" className="footer-link">
              Política de Privacidad →
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
