import React from 'react'
import {contactsData} from '../../../data/contacts'
import { ContactCard } from '../../components/contacts/ContactCard'
import styles from './Contacts.module.css'

const Contacts = () => {

    let contacts = contactsData;
  return (
    <>
        <h2 className={styles.title_contact}>online contacts</h2>
        
        <div className={styles.hotelList}>
        {contacts.map((contact) => {
        
          return (
            <ContactCard
              key={contact.slug}
              img={contact.photo}
              name={contact.name}
              description={contact.description}
              contacts={contact.contacts}
              country={contact.country}
              followers={contact.followers}
            />
          );
        })}
      </div>
    </>
  )
}

export {Contacts}