import Header from "../src/components/Header/Header";
import Hero from "./components/Hero/Hero";
import Courses from "../src/components/Courses/Courses";
import Catogeries from "./components/Catogeries/Catogeries";
import PopularCourses from "./components/PopularCourses/PopularCourses";
import Instructor from "./components/Instructor/Instructor";
import Questions from "./components/Questions/Questions";
import "./app.css";
import Footer from "./components/Footer/Footer";
import AboveFooter from "./components/AboveFooter/AboverFooter";

export function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Catogeries />
      <PopularCourses />
      <Instructor />
      <Questions />
      <AboveFooter />
      <Footer />
    </div>
  );
}
