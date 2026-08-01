import { socialLinks } from '@/data/social-links'
import ContactCard from './contact-card'

export default function ContactList () {
  const primaryContact = socialLinks.find((contact) => contact.id === 'whatsapp')
  const secondaryContacts = socialLinks.filter((contact) => contact.id !== 'whatsapp')

  return (
    <div className='grid gap-3 sm:gap-4'>
      {primaryContact !== undefined && (
        <ContactCard contact={primaryContact} revealIndex={0} variant='primary' />
      )}

      <div className='grid gap-2.5 sm:grid-cols-3 sm:gap-4'>
        {secondaryContacts.map((contact, index) => (
          <ContactCard contact={contact} key={contact.id} revealIndex={index + 1} />
        ))}
      </div>
    </div>
  )
}
