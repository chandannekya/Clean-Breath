import React, { useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "824eca061b7542b491d105930252502"; // Hardcoded, not exposed
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const AirQualityDashboard = () => {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [airQuality, setAirQuality] = useState(null);
  const [error, setError] = useState("");
  const [place, setPlace] = useState("");

  const fetchAirQuality = async () => {
    if (!location) {
      setError("Please enter a location");
      setAirQuality(null);
      return;
    }
    setLoading(true);
    setError("");
    setAirQuality(null);
    try {
      const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(location)}&aqi=yes`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (!data.current || !data.current.air_quality) {
        throw new Error("No air quality data available for this location");
      }
      setAirQuality(data.current.air_quality);
      setPlace(`${data.location.name}, ${data.location.country}`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[70vh] py-10 bg-white">
      <div className="w-full max-w-xl bg-green-50 rounded-2xl shadow-lg p-8 border border-green-200">
        <div className="mb-4">
          <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Air Quality Tracker</h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            className="flex-1 border-2 border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800 bg-white"
            placeholder="Enter location (e.g., London)"
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") fetchAirQuality(); }}
          />
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            onClick={fetchAirQuality}
            disabled={loading}
          >
            {loading ? "Loading..." : "Check"}
          </button>
        </div>
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-lg px-4 py-3 mb-4 text-center">
            {error}
          </div>
        )}
        {airQuality && (
          <div className="bg-white border border-green-200 rounded-xl p-6 mt-2">
            <h2 className="text-xl font-semibold text-green-700 mb-2 text-center">{place}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{airQuality["us-epa-index"]}/10</div>
                <div className="text-gray-600 text-sm">US EPA Index</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{airQuality["gb-defra-index"]}/10</div>
                <div className="text-gray-600 text-sm">GB DEFRA Index</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">CO</div>
                <div className="text-lg">{airQuality.co.toFixed(1)} μg/m³</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">NO₂</div>
                <div className="text-lg">{airQuality.no2.toFixed(1)} μg/m³</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">O₃</div>
                <div className="text-lg">{airQuality.o3.toFixed(1)} μg/m³</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">SO₂</div>
                <div className="text-lg">{airQuality.so2.toFixed(1)} μg/m³</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">PM2.5</div>
                <div className="text-lg">{airQuality.pm2_5.toFixed(1)} μg/m³</div>
              </div>
              <div className="bg-green-100 rounded-lg p-3 text-center">
                <div className="font-semibold text-green-800">PM10</div>
                <div className="text-lg">{airQuality.pm10.toFixed(1)} μg/m³</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirQualityDashboard; 