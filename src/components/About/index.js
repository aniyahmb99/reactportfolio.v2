import { useState, useEffect, Fragment } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faVuejs,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <Fragment>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="p-text">
            I'm a very goal-driven and ambitious Frontend Developer looking for
            a role at the right company with the opportunity to work with the
            latest and greatest technologies and to continue my learning journey
            in coding.
          </p>
          <p className="p-text" align="LEFT">
            I'm naturally curious, confident in my skills, and always working on
            the next project to hone and advance my skillset.
          </p>
          <p className="p-text">
            If I need to define myself in one sentence that would be a
            free-spirited, strongly opinionated, tech obsessed, and family
            oriented person who has developed a deep appreciation and excitement
            for all things tech!!{' '}
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#C94C36" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faVuejs} color="#58A174" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </Fragment>
  )
}

export default About
