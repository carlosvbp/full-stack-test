import { About } from "../../components/About";
import { EmailSending } from "../../components/EmailSending";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";
import { Talking } from "../../components/Talking";


export const DashboardPage = () => {
    return (
        <>
            <Header />
            <Talking />
            <MainContent />
            <About />
            <EmailSending />
            <Footer/>
        </>
    );
};