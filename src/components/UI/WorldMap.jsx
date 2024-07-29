import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import worldData from './../../data/world_110m.json'; // Importation du fichier JSON localement

const highlightedCountries = [
  { code: 'MDG', coordinates: [47.5162, -19.3778], name: 'Madagascar', color: '#FF5733' }, // Rouge
  { code: 'MYT', coordinates: [45.1667, -12.8333], name: 'Mayotte', color: '#33FF57' }, // Vert
  { code: 'FRA', coordinates: [2.3522, 48.8566], name: 'France', color: '#3357FF' }, // Bleu
  { code: 'ARE', coordinates: [55.2708, 25.2048], name: 'Dubai', color: '#FFFF33' } // Jaune
]; // Pays à mettre en évidence avec leurs coordonnées et couleurs

const WorldMap = () => {
  // const [tooltipContent, setTooltipContent] = useState(null);

  return (
    <div className="h-full">
      <ComposableMap
        className="w-full h-full object-cover"
        projection="geoMercator"
        projectionConfig={{ scale: 100 }}
        accentHeight={200}
      >
        <Geographies geography={worldData} accentHeight={200}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const highlightedCountry = highlightedCountries.find(country => country.code === geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highlightedCountry ? highlightedCountry.color : '#DDD'} // Utilisation de la couleur personnalisée si le pays est mis en évidence, sinon utiliser une couleur par défaut
                  stroke="#FFF" // Couleur de contour des pays
                  className='object-cover'
                />
              );
            })
          }
        </Geographies>
        {/* Marquage des pays spécifiques */}
        {highlightedCountries.map((country) => (
          <Marker
            key={country.code}
            coordinates={country.coordinates}
            style={{ default: { fill: country.color }, hover: { fill: 'blue' } }}
            // onMouseEnter={() => setTooltipContent(country.name)}
            // onMouseLeave={() => setTooltipContent(null)}
          >
            <circle r={5} />
            {/* Ajout du nom du pays au-dessus du marqueur */}
            <text x={country.coordinates[0]} y={country.coordinates[1]} className="text-sm font-bold text-gray-800" textAnchor="middle">
              {country.name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
