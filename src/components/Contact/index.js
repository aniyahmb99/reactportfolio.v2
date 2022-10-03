import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState, Fragment } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    let MY_PUBLIC_KEY = process.env.MY_PUBLIC_KEY
    let MY_SERVICE_ID = process.env.MY_SERVICE_ID
    let MY_TEMPLATE_ID = process.env.MY_TEMPLATE_ID
    e.preventDefault()

    emailjs
      .sendForm(
        'service_kr3408i',
        'template_swydckq',
        form.current,
        'R0s-DY7OWbUwvrvE0'
        // `${MY_SERVICE_ID}`,
        // `${MY_TEMPLATE_ID}`,
        // form.current,
        // `${MY_PUBLIC_KEY}`
      )
      .then(
        () => {
          alert('Message sent successfully!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message, try again')
        }
      )
  }

  return (
    <Fragment>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="p-text">
            I am interested in full-time employment at an established or startup
            tech company where the opportunities for continuous learning and
            growth are exciting and consistent. Please feel free to contact me
            using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Aniyah Butler,
          <br />
          Columbus, Ohio, <br />
          US 43229 <br />
          <span>aniyah_mb@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[39.983334, -82.98333]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[39.983334, -82.98333]}>
              <Popup className="popup">
                Aniyah lives here, come over for a cup of coffee!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  )
}

export default Contact
