# Example with JavaScript Frontend and Spring Boot Backend to Illustrate CORS Issues  

## To Run and Test This Example  

1. Run the Spring Boot application (it will run on [http://localhost:8088](http://localhost:8088) by default).  
2. Run the frontend HTML on a different web server (e.g., using the **Live Server** extension in VS Code, typically running on [http://localhost:5500](http://localhost:5500)).  
3. Open a browser and access the HTML page.  
4. Click the "Fetch Data" button and observe the results.  

When you click the button, the frontend will send a request to `/api/redirect`. Spring Boot will return a `302` redirect to `/api/data`. The browser will automatically follow this redirect and receive data from `/api/data`.  

## Some Points to Note  

1. CORS has been properly configured on the backend to allow requests from the frontend domain.  
2. The browser automatically handles the redirect, so you will receive the final data without needing to explicitly handle the redirect in the frontend code.  
3. If you want to control the redirect process, you can use `redirect: 'manual'` in the `fetch()` options.  
4. To check for CORS errors when not properly configured, you can comment out the `@CrossOrigin` annotations in the backend code for each `redirect()` and `getData()` method, or comment out both methods. Then, open the Console and Network tabs in the browser to observe the errors.
