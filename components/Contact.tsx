import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Alguma dúvida? <span className="colored">Entre em contato.</span></h2>
      <p className="contact__paragraph">Estamos ansiosos para ouvir sua opnião. Sinta-se a vontade para entrar em contato se tiver alguma dúvida!</p>
      <a href="https://www.facebook.com/dessaMArte">
        <button>Contato</button>
      </a>
    </div>
  )
}