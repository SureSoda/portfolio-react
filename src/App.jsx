import './App.css'
import { useState } from 'react';

import InfiniteScroll from './components/ReactBits/Component/InfiniteScroll.jsx';
import ShinyText from './components/ReactBits/TextAnimations/ShinyText.jsx';
import Iridescence from './components/ReactBits/Backgrounds/Iridescence.jsx';
import BlurText from './components/ReactBits/TextAnimations/BlurText.jsx';
import DecryptedText from './components/ReactBits/TextAnimations/DecryptedText.jsx';
import Dock from './components/ReactBits/Component/Dock.jsx';
import GooeyNav from './components/ReactBits/Component/GooeyNav.jsx';
import SpotlightCard from './components/ReactBits/Component/SpotlightCard.jsx';
import 'boxicons/css/boxicons.min.css';
import financeTrackerImg from './assets/images/finance-tracker.png';

function App() {
  const [activeProject, setActiveProject] = useState('current');
  return (
    <div className="main-container">
      <Iridescence
        color={[0, 0.6, 0.7]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
      {/* Sección principal */}
      <section id="home" className="section home">
        <div className="flex flex-col items-center justify-center min-h-[90vh] gap-2 text-center">
          <div style={{ margin: '0.5rem 0' }}>
            <DecryptedText
              text="Hola! Soy un estudiante de Ingenieria en Sistemas, mi nombre es:"
              speed={30}
              maxIterations={20}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
              animateOn="view"
              revealDirection="start"
              sequential={true}
            />
          </div>
          <div style={{ margin: '0.5rem 0' }}>
            <BlurText
              text="Agustin Maccio"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl"
            />
          </div>
          <div style={{ margin: '0.5rem 0' }}>
            <DecryptedText
              text="Java, Spring Boot, Python, entre otros..."
              animateOn="view"
              revealDirection="start"
              speed={30}
              sequential={true}
            />
          </div>
        </div>
        <div className="buttons" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
          <a
            href="./assets/CV_Agustin_Luis_Maccio_English.pdf"
            download
            className="shiny-button"
          >
            <ShinyText text="DESCARGAR CV" disabled={false} speed={3} />
          </a>
          <a
            href="https://www.linkedin.com/in/agustin-maccio-542421362/"
            target="_blank"
            rel="noopener noreferrer"
            className="shiny-button"
          >
            <ShinyText text="LinkedIn" disabled={false} speed={3} />
          </a>
        </div>
      </section>

      {/* Sección Skills */}
      <section id="skills" className="section skills">
        <h2>Mis Skills</h2>
        {(() => {
          const items = [
            { content: <i className='bx bxl-java' style={{ fontSize: '2rem' }}>Java</i> },
            { content: <i className='bx bxl-spring-boot' style={{ fontSize: '2rem' }}>Spring Boot</i> },
            { content: <i className='bx bxl-python' style={{ fontSize: '2rem' }}>Python</i> },
            { content: <i className='bx bxl-javascript' style={{ fontSize: '2rem' }}>Javascript</i> },
            { content: <i className='bx bxl-react' style={{ fontSize: '2rem' }}>React</i> },
            { content: <i className='bx bxl-html5' style={{ fontSize: '2rem' }}>HTML</i> },
            { content: <i className='bx bxl-css3' style={{ fontSize: '2rem' }}>CSS</i> },
            { content: <i className='bx bxl-tailwind-css' style={{ fontSize: '2rem' }}>tailwind-css</i> },
            { content: <i className='bx bxl-postgresql' style={{ fontSize: '2rem' }}>SQL</i> },
            { content: <i className='bx bxl-git' style={{ fontSize: '2rem' }}>GIT</i> },
          ];
          return (
            <div className="skills-container">
              <div style={{height: '500px', position: 'relative'}}>
                <InfiniteScroll
                  items={items}
                  isTilted={true}
                  tiltDirection='left'
                  autoplay={true}
                  autoplaySpeed={0.1}
                  autoplayDirection="down"
                  pauseOnHover={false}
                  width={"30rem"}

                />
              </div>
            </div>
          );
        })()}
      </section>

      {/* Sección Proyectos */}
      <section id="projects" className="section projects">
        <h2>Mis Proyectos</h2>
        <div style={{ height: '60px', position: 'relative' }}>
          <GooeyNav
            items={[
              { label: 'Proyecto Actual', onClick: () => setActiveProject('current') },
              { label: 'Proyectos Terminados', onClick: () => setActiveProject('finished') },
            ]}
            particleCount={50}
            particleDistances={[90, 10]}
            particleR={600}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={500}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
        <div style={{ gap: '2rem', padding: '2rem', flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          {activeProject === 'current' ? (
            <>
              <div style={{ flex: 1 }}>
                <img
                  src={financeTrackerImg}
                  alt="Finance Tracker"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '1rem', maxHeight: '100%' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>¿Qué es?</h3>
                        <p>Una aplicación web para gestionar finanzas personales. Permite registrar ingresos, egresos, transferencias, objetivos y más.</p>
                        <p>Diseño visual, aesthetic y adaptado a dispositivos móviles.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>Tecnologías usadas</h3>
                        <p>Java, Spring Boot, HTML, CSS, y Tailwind para el diseño UI.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>¿Por qué es útil?</h3>
                        <p>Facilita el control financiero personal con herramientas intuitivas, visualización clara y registros detallados.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>Repositorio GitHub</h3>
                        <a href="https://github.com/tuusuario/finance-tracker" target="_blank" rel="noopener noreferrer">
                          Ver proyecto en GitHub
                        </a>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div style={{ flex: 1 }}>
                <img
                  src="./assets/images/peluqueria.png"
                  alt="Proyecto Peluquería"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '1rem', maxHeight: '100%' }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>¿Qué es?</h3>
                        <p>Una aplicación de escritorio para la gestión de una peluquería. Permite registrar clientes, servicios, productos y turnos.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>Tecnologías usadas</h3>
                        <p>Java, Swing para la interfaz gráfica, conexión a base de datos SQLite.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>¿Por qué es útil?</h3>
                        <p>Ayuda a organizar el trabajo del peluquero, agiliza las tareas administrativas y permite un seguimiento de stock y servicios.</p>
                      </div>
                    </SpotlightCard>
                  </div>
                  <div style={{ flex: '1 1 45%', minHeight: '200px' }}>
                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                      <div>
                        <h3>Repositorio GitHub</h3>
                        <a href="https://github.com/tuusuario/peluqueria" target="_blank" rel="noopener noreferrer">
                          Ver proyecto en GitHub
                        </a>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="projects-content">
          {/* Aquí podrías agregar más detalles o proyectos si fuera necesario */}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contact" className="section contact">
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de las siguientes redes:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1.5rem' }}>
          <a href="mailto:agustinmaccio4@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            <i className='bx bx-envelope' style={{ fontSize: '2rem' }}></i>
            <p style={{ marginTop: '0.5rem' }}>agustinmaccio@gmail.com</p>
          </a>
          <a href="https://www.linkedin.com/in/agustin-maccio-542421362/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            <i className='bx bxl-linkedin' style={{ fontSize: '2rem' }}></i>
            <p style={{ marginTop: '0.5rem' }}>LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/agustinmaccio/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
            <i className='bx bxl-instagram' style={{ fontSize: '2rem' }}></i>
            <p style={{ marginTop: '0.5rem' }}>Instagram</p>
          </a>
        </div>
      </section>
      <Dock
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        items={[
          {
            icon: <i className='bx bx-home-alt'></i>,
            label: 'Inicio',
            href: '#home',
            onClick: () => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
          },
          {
            icon: <i className='bx bx-laptop'></i>,
            label: 'Skills',
            href: '#skills',
            onClick: () => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
          },
          {
            icon: <i className='bx bx-folder'></i>,
            label: 'Proyectos',
            href: '#projects',
            onClick: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          },
          {
            icon: <i className='bx bx-envelope'></i>,
            label: 'Contacto',
            href: '#contact',
            onClick: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          },
        ]}
      />
    </div>
  )
}

export default App
