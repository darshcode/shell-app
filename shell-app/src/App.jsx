import React, { useState, useEffect, Suspense } from "react";

const AuthApp = React.lazy(() => import("authApp/AuthAppComponent"));
const NurseApp = React.lazy(() => import("nurseApp/NurseAppComponent"));
const PatientDashboard = React.lazy(() =>
  import("patientApp/PatientDashboard")
);

const ShellApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInStorage = localStorage.getItem("user");
    if (userInStorage) {
      setUser(JSON.parse(userInStorage));
    }
  }, []);

  return (
    <div>
      <h1>Shell App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {!user ? (
          <AuthApp onUserChange={setUser} />
        ) : user.role === "nurse" ? (
          <NurseApp user={user} />
        ) : (
          <PatientDashboard user={user} />
        )}
      </Suspense>
    </div>
  );
};

export default ShellApp;
