import { ContactForm } from "./components/contact-form/ContactForm"
import { LocationMap } from "./components/location-map/LocationMap"

export default function Contact() {
  return (
    <div className="px-20 pb-10 grid grid-cols-12 text-secondary-950/70">
      <div className="col-span-4">
        <ContactForm />
      </div>
      <div className="pl-10 col-span-8">
        <LocationMap />
      </div>
    </div>
  )
}
