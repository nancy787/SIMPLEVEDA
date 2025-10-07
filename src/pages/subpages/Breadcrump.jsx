import BreadcrumpImg from "../../assets/images/breadcrump.jpg";

export default function Breadcrump({ title }) {
    return (
       <section className="main-title-section-wrapper aligncenter">
        {" "}
        <div
            className="main-title-section-bg"
            style={{
            backgroundImage: BreadcrumpImg,
            backgroundPosition: "left top",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundAttachment: "fixed",
            backgroundColor: "#000000"
            }}
        />{" "}
        <div className="container">
            {" "}
            <div className="main-title-section">
            <h1>{title}</h1>
            </div>
            <div className="breadcrumb">
            <a href="https://simplevedas.com/">Home</a>
            <span className="fa fa-arrow-circle-right" />
            <span className="current">Contact</span>
            </div>
        </div>
        </section>

    )
}