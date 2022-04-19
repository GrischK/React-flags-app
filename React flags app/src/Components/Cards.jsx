export default function Card({country}) {
  return (
    <li className="card">
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
      </div>
    </li>
  );
}
