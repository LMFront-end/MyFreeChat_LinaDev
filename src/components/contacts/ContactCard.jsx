import React from 'react'
import styles from '../contacts/ContactCard.module.css';


const ContactCard = (props) => {
  return (
    <>
    <div className={styles.hotelCard} key={props.slug}>
          <img
            src={props.img}
            alt={props.name}
            className={styles.hotelCard__img}
          />
          <h3 className={styles.hotelCard__name}>{props.name}</h3>
          <p className={styles.hotelCard__description}>{props.description}</p>

          <div className={styles.hotel__location}>
            

            <span className={styles.hotelCard__location__text}>
            País:  {props.country}
            </span>
          </div>

          <div className={styles.hotelCard__info}>
            <div className={styles.hotelCard__info__room}>
              
              <span className={styles.hotelCard__info__room__text}>
              Contactos: {props.contacts} 
              </span>
            </div>

            <div className={styles.hotelCard__info__price}>
              <span className={styles.hotelCard__info__price__text}>
                seguidores: {props.followers}
              </span>
            </div>
          </div>

          <button className={styles.hotelCard__btn}>Messenger</button>
        </div>
    
    </>
  )
}

export {ContactCard}