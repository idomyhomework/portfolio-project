import './App.css'
import Header from "./components/Header.jsx";
import PortfolioProject from "./components/PortfolioProject.jsx";
import {portfolioProjects} from "./constants/index.js";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
        <Header/>
        {portfolioProjects.map(portfolioProject => (
            <PortfolioProject key={portfolioProject.id} name={portfolioProject.name}
                              description={portfolioProject.description}
                              imageUrl = {portfolioProject.backgroundImg}
                              href={portfolioProject.href}
                                number={portfolioProject.number}/>
        ))}
        <Footer/>

    </>
  )
}

export default App
