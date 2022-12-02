import React, { useState } from 'react'
import './Asset.css';
import { Button, Form } from 'semantic-ui-react'
import ReadAssetTable from './ReadAssetTable';
import axios from 'axios';

export default function AssetAdd() {
    const [parent_asset_id, setparent_asset_id] = useState('');
    const [supplier_id, setsupplier_id] = useState('');
    const [supplier_asset_id, setsupplier_asset_id] = useState('');
    const [warranty_till, setwarranty_till] = useState('');
    const [date_scrapped, setdate_scrapped] = useState('');
    const [scrapped_by, setscrapped_by] = useState('');
    const [created_by, setcreated_by] = useState('');

    const postData = () => {
     
        var data = JSON.stringify({
          "parent_asset_id": parent_asset_id,
          "supplier_id": supplier_id,
          "supplier_asset_id": supplier_asset_id,
          "warranty_till": warranty_till,
          "date_scrapped": date_scrapped,
          "scrapped_by": scrapped_by,
          "created_by": created_by
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3000/asset/insert',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjY5OTIxNTU1LCJleHAiOjE2NzAwMDc5NTV9.jS5H7mXYJH1fo8iThalazpainzwM1ifOLvjrSrXgf6w', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        
}


  return (
    <div>
        <Form className="createAsset-form">
        <Form.Field>
            <label>Parent Asset ID</label>
            <input placeholder='Parent Asset ID' onChange={(e) => setparent_asset_id(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Supplier ID</label>
            <input placeholder='Supplier ID' onChange={(e) => setsupplier_id(e.target.value)} />
        </Form.Field>
        <Form.Field>
           <label>Supplier asset ID</label>
            <input placeholder='Supplier Asset ID' onChange={(e) => setsupplier_asset_id(e.target.value)} />
        </Form.Field>
        <Form.Field>
           <label>Warranty Till</label>
            <input placeholder='Warranty Till' onChange={(e) => setwarranty_till(e.target.value)} />
        </Form.Field>
        <Form.Field>
           <label>Date Scrapped</label>
            <input placeholder='Date Scrapped' onChange={(e) => setdate_scrapped(e.target.value)} />
        </Form.Field>
        <Form.Field>
           <label>Scrapped By</label>
            <input placeholder='Scrapped By' onChange={(e) =>setscrapped_by(e.target.value)} />
        </Form.Field>
        <Form.Field>
           <label>Created By</label>
            <input placeholder='Created By' onChange={(e) => setcreated_by(e.target.value)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Add Asset</Button>
    </Form>
    </div>
  )
}
