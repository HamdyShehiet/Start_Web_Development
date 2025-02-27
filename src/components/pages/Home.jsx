import { Link } from "react-router";

function Home() {
    const ourTeam = [
        {
            id    : 1,
            image : "./src/assets/images/person-1.webp",
            name  : "Peg Legge",
            jop   : "CEO"
        },
        {
            id    : 2,
            image : "./src/assets/images/person-2.webp",
            name  : "Richard Guerra",
            jop   : "CTO"
        },
        {
            id    : 3,
            image : "./src/assets/images/person-3.webp",
            name  : "Alexandra Stolz",
            jop   : "DESIGNER"
        },
        {
            id    : 4,
            image : "./src/assets/images/person-4.webp",
            name  : "Janet Bray",
            jop   : "DEVELOPER"
        },
    ]
    return (
        <>
        <section className="hero similar-section-one ">
            <div className="container row grid">
                <article className="info col flex">
                    <span className="subtitle">WELCOME</span>
                    <h1 className="title">Lorem ipsum dolor sit amet consectetur </h1>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Link to="/" className="link-btn">Explore</Link>
                </article>
                <div className="image col"><img src="./src/assets/images/hero.webp" alt="Hero Image" /></div>
            </div>
        </section>
        <section className="partners similar-section-two">
            <div className="container row flex">
                <div className="info  flex">
                    <span className="subtitle">PARTNERS</span>
                    <h2 className="title">Lorem Ipsum Dolor</h2>
                    <p className="special-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="parteners-list  grid">
                    <a href="#"><img src="./src/assets/images/google.webp" alt="Google Image" /></a>
                    <a href="#"><img src="./src/assets/images/microsoft.webp" alt="Microsoft Image" /></a>
                    <a href="#"><img src="./src/assets/images/airbnb.webp" alt="Airbnb Image" /></a>
                    <a href="#"><img src="./src/assets/images/facebook.webp" alt="Facebook Image" /></a>
                    <a href="#"><img src="./src/assets/images/spotify.webp" alt="Spotify Image" /></a>
                </div>
                <Link to="/" className="link-btn">Learn More</Link>
            </div>
        </section>
        <section className="communication similar-section-one ">
            <div className="container row grid">
                <div className="image col"><img src="./src/assets/images/communication.webp" alt="Communication Image" /></div>
                <article className="info col flex">
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur </h2>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Link to="/" className="link-btn">Learn More</Link>
                </article>
            </div>
        </section>
        <section className="analyze similar-section-one">
            <div className="container row grid">
                <article className="info col flex">
                    <h2 className="title">Lorem ipsum dolor sit amet consectetur </h2>
                    <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Link to="/" className="link-btn">Learn More</Link>
                </article>
                <div className="image col"><img src="./src/assets/images/man-analyze.webp" alt="Communication Image" /></div>
            </div>
        </section>
        <section className="our-team similar-section-two">
            <div className="container row flex">
                <div className="info  flex">
                    <span className="subtitle">PARTNERS</span>
                    <h2 className="title">Lorem Ipsum Dolor</h2>
                    <p className="special-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="our-team-list  row grid">
                    {
                    ourTeam.map(person => {
                        return (
                        <div key={person.id} className="person flex-column col">
                            <div className="person-image"><img src={person.image} alt="Person Image" /></div>
                            <div className="person-details">
                            <h3 className="subtitle">{person.name}</h3>
                            <span>{person.jop}</span>
                            </div>
                        </div>
                        )
                    })
                    }
                </div>
                <Link to="/" className="link-btn">View Team</Link>
            </div>
        </section>
        </>
    )
}

export default Home;