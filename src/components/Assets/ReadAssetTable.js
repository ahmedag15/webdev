import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
import './Assets.css';

export default function ReadAssetTable() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/asset/1')
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div className="table-main">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>parent_asset_id</Table.HeaderCell>
            <Table.HeaderCell>supplier_id</Table.HeaderCell>
            <Table.HeaderCell>supplier_asset_id</Table.HeaderCell>
            <Table.HeaderCell>warranty_till</Table.HeaderCell>
            <Table.HeaderCell>date_scrapped</Table.HeaderCell>
            <Table.HeaderCell>scrapped_by</Table.HeaderCell>
            <Table.HeaderCell>created_by</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
                        APIData.map((data) => (
                          <Table.Row>
                            <Table.Cell>data.parent_asset_id</Table.Cell>
                            <Table.Cell>data.supplier_id</Table.Cell>
                            <Table.Cell>data.supplier_asset_id</Table.Cell>
                            <Table.Cell>data.warranty_till</Table.Cell>
                            <Table.Cell>data.date_scrapped</Table.Cell>
                            <Table.Cell>data.scrapped_by</Table.Cell>
                            <Table.Cell>data.created_by</Table.Cell>
                          </Table.Row>

                        ))
}

        </Table.Body>
      </Table>
    </div>
  );
}
