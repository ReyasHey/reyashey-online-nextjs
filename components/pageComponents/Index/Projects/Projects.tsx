import ExportedImage from 'next-image-export-optimizer'

import BG from "../../../../public/imgs/BGs/projectsBG.webp"

import Project from './Project/Project'
import SectionTitle from '@components/generalComponents/SectionTitle/SectionTitle'

function Projects() {
  return (
    <section id='Projects' style={{ position: "relative", padding: "5vw 0 1rem 0" }}>
        <ExportedImage
          src={ BG }
          alt="Projects Background Image"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-1" }}
        />
        <SectionTitle title="Projects" />

        <div style={{ width: "100%", marginTop: "10vw" }}>

            {/* Daily Mood Project */}
            <Project
              bgColor = "#222222"
              bgTextColor = "white"
              fgColor = "rgb(64, 64, 64)"
              fgTextColor = "white"
              orientation = "ltr"
              title1 = "Daily Mood Board"
              title2 = "A daily mood inspiration board"
              excerptElement =
              {<p>
                  WIP of an idea using Wordnik and COLOURLovers API.
                  <br />
                  This website is created to solve a very simple problem common in artists...
              </p>}
              img = "DailyMood.webp"
              imgAlt = "Daily Mood Board Page"
              imgWidth= {925}
              imgHeight= {925}
              imgOrientation = "portrait"
              url = "https://reyashey.github.io/DailyMoodBoard/"
              repo = "https://github.com/ReyasHey/DailyMoodBoard"
            />

            {/* Lemons Project */}
            <Project
              bgColor = "#ffdf3d"
              bgTextColor = "black"
              fgColor = "rgb(67, 183, 67)"
              fgTextColor = "white"
              orientation = "rtl"
              title1 = "Lemons Home Page"
              title2 = "7-day Home Page challenge"
              excerptElement =
              {<p>
                  A project created as a 7-day challenge to design and code a mockup website landing page
                  <br />
                  It started as a rough concept and developed into a simple home page...
              </p>}
              img = "Lemons-Home-Page.webp"
              imgAlt = "Lemons Home Page"
              imgWidth= {1093}
              imgHeight= {925}
              imgOrientation = "landscape"
              url = "https://reyashey.github.io/Lemons-Landing-Page/"
              repo = "https://github.com/ReyasHey/Lemons-Landing-Page"
            />
        </div>
    </section>
  )
}

export default Projects
