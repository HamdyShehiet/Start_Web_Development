import { Link } from "react-router";

function Portfolio() {

    return (
        <>
        <section className="our-works">
            <div className="container row flex">
                <div className="info row flex">
                    <span className="subtitle">WORKS</span>
                    <h1 className="title">Portfolio</h1>
                    <p className="special-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="works-list row grid">
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-1.webp" alt="LOG-O Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-2.webp" alt="LOGO Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-3.webp" alt="YOURNAME Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-4.webp" alt="YOUR SLOGAN Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-5.webp" alt="LOGO Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-6.webp" alt="Trick Or Treat Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-7.webp" alt="HALLOWEEN Website Image" /></a>
                    <a href="#" className="work-item col"><img src="./src/assets/images/work-8.webp" alt="Tecnology Company Website Image" /></a>
                </div>
                <Link to="#" className="link-btn row">Learn More</Link>
            </div>
        </section>
        </>
    )
}

export default Portfolio;