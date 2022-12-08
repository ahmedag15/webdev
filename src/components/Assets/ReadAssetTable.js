import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react';
import './Assets.css'

export default function ReadAssetTable() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/asset/insert`)
            .then((response) => {
                setAPIData(response.data);
            })

    }, [])



    return (
        <div className='table-main'>
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
                        APIData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>parent_asset_id.data</Table.Cell>
                                    <Table.Cell>supplier_id.data</Table.Cell>
                                    <Table.Cell>supplier_asset_id.data</Table.Cell>
                                    <Table.Cell>warranty_till.data</Table.Cell>
                                    <Table.Cell>date_scrapped.data</Table.Cell>
                                    <Table.Cell>scrapped_by.data</Table.Cell>
                                    <Table.Cell>created_by.data</Table.Cell>
                                </Table.Row>

                            )
                        })}



                </Table.Body>
            </Table>
        </div>
    )
}
