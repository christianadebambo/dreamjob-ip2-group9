import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

// Main component for job analytics using a bar chart to compare salaries
export const JobAnalyticsBar = () => {
  // State variables for job titles, location, salary comparison data, error message, and chart data
  const [jobTitle1, setJobTitle1] = useState("");
  const [jobTitle2, setJobTitle2] = useState("");
  const [location, setLocation] = useState("");
  const [salaryComparison, setSalaryComparison] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [chartData, setChartData] = useState(null);

  // Function to handle the comparison of salaries
  const handleCompare = async () => {
    // Validate the input fields
    if (!jobTitle1 || !jobTitle2 || !location) {
      setErrorMessage("Please fill in all input fields.");
      return;
    }

    try {
      // Request options for the first job title
      const options1 = {
        method: "GET",
        url: "https://job-salary-data.p.rapidapi.com/job-salary",
        params: {
          job_title: jobTitle1,
          location: location,
          radius: "200",
        },
        headers: {
          "X-RapidAPI-Key":
            "349d46801fmsh04d385960cf90b8p19885bjsnbb1f79fcac87",
          "X-RapidAPI-Host": "job-salary-data.p.rapidapi.com",
        },
      };

      // Request options for the second job title
      const options2 = {
        method: "GET",
        url: "https://job-salary-data.p.rapidapi.com/job-salary",
        params: {
          job_title: jobTitle2,
          location: location,
          radius: "200",
        },
        headers: {
          "X-RapidAPI-Key":
            "349d46801fmsh04d385960cf90b8p19885bjsnbb1f79fcac87",
          "X-RapidAPI-Host": "job-salary-data.p.rapidapi.com",
        },
      };

      // Send two separate requests using Promise.all to fetch salary data for both job titles
      const [response1, response2] = await Promise.all([
        axios.request(options1),
        new Promise((resolve) =>
          setTimeout(() => resolve(axios.request(options2)), 2000)
        ), // Delay of 2 second between requests
      ]);

      // Log the fetched data to the console
      console.log("Response 1:", response1);
      console.log("Response 2:", response2);

      // Check if any of the salary data is null or undefined
      if (
        !response1.data.data[0].min_salary ||
        !response1.data.data[0].max_salary ||
        !response1.data.data[0].median_salary ||
        !response2.data.data[0].min_salary ||
        !response2.data.data[0].max_salary ||
        !response2.data.data[0].median_salary
      ) {
        throw new Error("Salary data is not available for the job titles in this location.");
      }

      // Set salary comparison data
      setSalaryComparison([response1, response2]);
      setErrorMessage("");

      // Prepare chart data for rendering the Bar chart
      const chartData = {
        labels: ["Min Salary", "Max Salary", "Median Salary"],
        datasets: [
          // Dataset for job title 1
          {
            label: jobTitle1,
            data: [
              response1.data.data[0].min_salary,
              response1.data.data[0].max_salary,
              response1.data.data[0].median_salary,
            ],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          // Dataset for job title 2
          {
            label: jobTitle2,
            data: [
              response2.data.data[0].min_salary,
              response2.data.data[0].max_salary,
              response2.data.data[0].median_salary,
            ],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };

      // Set chart data
      setChartData(chartData);
    } catch (error) {
      console.error("Error fetching salary data:", error);

      // Custom error handling for API rate limit exceeded
      if (error.response && error.response.status === 429) {
        setErrorMessage("Rate limit exceeded. Please try again later.");
      } else {
        setErrorMessage("Error fetching salary data. Please try another job title or location.");
      }
    }
  };

  return (
    <>
      <h1>Job Analytics</h1>
      <h2>Salary Data</h2>
      <div>
        <div className="search-container">
          <input
            type="text"
            className="search-input2"
            placeholder="Job Title 1 e.g Engineer"
            value={jobTitle1}
            onChange={(e) => setJobTitle1(e.target.value)}
          />
          <input
            type="text"
            className="search-input2"
            placeholder="Job Title 2 e.g Scientist"
            value={jobTitle2}
            onChange={(e) => setJobTitle2(e.target.value)}
          />
          <input
            type="text"
            className="search-input2"
            placeholder="Location e.g United States"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleCompare} className="search-button">
            Compare
          </button>
        </div>
        <br />
        <br />

        <div>
          {errorMessage && <p className="error">{errorMessage}</p>}

          {salaryComparison.length === 2 && (
            <>
              <div className="chart-container">
                <h2>Salary Comparison Chart</h2>
                <Bar data={chartData} />
              </div>
            </>
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default JobAnalyticsBar;
