import { categories } from "../data/categories";
import "./CategoryList.css";

export default function CategoryList() {
  return (
    <div className="category-container">
      {categories.map((c, i) => (
        <button key={i} className="category-btn">{c.name}</button>
      ))}
    </div>
  );
}
