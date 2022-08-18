// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
// import { extend } from "@react-three/fiber"
// import architect from "../assets/fonts/Architects Daughter_Regular.json"

// export const About = () => {
//   const font = new FontLoader().parse(architect)
//   extend({ TextGeometry })
//   return (
//     <mesh position={[1.5, 0, 0]} rotation-y={0.02} scale={1}>
//       <textGeometry args={["Hi there", { font, size: 0.2, height: 1 }]} />
//       <meshPhysicalMaterial attach="material" color={"black"} scale={1} />
//     </mesh>
//   )
// }
import { Html } from "@react-three/drei"
export const About = () => {
  return (
    <Html>
      <p className="text">
        <b>Hi there,</b> I'm Fahim Zada a software engineer who is fond of web technologies and has been learning and
        implementing them since 2013—having adequate experience in both LAMP and MERN stacks. <b>Country:</b> Pakistan,{" "}
        {""}
        <b>Languages:</b> Pashto, Urdu, English.
      </p>
      <p className="ml">
        <h3>Education</h3>
        <p>BSE (Software Engineering) from COMSATS Abbottabad</p>
      </p>
      <div className="ml">
        <h3>Experience</h3>
        <p>
          <ol>
            <li>
              Full Stack Developer | Freelance
              <ul>Oct 2015 - Present</ul>
              <ul>JavaScript · PHP · React.js · Express.js · MongoDB · WordPress</ul>
            </li>
            <li>
              Full Stack Developer
              <ul>NESLITS - Contract, Jan 2021 - Apr 2021</ul>
              <ul>Next.js · JavaScript · React.js · Express.js · MongoDB</ul>
            </li>
            <li>
              Full Stack Developer
              <ul>DOPMENT - Contract , Mar 2022 - Jun 2022</ul>
              <ul>Tailwind CSS · Heroku · React.js · Express.js · MongoDB</ul>
            </li>
            <li>
              Full Stack Developer
              <ul>IQSOFT - Contract, Jul 2021 - Jun 2022</ul>
              <ul>Bootstrap · Redux Thunk · axios · React.js · Express.js</ul>
            </li>
          </ol>
        </p>
        <p>
          <a href="https://www.facebook.com/faheem.zada.9/" target="_blank" rel="noreferrer">
            #Facebook
          </a>
          <a href="https://www.linkedin.com/in/fahimzada/" target="_blank" rel="noreferrer">
            #Linkedin
          </a>
          <a href="https://www.instagram.com/itsfz1/" target="_blank" rel="noreferrer">
            #Instagram
          </a>
          <a href="https://github.com/itsfz1" target="_blank" rel="noreferrer">
            #Github
          </a>
          <a href="mailto:me@fahimzada.com" target="_blank" rel="noreferrer">
            #Mail
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=923349093082&text=Thank%20You%20For%20Contacting%20Will%20Get%20Back%20To%20You%20As%20Soon%20As%20Possible%20:)"
            target="_blank"
            rel="noreferrer"
          >
            #Whatsapp
          </a>
        </p>
      </div>
    </Html>
  )
}
