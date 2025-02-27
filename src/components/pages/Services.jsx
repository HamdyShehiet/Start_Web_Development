import { Link } from "react-router";

function Services() {

    return (
        <>
        <section className="our-services">
            <div className="container row flex flex-column">
                <div className="info row flex flex-column">
                    <span className="subtitle">PLANS</span>
                    <h1 className="title">Our Services</h1>
                    <p className="special-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="services-list row grid">
                    <div className="service flex flex-column">
                        <div className="service-details row flex flex-column">
                            <span className="type">Basic</span>
                            <div className="price">
                                <strong>$100</strong>
                                <span className="per-month">/month</span>
                            </div>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        </div>
                        <div className="features flex row">
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                        </div>
                        <Link to="#" className="link-btn row">Learn More</Link>
                    </div>
                    <div className="service flex flex-column">
                        <div className="service-details row flex flex-column">
                            <span className="type">Plus</span>
                            <div className="price">
                                <strong>$250</strong>
                                <span className="per-month">/month</span>
                            </div>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        </div>
                        <div className="features flex row">
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                        </div>
                        <Link to="#" className="link-btn row">Learn More</Link>
                    </div>
                    <div className="service flex flex-column">
                        <div className="service-details row flex flex-column">
                            <span className="type">Pro</span>
                            <div className="price">
                                <strong>$400</strong>
                                <span className="per-month">/month</span>
                            </div>
                            <p className="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        </div>
                        <div className="features flex row">
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                            <div className="feature flex">
                                <img src="./assets/icons/true.webp" alt="True Icon" />
                                <p className="special-description">lorem ipsum, dolor sit</p>
                            </div>
                        </div>
                        <Link to="#" className="link-btn row">Learn More</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Services;