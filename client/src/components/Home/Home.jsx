import './Home.css';

const Home = () => {
    return (
        <>

    <div className="content">

      <div className="hero-container">
        <img src="/heroImage.webp" alt="Hero" className="hero-image" />
      </div>

      <div className="testimonial-container">
        <div className="divider">
        </div>
        <div className="testimonial">
        "Finding peace was a journey, and with your compassionate guidance, I've discovered a strength I never knew I had." <br></br>- Patient
        </div>
         <div className="divider">
        </div>
      </div>

      <div className="profile-container">
  <img src="/portrait_outline.webp" alt="Sharon's portrait" className="profile-image" />
  <div className="about">
  <div class="centered-square"></div> 
    <h2>About Me:</h2>
    <p>Hi, I'm <strong>Sharon</strong>, and I welcome you with a warm heart and open arms. My approach to therapy is rooted in understanding and empathy. For years, I've dedicated myself to providing a safe space where individuals can feel heard and supported as they explore the landscapes of their inner worlds.</p>
    <p>My journey into therapy was inspired by the profound belief that everyone has the innate capacity to overcome life's hurdles. I specialize in guiding people through the complexities of emotional wellbeing, relationship dynamics, and self-discovery.</p>
    <p>When I'm not in session, I cherish my time in nature, finding peace in the simple act of walking through the woods or tending to my garden. I also enjoy expressing myself through painting, which I find to be a meditative and revealing process.</p>
    <p>I am here to walk with you on your path to healing and self-acceptance, celebrating each step towards the joy and balance you deserve.</p>
  </div>
</div>

      </div>
      
      </>
    );
  };
  
  export default Home;
  