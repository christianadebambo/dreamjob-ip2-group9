import React, { useState, useEffect } from "react";
import axios from "axios";

// Main component for job analytics with geomap
export const JobAnalyticsGeo = () => {
  // State variables for form input, search results, loading/error states, and map loading state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  // Effect hook to load Bing Maps script
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.bing.com/api/maps/mapcontrol?key=Agj6eqkzkT3MKVNSKZ95-VwT4c6ivP4oSsDSagjeVcQBvsSmW-oz800iehIptOzV&callback=initializeMap";
    script.async = true;
    script.defer = true;
    window.initializeMap = handleMapLoad;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSearch = async (event) => {
    event.preventDefault();

    // Prevent submission if the search input is empty
    if (searchTerm.trim() === "") {
      setSearchResults([]); 
      return;
    }

    setSearchLoading(true);
    setSearchError(false);
    setSearchSubmitted(true);

    // Axios request options
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: searchTerm,
        page: "1",
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": "0133b55ebbmsh5a7fc731fa988d3p11ddcbjsn40021792d4a5",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      // Fetch search results
      const response = await axios.request(options);
      const sortedResults = response.data.data.sort(
        (a, b) => b.job_posted_at_timestamp - a.job_posted_at_timestamp
      );
      setSearchResults(sortedResults);
      console.log(sortedResults);
    } catch (error) {
      console.error(error);

      // Custom error handling for API rate limit exceeded
      if (error.response && error.response.status === 429) {
        setSearchError('Rate limit exceeded. Please try again later.');
      } else {
        setSearchError(true);
      }
    } finally {
      setSearchLoading(false);
    }
  };

  // Function to handle map loading
  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  // Function to render the map
  const renderMap = () => {
    if (mapLoaded && searchResults.length > 0) {
      const Microsoft = window.Microsoft;
      const map = new Microsoft.Maps.Map("#map", {
        credentials: "Agj6eqkzkT3MKVNSKZ95-VwT4c6ivP4oSsDSagjeVcQBvsSmW-oz800iehIptOzV",
        center: new Microsoft.Maps.Location(0, 0),
        zoom: 2,
      });

      // Loop through search results and add pins to the map
      searchResults.forEach((job) => {
        if (job.job_latitude && job.job_longitude) {
          const location = new Microsoft.Maps.Location(
            job.job_latitude,
            job.job_longitude
          );
          const pin = new Microsoft.Maps.Pushpin(location);
          const infobox = new Microsoft.Maps.Infobox(location, {
            title: job.job_title,
            description: getDescription(job),
          });

          // Function to get the job description
          function getDescription(job) {
            let description = "";
            if (job.job_city) {
              description += job.job_city;
            }
            if (job.job_state) {
              if (description !== "") {
                description += ", ";
              }
              description += job.job_state;
            }
            if (job.job_country) {
              if (description !== "") {
                description += ", ";
              }
              description += job.job_country;
            }
            return description;
          }
          
          // Add event handlers and push pin to the map
          infobox.setMap(map);
          Microsoft.Maps.Events.addHandler(pin, "click", () => {
            infobox.setOptions({
              visible: true,
            });
          });
          map.entities.push(pin);
        }
      });
    }
  };

  // Use effect to render the map when mapLoaded or searchResults change
  useEffect(() => {
    renderMap();
  }, [mapLoaded, searchResults]);

  return (
    <>
      <h1>Job Analytics</h1>
      <h2>Job Search</h2>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Type in Job title and Country Name e.g Architect, United States"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <br />
      <br />
      {!searchLoading && !searchError && mapLoaded && searchResults.length > 0 && (
        <div id="map" style={{ height: "500px" }}></div>
      )}
      <br />
      <br />
      {!searchLoading && searchResults.length === 0 && !searchError && searchSubmitted && (
        <p className="error">No results found. Please try again.</p>
      )}
      {searchLoading && <p className="loading">Loading...</p>}
      {!searchLoading && !searchError && searchResults.length > 0 && (
        <div className="content-container">
          <div className="content">
            <div className="flex-row">
              <table className="job-table">
                <thead>
                  <tr>
                    <th>Job</th>
                    <th>Employer</th>
                    <th>Location</th>
                    <th>Posted On</th>
                    <th>Application Link</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((job) => (
                    <tr key={job.job_id} className="job-row">
                      <td>{job.job_title}</td>
                      <td>{job.employer_name}</td>
                      <td>
                      {job.job_city && <span>{job.job_city}, </span>}
                      {job.job_state && <span>{job.job_state}, </span>}
                      {job.job_country && <span>{job.job_country}</span>}
                      </td>
                      <td>
                        {job.job_posted_at_datetime_utc ? (
                          job.job_posted_at_datetime_utc.slice(0, 10)
                          ) : (
                            "N/A"
                        )}
                      </td>
                      <td>
                        <a
                          href={job.job_apply_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="apply-link"
                        >
                          Apply
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default JobAnalyticsGeo;
