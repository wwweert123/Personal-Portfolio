const PERFORMANCE_URL = "http://localhost:3500/performance";

const sendVisit = async (navigations) => {
    try {
        const response = await axios.post(
            PERFORMANCE_URL,
            JSON.stringify(navigations),
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        console.log(JSON.stringify(response));
    } catch (err) {
        if (!err?.response) {
            console.log("No Server Response");
        } else {
            console.log("Registration Failed");
        }
    }
};

var navigations = window.performance.getEntriesByType("navigation")[0];
console.log(navigations.toJSON());
sendVisit(navigations);
