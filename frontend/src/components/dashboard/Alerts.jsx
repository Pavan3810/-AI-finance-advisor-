import { useEffect, useState } from "react";
import axios from "axios";

function Alerts() {
  const [alertData, setAlertData] = useState(null);

  useEffect(() => {
    const username = localStorage.getItem("username");

    axios
      .get(`http://127.0.0.1:8000/alerts/${username}`)
      .then((res) => setAlertData(res.data));
  }, []);

  return (
    <div className="card">
      <h2>Alerts</h2>

      {alertData && (
        <div className="alert-box">
          <h3>{alertData.message || alertData.alert}</h3>
          <p>Spent: ₹{alertData.spent}</p>
          <p>Budget: ₹{alertData.budget}</p>
        </div>
      )}
    </div>
  );
}

export default Alerts;
