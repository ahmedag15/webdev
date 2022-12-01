import React from 'react'
import { Table } from 'semantic-ui-react'
import './Asset.css'

export default function ReadAssetTable() {
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
                    <Table.Row>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>7</Table.Cell>
                        <Table.Cell>328434</Table.Cell>
                        <Table.Cell>23-12-2022</Table.Cell>
                        <Table.Cell>20-12-2022</Table.Cell>
                        <Table.Cell>Ahmed</Table.Cell>
                        <Table.Cell>Sohaib</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
    </div>
  )
}
