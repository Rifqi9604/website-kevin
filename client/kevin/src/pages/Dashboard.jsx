import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://website-kevin-client.vercel.app/api/connect"
        );
        console.log(response.data)
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Short Name</th>
            <th>Phone Number</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data && data[0].payload.map(item => (
            <tr key={item.id}>
              <td>{item.full_name}</td>
              <td>{item.short_name}</td>
              <td>{item.phone_number}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
