import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
      <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/20000058?s=460&u=7ac6acb689ea06313700a582f9fb7aeebb2417a2&v=4" alt="Patricio Martins"/>
        <div>
          <strong>Patricio Martins</strong>
          <span>Geografia</span>
        </div>
      </header>

      <p>
        O mestre que entende todas as divisões da Terra.
        <br /><br />
        Apaixonado por fazer a terra tremer com sua capacidade incrivel de reconher pedras ele ama o que faz.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
