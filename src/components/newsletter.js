import React from 'react'
import { Link } from 'gatsby'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h1>
          <Link to="/">this week in web</Link>
        </h1>
        <h3>subscribe to weekly newsletter</h3>
        <form
          action="//tips.us15.list-manage.com/subscribe/post?u=05ad32d0bc2eec161ad0f998b&amp;id=1b19be63b3"
          method="post"
          target="_blank"
        >
          <input className="email-address" name="EMAIL" type="email" id="mce-EMAIL" placeholder="Your Email Address" required />
          <div style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_05ad32d0bc2eec161ad0f998b_1b19be63b3" tabIndex="-1" />
          </div>
          <input className="submit-btn" id="mc-embedded-subscribe" type="submit" value="Submit" />
        </form>
        <span className="newsletter__info">
          Get weekly coverage about what's happening in <b>web community</b>. No spams.
        </span>
        <div className="newsletter__curators">
          <b>Curators </b> -
          <a href="https://github.com/gokulkrishh" target="_blank" rel="noopener noreferrer">
            Gokul
          </a>
          ·
          <a href="https://github.com/hemanth" target="_blank" rel="noopener noreferrer">
            Hemanth
          </a>
          ·
          <a href="https://github.com/shidhincr" target="_blank" rel="noopener noreferrer">
            Shidhin
          </a>
        </div>
      </div>

      <div className="newsletter__copyright">
        &copy; {new Date().getFullYear()} &middot; Built with{' '}
        <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer">
          http://gatsbyjs.org
        </a>
      </div>
    </div>
  )
}

export default Newsletter
