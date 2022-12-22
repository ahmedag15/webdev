import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './RegisterTable.css';

export default function RegisterTable() {
  const [APIData, setAPIData] = useState([]);

  const config = {
    method: 'get',
    url: 'http://localhost:3000/user/get_all',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcxNjQwMzA5LCJleHAiOjE2NzE3MjY3MDl9.XShUHzpfGQEYfx6COJS_xs1nQTsMAqtlCc_btApk-oA',
    },
  };
  useEffect(() => {
    axios(config)
      .then((response) => {
        setAPIData(response.data);
      });
  });

  return (
    <div className="Table">
      <table>
        <tr>
          <th>User_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation_id</th>
        </tr>

        {APIData[0]?.map((data) => {
          console.log('🚀 ~ file: RegisterTable.js:39 ~ {APIData.map ~ data', data);

          return (
            <tbody>
            <tr>
              <td>{data.user_id}</td>
              <td>{data.user_name}</td>
              <td>{data.email}</td>
              <td>{data.designation_id}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
