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
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers. This block
            describes the project author. Here you should indicate your name,
            what you do, and which development technologies you know. You can
            also talk about your experience with TripleTen, what you learned
            there, and how you can help potential customers Here you should
            indicate your name, what you do, and which development technologies
            you know. You can also talk about your experience with TripleTen,
            what you learned there, and how you can help potential customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
