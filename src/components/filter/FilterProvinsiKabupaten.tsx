import { useState, useEffect } from 'react';
import axios from 'axios';

import Select2 from 'react-select';

export interface OptionType {
  value: string
  label: string
}

interface FilterProvinsiKabupatenProps {
  filterProvinsi: OptionType | null;
  setFilterProvinsi: (value: OptionType | null) => void;
  filterKabupaten: OptionType | null;
  setFilterKabupaten: (value: OptionType | null) => void;
  optionsProvinsi: OptionType[];
  optionsKabupaten: OptionType[];
  layout?: 'row' | 'column';
  labelClass?: string;
  errorEnabled?: boolean;
  provinsiError?: string;
  kabupatenError?: string;
}

const FilterProvinsiKabupaten: React.FC<FilterProvinsiKabupatenProps> = ({
  filterProvinsi, 
  setFilterProvinsi, 
  filterKabupaten, 
  setFilterKabupaten,
  optionsProvinsi,
  optionsKabupaten,
  layout = 'row',
  labelClass = "",
  errorEnabled,
  provinsiError,
  kabupatenError
}) => {
  if(layout === 'column') {
    return (
      <div className="d-flex flex-column gap-4">
        <div className="d-flex flex-column gap-1 ">
          <span className={labelClass}>Provinsi</span>
          <div className="w-full">
            <Select2 
              options={optionsProvinsi} 
              value={filterProvinsi} 
              onChange={setFilterProvinsi} /> 
          </div>
          { errorEnabled && provinsiError && <span className='text-danger text-sm'>{ provinsiError }</span> }
        </div>
        <div className="d-flex flex-column gap-1 ">
          <span className={labelClass}>Kabupaten</span>
          <div className="w-full">
            <Select2 
              options={optionsKabupaten} 
              value={filterKabupaten} 
              isDisabled={!filterProvinsi?.value} 
              onChange={setFilterKabupaten}/>
          </div> 
          { errorEnabled && kabupatenError && <span className='text-danger text-sm'>{ kabupatenError }</span> }
        </div>
      </div>
    )
  }
  
  return (
    <div className="d-flex gap-4 justify-content-end">
      <div className="d-flex gap-1 align-items-center">
        <span>Provinsi</span>
        <div style={{ width : 200 }}>
          <Select2 
            options={optionsProvinsi} 
            value={filterProvinsi} 
            onChange={setFilterProvinsi} /> 
        </div>
      </div>
      <div className="d-flex gap-1 align-items-center">
        <span>Kabupaten </span>
        <div style={{ width : 200 }}>
          <Select2 
            options={optionsKabupaten} 
            value={filterKabupaten} 
            isDisabled={!filterProvinsi?.value} 
            onChange={setFilterKabupaten}/>
        </div>
      </div>
    </div>
  );
};

export default FilterProvinsiKabupaten;
