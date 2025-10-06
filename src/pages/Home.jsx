import {HeaderWrapper, Container, Welcome, Courses, WhySimpleVedas, ScientificSpirituality, Testinomials, WisdomeQuotes} from  "../index";

export default function Home() {
    return (
      <>
        <HeaderWrapper/>
        <Container>
                <Welcome/>
                <Courses/>
                <WhySimpleVedas/>
                <ScientificSpirituality/>
                <Testinomials/>
                <WisdomeQuotes/>
        </Container>
      </>
    )
}