import "./About.css";
import aboutlogo from "../../images/aboutlogo.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__image">
          <img
            src={aboutlogo}
            alt="Author Image"
            className="about__image"
          ></img>
        </div>
        <div className="about__text-container">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hello, I’m Matthew Peldunas, a passionate Web Developer from New Jersey. 
            I started my journey into web development at TripleTen, where I not only 
            discovered my passion for coding but also developed a solid foundation in various technologies. 
            In the program, I learned how to code in HTML and CSS formats and eventually progressed into more
            advanced areas such as JavaScript, React, Node, and Express. I also
            became proficient in Git, which has been helpful for managing and
            collaborating on various projects within the program. I enjoyed my time at TripleTen,
            where I aquired new skills and the confidence to handle a wide range of
            challenges. As a recent graduate, I am ready to take ona fulfilling and successful career!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
