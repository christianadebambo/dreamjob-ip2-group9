export const GetStartedPie = () => {
    return (    
        <>
        <h1>Get Started</h1>
        <h2>Job Market Insights</h2>
        <div className="content-container">
          <div className="get-started-content">
            <div className="flex-row">
                <h2 className="get-started">Source of Data</h2>
                <div className="get-started-geo">
                    The data is sourced from the USA Jobs API. The API provides a collection of USA government 
                    job postings related to various fields and industries. To access the data, the code makes a 
                    GET request to the API's endpoint URL: "https://data.usajobs.gov/api/search". This API endpoint 
                    is specifically designed to retrieve job-related data.
                </div>
                <h2 className="get-started">Data Structure and Content</h2>
                <div className="get-started-geo">
                    The data retrieved from the USA Jobs API contains information about job postings. Each job posting 
                    object includes details such as the job title, location, application process, and other relevant 
                    information. In this code, the specific aspect of interest is the "DrugTestRequired" field, which 
                    indicates whether a drug test is required for a particular job posting. The data structure is typically 
                    in JSON format, with each job listing represented as an object.
                </div>
                <h2 className="get-started">API Access</h2>
                <div className="get-started-geo">
                    The options object is created to specify the request configuration. It includes the method (GET), url (API endpoint), 
                    and params (query parameters) for the request. The Keyword parameter is set to the value of the searchTerm state variable, 
                    representing the job title entered by the user. The ResultsPerPage parameter is set to 100 to retrieve the most recent 100 
                    USA Gov job postings. The headers object contains the necessary information for authorization and identification. It includes 
                    the Host for the API, the User-Agent to identify the user making the request, and the Authorization-Key to authenticate the request.
                </div>
                <div className="get-started-geo">
                    The axios.request method is used to send the GET request to the API. It takes the options object as a parameter. The request is 
                    asynchronous, and the code uses the await keyword to wait for the response from the API. The response contains the data returned by 
                    the API, including the job postings and their details. The response is stored in the response variable, and the job postings data is 
                    extracted from it using response.data.SearchResult.SearchResultItems. The extracted data is then stored in the searchResults state 
                    variable. This data is then used for further processing and visualization.
                </div>                   
                <h2 className="get-started">Visualization Code Explanation</h2>
                <div className="get-started-geo">
                    The visualization code uses Chart.js to create a pie chart representing the distribution of distinct values for the "DrugTestRequired" 
                    field in the retrieved job postings data. The createPieChart function retrieves the distinct values and calculates their counts by filtering 
                    the job postings data. It then creates a chartData object with the distinct values as labels and the corresponding counts as data. Using the 
                    chartRef reference to the canvas element, it creates a new Chart instance of type "pie" and assigns the chartData as the chart's data.
                </div>
                <div className="get-started-geo">
                    The useEffect hook ensures that the createPieChart function is called whenever the distinct values or job postings data change, 
                    keeping the pie chart up-to-date. In the JSX markup, a div container with the chart-container class is rendered, and within it, 
                    a canvas element serves as the drawing surface for the chart. Overall, the visualization code leverages Chart.js to generate a dynamic 
                    and interactive pie chart that visualizes the distribution of drug test requirements among job postings based on the retrieved data.
                </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        </>   
    )
}

export default GetStartedPie;