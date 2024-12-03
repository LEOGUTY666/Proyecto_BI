import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/imagenes/logo.png" alt="Logo de ZERCCOM" />
        </div>
        <button className="menu-toggle" aria-label="Abrir menú">
          &#9776;
        </button>
        <nav className="navbar">
          <ul>
            <button
              className="btn"
              onClick={() => (window.location.href = 'https://docs.google.com/spreadsheets/d/1IXlbW_KodZVBDB6Ww2YJaMm7qSebInJR/edit?usp=sharing&ouid=117892296795538962752&rtpof=true&sd=true')}
            >
              Excel
            </button>
            <button
              className="btn"
              onClick={() =>
                (window.location.href =
                  'https://app.powerbi.com/view?r=eyJrIjoiMjU3YzNiNWItMzE4YS00Y2M2LTk2NzQtNmFjNDZjZTViZmEwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9')
              }
            >
              Inventarios
            </button>
            <button
              className="btn"
              onClick={() =>
                (window.location.href =
                  'https://app.powerbi.com/view?r=eyJrIjoiMDNhNTEzZDItYTA0Ni00YTQ5LTg1ZGMtNDQ1YmFhOTA1MzRhIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9')
              }
            >
              Actividades
            </button>
            <button
              className="btn"
              onClick={() =>
                (window.location.href =
                  'https://app.powerbi.com/view?r=eyJrIjoiMDNhNTEzZDItYTA0Ni00YTQ5LTg1ZGMtNDQ1YmFhOTA1MzRhIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9')
              }
            >
              Compras
            </button>
          </ul>
        </nav>
      </header>

      <section id="galeria">
        <img src="/imagenes/1.jpg" alt="Galería 1" />
        <img src="/imagenes/2.jpg" alt="Galería 2" />
        <img src="/imagenes/3.jpg" alt="Galería 3" />
        <img src="/imagenes/4.jpg" alt="Galería 4" />
        <img src="/imagenes/5.jpg" alt="Galería 5" />
        <img src="/imagenes/6.jpg" alt="Galería 6" />
        <img src="/imagenes/7.jpg" alt="Galería 7" />
        <img src="/imagenes/8.jpg" alt="Galería 8" />
        <img src="/imagenes/9.jpg" alt="Galería 9" />
        <img src="/imagenes/10.jpg" alt="Galería 10" />
      </section>

      <main>
        <section id="inventarios" className="section">
          <h2>Inventarios</h2>
          <p>
            En el inventario actual se gestionan un total de 20 productos
            diferentes. El total acumulado de unidades en el inventario es de
            1650. El producto con mayor cantidad disponible es 'Foco Ahorrador'
            con un total de 300 unidades. El producto con menor cantidad
            disponible es 'Panel Solar' con un total de 10 unidades. Entre los
            proveedores destacados están 'Energía Viva' y 'SolarTech'.
          </p>
        </section>

        <section id="compras-ventas" className="section">
          <h2>Compras/Ventas</h2>
          <p>
            En el registro de compras se gestionaron un total de 20 compras
            diferentes. El total acumulado de unidades compradas es de 1650. El
            gasto total en compras asciende a 440,930.00 PEN. La compra con
            mayor cantidad fue 'P009' con un total de 300 unidades adquiridas
            del proveedor 'Energía Viva'. La compra más costosa fue 'P017' con
            un costo total de 69,300.00 PEN, realizada al proveedor 'Sensores
            Activos'.
          </p>
        </section>

        <section id="actividades" className="section">
          <h2>Actividades</h2>
          <p>
            En el periodo analizado se gestionaron un total de 120 proyectos.
            Los ingresos acumulados fueron de 130,852,589.60 PEN, con costos de
            77,246,145.40 PEN, resultando en ganancias netas de 53,606,444.20
            PEN. El proyecto con mayor ganancia fue 'Proyecto 56', con una
            ganancia neta de 1,705,299.40 PEN. El proyecto con mayor pérdida fue
            'Proyecto 29', con una pérdida de -912,585.20 PEN.
          </p>
        </section>

        <section id="dashboard" className="section">
          <h2>Dashboard</h2>
          <div className="grid">
            <div className="card">
              <h3>Inventarios</h3>
              <iframe
                title="Inventario"
                width="100%"
                height="200"
                src="https://app.powerbi.com/view?r=eyJrIjoiMjU3YzNiNWItMzE4YS00Y2M2LTk2NzQtNmFjNDZjZTViZmEwIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card">
              <h3>Compras</h3>
              <iframe
                title="Compras"
                width="100%"
                height="200"
                src="https://app.powerbi.com/view?r=eyJrIjoiMmVmNzAxZjUtOTc5MS00MmZmLTllMGMtNTQ3NDg0NTZhMmNjIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="card">
              <h3>Actividades</h3>
              <iframe title="Actividades" 
              width="100%" 
              height="200" 
              src="https://app.powerbi.com/view?r=eyJrIjoiMDNhNTEzZDItYTA0Ni00YTQ5LTg1ZGMtNDQ1YmFhOTA1MzRhIiwidCI6IjEzODQxZDVmLTk2OGQtNDYyNC1hN2RhLWQ2OGE2MDA2YTg0YSIsImMiOjR9" 
              frameborder="0" 
              allowFullScreen="true">
              </iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 ZERCCOM. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App
