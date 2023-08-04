export const GetStartedBar = () => {
    return (    
        <>
        <h1>Get Started</h1>
        <h2>Salary Data</h2>
        <div className="content-container">
          <div className="get-started-content">
            <div className="flex-row">
                <h2 className="get-started">Source of Data</h2>
                <div className="get-started-geo">
                    The data for the Salary Data functionality is sourced from the Job Salary Data API 
                    provided by RapidAPI. RapidAPI is a platform that allows developers to access 
                    and integrate various APIs from different providers. In this case, the Job Salary Data API 
                    is used to provide salary data for different job titles in specific locations.
                </div>
                <h2 className="get-started">Data Structure and Content</h2>
                <div className="get-started-geo">
                    The data structure for the salary information received from the API is expected to be in JSON 
                    format. Each response contains details about the salary data for a specific job title in a given location. 
                </div>
                <h2 className="get-started">API Access</h2>
                <div className="get-started-geo">
                    To access the API, the code constructs two separate requests using the axios library, one for each job title 
                    (jobTitle1 and jobTitle2) provided by the user and the specified location (location). The API endpoint URL, 
                    query parameters (job title, location, and radius), and necessary headers (API key and host) are set accordingly in each request.
                </div>
                <div className="get-started-geo">
                    Once the requests are initiated using the axios.request method, the code awaits both responses using Promise.all. This allows 
                    the requests to be executed concurrently, enhancing efficiency. Each response is expected to contain JSON data representing 
                    the salary information for the respective job title in the specified location.
                </div>                   
                <div className="get-started-geo">
                    After receiving the responses, the code processes the data to create the chartData object, which includes labels and datasets 
                    required for the bar chart. The salary information obtained from the API responses is used to populate the datasets for each job title.
                </div>
                <h2 className="get-started">Visualization Code Explanation</h2>
                <div className="get-started-geo">
                    The visualization code utilizes the react-chartjs-2 library, which provides an easy and efficient way to create charts in React applications.
                    Upon successful retrieval of salary data from the API, the visualization code creates a chartData object, which contains the necessary 
                    information for rendering the bar chart. This includes defining the labels for the x-axis, which represent "Min Salary," "Max Salary," 
                    and "Median Salary". Additionally, the code creates two datasets, one for each job title (jobTitle1 and jobTitle2), with corresponding salary 
                    values for "Min Salary," "Max Salary," and "Median Salary".
                </div>
                <div className="get-started-geo">
                    The Bar component from react-chartjs-2 is employed to render the bar chart based on the data provided in the chartData object. The bar chart 
                    visually compares the salary data for the two job titles, showcasing differences in minimum, maximum, and median salaries between the selected 
                    job titles in the specified location.
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

export default GetStartedBar;