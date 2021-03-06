export default function Card({country}) {
  return (
    <li className="card">
        <img src={country.flags.svg} alt={`drapeau ${country.translations.fra.common}`}/>
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
      </div>
    </li>
  );
}
