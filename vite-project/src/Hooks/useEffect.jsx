                            //Running Code After Render:     
    useEffect(() => {
     // Code here will run after every render
 });



                            // Running Code After Mount (ComponentDidMount):
 useEffect(() => {
    // Code here will run only after the initial render (mount)
  }, []);


  
                            // Running Code Based on Dependencies:
useEffect(() => {
    // Code here will run whenever the specified dependencies change
  }, [dependency1, dependency2]);



                             //Cleanup Effects (ComponentWillUnmount):
  useEffect(() => {
    // Code here will run after every render
    return () => {
      // Cleanup code here will run before the component unmounts
    };
  });
  
  
                                  
                                  // Fetch data (API)
useEffect(() => {
    async function fetchData() {
      const response = await fetch('api-url');
      const data = await response.json();
      // Handle data
    }
  
    fetchData();
  
    // Optionally return a cleanup function if needed
  }, []);

  
                                // Document Title Updates:
  useEffect(() => {
    document.title = 'New Page Title';
  });

  
                                //Managing Timers and Subscriptions:
  useEffect(() => {
    const timer = setInterval(() => {
      // Code here runs at a specified interval
    }, 1000);
  
    return () => {
      clearInterval(timer); // Clean up the timer when the component unmounts
    };
  }, []);
  
  

                                // Combining Multiple Effects:
  useEffect(() => {
    // Effect 1
  }, [dependency1]);
  
  useEffect(() => {
    // Effect 2
  }, [dependency2]);
  