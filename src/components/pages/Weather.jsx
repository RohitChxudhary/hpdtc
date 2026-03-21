import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Cloud,
  Sun,
  Wind,
  Droplets,
  MapPin,
  Search,
  CloudRain,
  CloudSnow,
  Loader2,
  CloudSun,
  CloudLightning,
  AlertTriangle,
} from "lucide-react";

const LOCATIONS = [
  {
    name: "Shimla",
    lat: 31.1048,
    lon: 77.1734,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Manali",
    lat: 32.2396,
    lon: 77.1887,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Dharamshala",
    lat: 32.219,
    lon: 76.3234,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Dalhousie",
    lat: 32.5387,
    lon: 75.971,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Spiti Valley",
    lat: 32.2461,
    lon: 78.0349,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Kullu",
    lat: 31.9579,
    lon: 77.1095,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Kasauli",
    lat: 30.9013,
    lon: 76.9649,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Palampur",
    lat: 32.1109,
    lon: 76.5363,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Kaza",
    lat: 32.2276,
    lon: 78.0711,
    admin1: "Himachal Pradesh",
    country: "India",
  },
  {
    name: "Kinnaur",
    lat: 31.5892,
    lon: 78.2736,
    admin1: "Himachal Pradesh",
    country: "India",
  },
];

const DISTRICT_MAPPING = {
  Shimla: "Shimla",
  Manali: "Kullu",
  Kullu: "Kullu",
  Dharamshala: "Kangra",
  Dalhousie: "Chamba",
  "Spiti Valley": "Lahaul-Spiti",
  Kaza: "Lahaul-Spiti",
  Kinnaur: "Kinnaur",
  Palampur: "Kangra",
  Kasauli: "Solan",
};

const calculateCloudburstRisk = (weatherData, elevation, district) => {
  if (!weatherData || !weatherData.current) return { score: 0, level: "LOW" };

  const {
    relative_humidity_2m: humidity,
    temperature_2m: temperature,
    wind_speed_10m: wind,
    precipitation,
  } = weatherData.current;

  let elevationFactor = 5;
  if (elevation >= 1000 && elevation <= 2000) elevationFactor = 10;
  else if (elevation > 2000) elevationFactor = 15;

  const normHumidity = Math.min(Math.max(humidity, 0), 100);
  const normPrecipitation = Math.min(precipitation * 2.5, 100);
  const normTemp = Math.min(Math.max((temperature + 10) * 2, 0), 100);
  const normWind = Math.min(wind * 2, 100);
  const normElev = (elevationFactor / 15) * 100;

  let riskScore =
    normHumidity * 0.3 +
    normPrecipitation * 0.4 +
    normTemp * 0.1 +
    normWind * 0.1 +
    normElev * 0.1;

  const currentMonth = new Date().getMonth() + 1;
  const isMonsoon = currentMonth >= 6 && currentMonth <= 9;
  if (isMonsoon) {
    riskScore += 15;
  }

  riskScore = Math.min(Math.round(riskScore), 100);

  let level = "LOW";
  if (riskScore >= 60) level = "HIGH";
  else if (riskScore >= 30) level = "MODERATE";

  return { score: riskScore, level };
};

export default function Weather() {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");

  const [cloudburstRisk, setCloudburstRisk] = useState(null);
  const [isHimachal, setIsHimachal] = useState(true);

  useEffect(() => {
  if (weatherData && weatherData.current) {

    const himachalCheck =
      selectedLocation.country === "India" &&
      selectedLocation.admin1 &&
      selectedLocation.admin1.toLowerCase().includes("himachal");

    setIsHimachal(himachalCheck);

    if (!himachalCheck) {
      setCloudburstRisk(null);
      return;
    }

    const district =
      DISTRICT_MAPPING[selectedLocation.name] || selectedLocation.name;

    const risk = calculateCloudburstRisk(
      weatherData,
      weatherData.elevation || 1500,
      district
    );

    setCloudburstRisk(risk);
  }
}, [weatherData, selectedLocation]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setSearchLoading(true);
    setSearchError("");
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchInput)}&count=1&language=en&format=json`,
      );
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        const result = data.results[0];
        setSelectedLocation({
          name: result.name,
          lat: result.latitude,
          lon: result.longitude,
          admin1: result.admin1 || "",
          country: result.country||"",
        });
        setSearchInput("");
      } else {
        setSearchError("Location not found. Please try another city.");
      }
    } catch (error) {
      console.error("Geocoding failed", error);
      setSearchError("An error occurred. Please try again.");
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.lon}` +
          `&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,uv_index` +
          `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max` +
          `&timezone=Asia%2FKolkata&models=best_match&forecast_days=7`;
        const res = await fetch(url);
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [selectedLocation]);

  // WMO weather code helpers
  const getWeatherIcon = (code, sz = 64) => {
    if (code === undefined || code === null)
      return <Sun size={sz} className="text-warning" />;
    if (code === 0) return <Sun size={sz} className="text-warning" />;
    if (code <= 3) return <CloudSun size={sz} className="text-warning" />;
    if (code <= 48) return <Cloud size={sz} className="text-secondary" />;
    if (code <= 67) return <CloudRain size={sz} className="text-primary" />;
    if (code <= 77) return <CloudSnow size={sz} className="text-info" />;
    if (code <= 82) return <CloudRain size={sz} className="text-primary" />;
    return <CloudLightning size={sz} className="text-danger" />;
  };

  const getWeatherDescription = (code) => {
    if (code === undefined || code === null) return "Clear";
    if (code === 0) return "Clear Sky";
    if (code === 1) return "Mainly Clear";
    if (code === 2) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if (code <= 12) return "Mist / Fog";
    if (code <= 39) return "Drizzle";
    if (code <= 49) return "Dense Fog";
    if (code <= 59) return "Drizzle";
    if (code <= 69) return "Rain";
    if (code <= 77) return "Snow";
    if (code <= 82) return "Rain Showers";
    if (code <= 85) return "Snow Showers";
    if (code <= 99) return "Thunderstorm";
    return "Clear";
  };

  const getWindDirection = (deg) => {
    const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return dirs[Math.round(deg / 45) % 8];
  };

  return (
    <div
      className="min-vh-100 position-relative pt-5"
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* Background decoration */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-0">
        <div
          className="position-absolute top-0 start-0 w-100 h-50 bg-primary opacity-10"
          style={{ filter: "blur(100px)" }}
        />
        <div
          className="position-absolute bottom-0 end-0 w-50 h-50 bg-info opacity-10"
          style={{ filter: "blur(100px)" }}
        />
      </div>

      <div className="container position-relative z-10 pt-5 mt-5">
        <div className="text-center mb-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-4 fw-bold font-serif text-dark mb-3"
          >
            Himachal Weather Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lead text-muted"
          >
            Check real-time weather conditions before you plan your perfect
            getaway.
          </motion.p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden bg-white/80 backdrop-blur-md">
              <div className="row g-0">
                {/* Sidebar for locations */}
                <div className="col-md-4 border-end border-light bg-light/50 p-4">
                  {/* Search Bar */}
                  <div className="mb-4">
                    <form onSubmit={handleSearch} className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control shadow-sm border-0"
                        placeholder="Search any city..."
                        value={searchInput}
                        onChange={(e) => {
                          setSearchInput(e.target.value);
                          if (searchError) setSearchError("");
                        }}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary shadow-sm d-flex align-items-center justify-content-center px-3"
                        disabled={searchLoading}
                      >
                        {searchLoading ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <Search size={18} />
                        )}
                      </button>
                    </form>
                    {searchError && (
                      <div className="text-danger small mt-2 fw-medium px-1">
                        {searchError}
                      </div>
                    )}
                  </div>

                  <h5 className="fw-bold mb-4 d-flex align-items-center gap-2 text-dark mt-2">
                    <MapPin size={20} className="text-primary" /> Popular
                    Destinations
                  </h5>
                  <div className="d-flex flex-column gap-2">
                    {LOCATIONS.map((loc, idx) => (
                      <motion.button
                        key={loc.name}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedLocation(loc)}
                        className={`text-start px-4 py-3 rounded-3 border-0 transition-all ${
                          selectedLocation.name === loc.name
                            ? "bg-primary text-white shadow-sm fw-semibold"
                            : "bg-transparent text-secondary hover-bg-white hover-shadow-sm"
                        }`}
                      >
                        {loc.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Main Weather Display */}
                <div className="col-md-8 p-4 p-md-5">
                  {loading ? (
                    <div
                      className="d-flex justify-content-center align-items-center h-100"
                      style={{ minHeight: "300px" }}
                    >
                      <Loader2
                        size={48}
                        className="text-primary animate-spin"
                      />
                    </div>
                  ) : weatherData && weatherData.current ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Header */}
                      <div className="d-flex justify-content-between align-items-start mb-4">
                        <div>
                          <h2 className="display-5 fw-bold text-dark mb-0">
                            {selectedLocation.name}
                          </h2>
                          <p className="text-muted fs-5 mb-0 mt-2">
                            {getWeatherDescription(
                              weatherData.current.weather_code,
                            )}
                          </p>
                          <p className="text-muted small mb-0 mt-1">
                            Feels like{" "}
                            {Math.round(
                              weatherData.current.apparent_temperature,
                            )}
                            °C
                          </p>
                        </div>
                        <div className="text-end">
                          <h1
                            className="display-1 fw-bold text-primary mb-0"
                            style={{ lineHeight: "1" }}
                          >
                            {Math.round(weatherData.current.temperature_2m)}°
                          </h1>
                          <p className="text-muted mb-0 small">Celsius</p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="d-flex justify-content-center py-3 mb-4">
                        <motion.div
                          animate={{ y: [-10, 10, -10] }}
                          transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut",
                          }}
                        >
                          {getWeatherIcon(
                            weatherData.current.weather_code,
                            100,
                          )}
                        </motion.div>
                      </div>

                      {/* Cloudburst Risk Indicator */}
                      {!isHimachal ? (
                        <div className="alert alert-secondary border-0 bg-secondary bg-opacity-10 text-secondary mb-4 rounded-4 d-flex align-items-center gap-2">
                          <AlertTriangle size={20} />
                          <small className="fw-medium">
                            Cloudburst prediction available only for Himachal
                            Pradesh
                          </small>
                        </div>
                      ) : (
                        cloudburstRisk && (
                          <div
                            className={`p-3 mb-4 rounded-4 d-flex align-items-center justify-content-between gap-3 ${
                              cloudburstRisk.level === "HIGH"
                                ? "bg-danger bg-opacity-10"
                                : cloudburstRisk.level === "MODERATE"
                                  ? "bg-warning bg-opacity-25"
                                  : "bg-success bg-opacity-10"
                            }`}
                          >
                            <div className="d-flex align-items-center gap-3">
                              <div
                                className={`${
                                  cloudburstRisk.level === "HIGH"
                                    ? "text-danger"
                                    : cloudburstRisk.level === "MODERATE"
                                      ? "text-warning"
                                      : "text-success"
                                }`}
                              >
                                <CloudLightning
                                  size={32}
                                  className="flex-shrink-0"
                                />
                              </div>
                              <div>
                                <h6
                                  className={`fw-bold mb-1 ${
                                    cloudburstRisk.level === "HIGH"
                                      ? "text-danger"
                                      : cloudburstRisk.level === "MODERATE"
                                        ? "text-dark"
                                        : "text-success"
                                  }`}
                                >
                                  🌧️ Cloudburst Risk: {cloudburstRisk.level} (
                                  {cloudburstRisk.score}%)
                                </h6>
                                <p
                                  className={`mb-0 small fw-medium ${
                                    cloudburstRisk.level === "HIGH"
                                      ? "text-danger"
                                      : cloudburstRisk.level === "MODERATE"
                                        ? "text-dark"
                                        : "text-success"
                                  }`}
                                  style={{ opacity: 0.9 }}
                                >
                                  {cloudburstRisk.level === "HIGH"
                                    ? "⚠️ High risk of extreme rainfall events"
                                    : cloudburstRisk.level === "MODERATE"
                                      ? "⚠️ Watch for heavy rainfall"
                                      : "Conditions stable"}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}

                      {/* Stats Grid */}
                      <div className="row g-3">
                        <div className="col-6">
                          <div className="p-3 rounded-4 bg-primary bg-opacity-10 d-flex align-items-center gap-3">
                            <Wind
                              size={28}
                              className="text-primary flex-shrink-0"
                            />
                            <div>
                              <p
                                className="text-muted mb-0 fw-medium"
                                style={{
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                Wind
                              </p>
                              <h6 className="fw-bold mb-0 text-dark">
                                {Math.round(weatherData.current.wind_speed_10m)}{" "}
                                km/h{" "}
                                {getWindDirection(
                                  weatherData.current.wind_direction_10m,
                                )}
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-4 bg-info bg-opacity-10 d-flex align-items-center gap-3">
                            <Droplets
                              size={28}
                              className="text-info flex-shrink-0"
                            />
                            <div>
                              <p
                                className="text-muted mb-0 fw-medium"
                                style={{
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                Humidity
                              </p>
                              <h6 className="fw-bold mb-0 text-dark">
                                {weatherData.current.relative_humidity_2m}%
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-4 bg-success bg-opacity-10 d-flex align-items-center gap-3">
                            <CloudRain
                              size={28}
                              className="text-success flex-shrink-0"
                            />
                            <div>
                              <p
                                className="text-muted mb-0 fw-medium"
                                style={{
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                Precipitation
                              </p>
                              <h6 className="fw-bold mb-0 text-dark">
                                {weatherData.current.precipitation} mm
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="p-3 rounded-4 bg-warning bg-opacity-10 d-flex align-items-center gap-3">
                            <Sun
                              size={28}
                              className="text-warning flex-shrink-0"
                            />
                            <div>
                              <p
                                className="text-muted mb-0 fw-medium"
                                style={{
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                }}
                              >
                                UV Index
                              </p>
                              <h6 className="fw-bold mb-0 text-dark">
                                {Math.round(weatherData.daily.uv_index_max[0])}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 7-Day Forecast */}
                      {weatherData.daily && (
                        <div className="mt-5">
                          <h5 className="fw-bold text-dark mb-4">
                            7-Day Forecast
                          </h5>
                          <div
                            className="d-flex flex-nowrap overflow-auto pb-3 gap-3"
                            style={{ scrollbarWidth: "none" }}
                          >
                            {weatherData.daily.time.map((dateStr, i) => {
                              const date = new Date(dateStr);
                              const dayName =
                                i === 0
                                  ? "Today"
                                  : date.toLocaleDateString("en-US", {
                                      weekday: "short",
                                    });
                              const maxTemp = Math.round(
                                weatherData.daily.temperature_2m_max[i],
                              );
                              const minTemp = Math.round(
                                weatherData.daily.temperature_2m_min[i],
                              );
                              const code = weatherData.daily.weather_code[i];

                              return (
                                <motion.div
                                  key={dateStr}
                                  whileHover={{ y: -5 }}
                                  className="flex-shrink-0 text-center p-3 rounded-4 bg-white border border-light shadow-sm"
                                  style={{ width: "105px" }}
                                >
                                  <p className="text-muted fw-semibold mb-2 small">
                                    {dayName}
                                  </p>
                                  <div className="d-flex justify-content-center mb-2">
                                    {getWeatherIcon(code, 28)}
                                  </div>
                                  <div className="d-flex justify-content-center gap-2 mb-1">
                                    <span className="text-dark fw-bold">
                                      {maxTemp}°
                                    </span>
                                    <span className="text-muted">
                                      {minTemp}°
                                    </span>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <div className="text-center text-muted py-5">
                      Failed to load weather data.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
