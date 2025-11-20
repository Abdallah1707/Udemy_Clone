import { companies } from "../data/companies";
import "./Companies.css";

export default function Companies() {
  return (
    <div className="companies-section">
      <h2>Trusted by companies of all sizes</h2>

      <div className="company-logos">
        {companies.map((company, i) => (
          <img key={i} src={company.logo} alt={company.name} />
        ))}
      </div>
    </div>
  );
}
