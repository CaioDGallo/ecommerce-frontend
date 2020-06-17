import styles from './contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>Alguma dúvida? <span className={styles.colored}>Entre em contato.</span></h2>
      <p className={styles.contact__paragraph}>Estamos ansiosos para ouvir sua opnião. Sinta-se a vontade para entrar em contato se tiver alguma dúvida!</p>
      <a href="https://www.facebook.com/dessaMArte">
        <button>Contato</button>
      </a>
    </div>
  )
}