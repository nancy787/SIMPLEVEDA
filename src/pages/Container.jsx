export default function Container({children}) {
    return <div className="container">
        <section id="primary" className="content-full-width">
            {children} 
        </section>
        </div>;
}
