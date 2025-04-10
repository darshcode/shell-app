import React, { lazy, Suspense } from "react";

const AuthComponent = lazy(() => import("authApp/AuthComponent"));
//const NurseApp = lazy(() => import("nurseApp/NurseAppComponent"));
const PatientDashboard = lazy(() => import("patientApp/PatientDashboard"));

function App() {
  const [user, setUser] = React.useState(null);
  console.log("User in Shell App:", user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shell Application</h1>

        <Suspense fallback={<div>Loading Auth...</div>}>
          <AuthComponent onUserChange={setUser} />
        </Suspense>

        {/*
        {user?.role === "nurse" && (
          <Suspense fallback={<div>Loading Nurse App...</div>}>
            <div>
              <NurseApp user={user} />
            </div>
          </Suspense>
        )}
*/}

        {user?.role === "patient" && (
          <Suspense fallback={<div>Loading Patient Dashboard...</div>}>
            <div>
              <PatientDashboard user={user} />
            </div>
          </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
