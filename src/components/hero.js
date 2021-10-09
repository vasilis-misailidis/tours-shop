import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content, phone, email, facebook }) => (
  <div className={styles.hero}>
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <p className={styles.content}>{content}</p>}
      {phone && <p className={styles.phone}>
          <a href={`callto:+${phone}`}>+{phone}</a>
      </p>}
      {email && <p className={styles.email}>
          <a href={`mailto:${email}`}>{email}</a>
      </p>}
      {facebook && <p className={styles.facebook}>
          Facebook: <a href={`https://www.facebook.com/${facebook}`}>{facebook}</a>
      </p>}
    </div>
  </div>
)

export default Hero
