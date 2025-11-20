import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryList from "./components/CategoryList";
import CourseList from "./components/CourseList";
import FeaturedTopics from "./components/FeaturedTopics";
import Companies from "./components/Companies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryList />
      <CourseList />
      <FeaturedTopics />
      <Companies />
    </>
  );
}

export default App;
