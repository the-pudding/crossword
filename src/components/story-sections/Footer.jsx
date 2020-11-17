import React, { useEffect, useState } from "react"
import {
  FooterCrossword,
  FooterWrapper,
  SocialWrapper,
  FooterSquare,
} from "../../styles/styles.js"
import Logo from "../../svg/pudding-logo.svg"
import Facebook from "../../svg/facebook.svg"
import Twitter from "../../svg/twitter.svg"
import Patreon from "../../svg/patreon.svg"
import Instagram from "../../svg/instagram.svg"
import _ from "lodash"

const Footer = () => {
  const [mostRecentLinks, setMostRecentLinks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const v = Date.now()
      const url = `https://pudding.cool/assets/data/stories.json?v=${v}`

      const response = await fetch(url)
      const data = await response.json()
      setMostRecentLinks(
        _.take(
          data.filter(d => d.url !== "2020/11/crossword"),
          5
        )
      )
    }
    fetchData()
  }, [])

  console.log({ mostRecentLinks })

  return (
    <FooterWrapper>
      <h3>HOT TAKES, COOL VIZ</h3>

      <FooterCrossword>
        {_.range(0, 8).map((d, i) => (
          <FooterSquare
            key={i}
            top={i < 4}
            endOfRow={i === 3 || i === 7}
            filled={i === 1 || i === 4 || i === 7}
          >
            {i !== 1 && i !== 4 && i !== 7 && mostRecentLinks.length > i && (
              <div>mostRecentLinks[i]</div>
            )}
          </FooterSquare>
        ))}
      </FooterCrossword>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <a href="https://pudding.cool/" style={{ backgroundImage: "none" }}>
          <Logo style={{ height: "45px" }} />
        </a>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://pudding.cool/about/"
            style={{ fontSize: "0.7rem", backgroundImage: "none" }}
          >
            <strong>ABOUT</strong>
          </a>
          <SocialWrapper href="https://www.facebook.com/pudding.viz/">
            <Facebook />
          </SocialWrapper>
          <SocialWrapper href="https://twitter.com/puddingviz">
            <Twitter />
          </SocialWrapper>
          <SocialWrapper href="https://www.instagram.com/the.pudding/">
            <Instagram />
          </SocialWrapper>
          <SocialWrapper href="https://www.patreon.com/thepudding/posts">
            <Patreon />
          </SocialWrapper>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
