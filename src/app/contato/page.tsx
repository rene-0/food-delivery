import { ContactForm } from "./components/contact-form/ContactForm"
import { LocationMap } from "./components/location-map/LocationMap"

export default function Contact() {
  return (
    <div className="px-5 lg:px-10 2xl:px-20 pb-10 grid grid-cols-12 text-secondary-950/70">
      <div className="mb-5 md:mb-0 col-span-12 md:col-span-5 lg:col-span-4">
        <ContactForm />
      </div>
      <div className="md:pl-10 col-span-12 md:col-span-7 lg:col-span-8">
        <LocationMap />
      </div>
    </div>
  )
}
