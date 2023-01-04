import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<User[]>(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setUsers(response.data);
    }
    fetchData();
  }, []);

  const formatPhoneNumber = (phone: string): string => {
    phone = phone.replace(/^1-|\./g, "");

    const extensionIndex = phone.indexOf("x");
    if (extensionIndex > 0) {
      phone = phone.substring(0, extensionIndex);
    }

    phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

    return phone;
  };

  const isoDateParser = (date: string) => {
    const parsedDate = new Date(Date.parse(date) as any) as Date;
    const dateOpts: any = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    const timeOpts: any = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dates: any = parsedDate.toLocaleDateString("en-US", dateOpts);
    const time: any = parsedDate.toLocaleTimeString("en-US", timeOpts);
    return `${dates} ${time}`;
  };

  const randomStatus = (): string => {
    const status: string[] = ["pending", "blacklisted", "inactive", "active"];
    const randomNumber: number = Math.floor(Math.random() * 4);
    return status[randomNumber];
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th title="Organization Name">Organization Name</th>
            <th title="Username">Username</th>
            <th title="Email">Email</th>
            <th title="Phone Number">Phone Number</th>
            <th title="Date Joined">Date Joined</th>
            <th title="Status">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{formatPhoneNumber(user.phoneNumber)}</td>
              <td>{isoDateParser(user.createdAt)}</td>
              <td>{randomStatus()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
