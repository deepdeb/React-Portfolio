import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative">
            <div className="container relative h-screen">
                <div className="hero-content max-w-[700px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1
                        className="text-[4rem] font-extrabold mb-5 leading-[1.2]"
                        style={{
                            marginBottom: '20px',
                            background: 'var(--gradient)', // Direct variable use
                            WebkitBackgroundClip: 'text',   // CamelCase for vendor prefix
                            backgroundClip: 'text',
                            color: 'transparent',
                            textShadow: 'var(--text-shadow)', // Direct variable use
                        }}
                    >
                        Hi, I'm <span className="text-[var(--light)] inline-block">Pradeep Debnath</span>
                    </h1>
                    <p className="text-xl text-[var(--text-clr)]" style={{ marginBottom: '30px' }}>Fullstack Developer from Kolkata with passion for creating beautiful, functional digital experiences.
                        I specialize in modern web technologies and love turning ideas into reality.</p>
                    <div className="hero-btns flex gap-5">
                        <Link to="contact" className="btn btn-outline">Hire Me</Link>
                        <a href="/docs/pradeepcv3.pdf"
                            className="btn"
                            download
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero