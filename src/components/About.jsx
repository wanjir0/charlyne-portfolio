function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image-wrapper">
          <img
            src="https://i.ibb.co/Kj6wDPTH/my-photo.jpg"
            alt="Charlyne Wanjiru"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <p>
            Hi! I'm Charlyne Wanjiru, a frontend developer based in Kenya.
            I enjoy building clean and user-friendly websites that solve real problems.
          </p>
          <p>
            I'm currently growing my skills in HTML, CSS, JavaScript ,and can work with a MERN fullstack approach .
            I love learning new things and I'm always working on something new.
            I'm also about mildly knowledgeable with mysql database.
            An an upcoming Angular developer and a passionate learner, I'm excited to continue growing my skills and building amazing projects in the future.
          </p>
          <a href="#contact" className="about-btn">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About