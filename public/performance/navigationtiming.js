var navigations = window.performance.getEntriesByType("navigation")[0];
console.log(navigations.toJSON());
// try {
//             const response = await axios.post(
//                 "http://localhost:3500",
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { "Content-Type": "application/json" },
//                     withCredentials: true,
//                 }
//             );
//             console.log(JSON.stringify(response));
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg("No Server Response");
//             } else if (err.response?.status === 409) {
//                 setErrMsg("Username Taken");
//             } else {
//                 setErrMsg("Registration Failed");
//             }
//             errRef.current.focus();
//         }
