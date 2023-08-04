export const GetStartedGeo = () => {
    return (    
        <>
        <h1>Get Started</h1>
        <h2>Job Search</h2>
        <div className="content-container">
          <div className="get-started-content">
            <div className="flex-row">
                <h2 className="get-started">Source of Data</h2>
                <div className="get-started-geo">
                    The data for the Job Analytics functionality is sourced from the Jsearch API 
                    provided by RapidAPI. RapidAPI is a platform that allows developers to access 
                    and integrate various APIs from different providers. In this case, the Jsearch 
                    API is used to search for job listings based on specific criteria.
                </div>
                <h2 className="get-started">Data Structure and Content</h2>
                <div className="get-started-geo">
                    The data returned by the Jsearch API consists of a list of job listings that match 
                    the search criteria. Each job listing contains information such as the job title, 
                    employer name, location details (city, state, country), the date it was posted, and 
                    a link to apply for the job. The data structure is typically in JSON format, with each 
                    job listing represented as an object.
                </div>
                <h2 className="get-started">API Access</h2>
                <div className="get-started-geo">
                    The code uses the axios library to access the Jsearch API. It creates an options object 
                    that contains the necessary configuration for the API request, including the HTTP method, 
                    URL, and query parameters. The request is made to the API endpoint, and the response is 
                    stored in a variable.
                </div>
                <div className="get-started-geo">
                    If the API request is successful, the code extracts the job listings from the response and sorts 
                    them based on the job_posted_at_timestamp property. The sorted job listings are stored in the 
                    searchResults state, which triggers a re-render of the UI to display the search results.
                    If an error occurs during the API request, the catch block handles it by logging the error to the 
                    console and updating the searchError state to indicate that an error has occurred.
                </div>                   
                <div className="get-started-geo">
                    Regardless of the request outcome, the code sets the searchLoading state to false to indicate 
                    that the loading process has finished. 
                    Overall, the code effectively accesses the Jsearch API and retrieves job listings.
                    It handles loading and error states to provide a smooth user experience.
                </div>
                <h2 className="get-started">Visualization Code Explanation</h2>
                <div className="get-started-geo">
                    To execute the code for the visualization using Bing Maps, there are a few steps involved. Firstly, the 
                    Bing Maps JavaScript API is loaded by including a script tag with the appropriate URL and callback function 
                    (initializeMap). This script is added to the HTML document dynamically using JavaScript's createElement and appendChild methods.
                    Once the map control script is loaded and executed, the handleMapLoad function is called, which sets the mapLoaded state to true.
                </div>
                <div className="get-started-geo">
                    When the mapLoaded state is true and there are search results available, the renderMap function is triggered. 
                    This function initializes the Bing Maps map object, sets its credentials, center, and zoom level. It then iterates through 
                    the search results and creates pushpins and infoboxes for each job listing's location. These pushpins and infoboxes are added to 
                    the map's entities collection. The code also handles loading and error states to provide a smooth user experience.
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

export default GetStartedGeo;