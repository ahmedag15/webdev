import React from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core';
import Sidebar from '../Sidebar/Sidebar';
import AssetAdd from './AssetAdd';
import ReadAssetTable from './ReadAssetTable';
import './Assets.css';

export default function Assets() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="buttons">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" placeholder="Add Asset">Add Asset</InputLabel>
            <Select>
              <AssetAdd />
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" placeholder="Transfer Asset">Transfer Asset</InputLabel>
            <Select />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" placeholder="Scrap Asset">Scrap Asset</InputLabel>
            <Select />
          </FormControl>

        </div>
        <div className="table" style={{ marginTop: 20 }}>
          <ReadAssetTable />
        </div>
      </div>

    </>

  );
}
