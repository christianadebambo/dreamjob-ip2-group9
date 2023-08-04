import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Chart from "chart.js/auto";

// Main component for job analytics with pie chart
export const JobAnalyticsPie = () => {
  // State variables for form input, search results, loading/error states, distinct drug test values, and chart ref
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const [distinctValues, setDistinctValues] = useState([]);
  const chartRef = useRef(null);

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      return; // Prevent submission if the search input is empty
    }
    setSearchLoading(true);
    setSearchError(false);
    setSearchSubmitted(true);

    // Axios request options
    const options = {
      method: "GET",
      url: "https://data.usajobs.gov/api/search",
      params: {
        Keyword: searchTerm,
        ResultsPerPage: 100,
      },
      headers: {
        Host: "data.usajobs.gov",
        "User-Agent": "c.adebambo@alustudent.com",
        "Authorization-Key": "BS/B0oQ7A0K+jfephamkIgDHPQByZWLkAFKVDCwNYoc=",
      },
    };

    try {
      // Fetch search results
      const response = await axios.request(options);
      const results = response.data.SearchResult.SearchResultItems;
      setSearchResults(results);

      // Extract distinct values of DrugTestRequired
      const distinctValues = [
        ...new Set(
          results.map(
            (result) =>
              result.MatchedObjectDescriptor.UserArea.Details.DrugTestRequired
          )
        ),
      ];
      setDistinctValues(distinctValues);
    } catch (error) {
      console.error(error);
      setSearchError(true);
    } finally {
      setSearchLoading(false);
    }
  };

  // Function to create pie chart
  const createPieChart = () => {
    const chartData = {
      labels: distinctValues,
      datasets: [
        {
          data: distinctValues.map((value) => {
            return searchResults.filter(
              (result) =>
                result.MatchedObjectDescriptor.UserArea.Details
                  .DrugTestRequired === value
            ).length;
          }),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],
        },
      ],
    };

    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "pie",
        data: chartData,
      });
    }
  };

  // Use effect to create pie chart when distinctValues or searchResults change
  useEffect(() => {
    createPieChart();
  }, [distinctValues, searchResults]);

  return (
    <>
      <h1>Job Analytics</h1>
      <h2>Job Market Insights</h2>
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Type in Job title"
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
      {searchSubmitted && (
        <>
          {searchLoading && <p className="loading">Loading...</p>}
          {!searchLoading && searchResults.length === 0 && !searchError && (
            <p className="error">No results found. Please try again.</p>
          )}
          {!searchLoading && !searchError && searchResults.length > 0 && (
            <div className="content-container">
              <div className="content">
                <h3>
                  Drug Test Requirement for the 100 Most Recent "{searchTerm}-related" USA Gov Job
                  Postings
                </h3>
                <div className="flex-row">
                  <div className="chart-container">
                    <canvas ref={chartRef} />
                  </div>
                  <table className="job-table">
                    <thead>
                      <tr>
                        <th>Drug Test Required?</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody>
                      {distinctValues.map((value) => {
                        const count = searchResults.filter(
                          (result) =>
                            result.MatchedObjectDescriptor.UserArea.Details
                              .DrugTestRequired === value
                        ).length;
                        return (
                          <tr key={value}>
                            <td>{value.toString()}</td>
                            <td>{count}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default JobAnalyticsPie;
