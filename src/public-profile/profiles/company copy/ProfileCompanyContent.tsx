import { NetworkGetStartedContent } from '@/pages/network/get-started';
import { Contributions, MediaUploads } from '../default';
import {
  Locations,
  CompanyProfile,

} from './blocks';
import { Network } from 'inspector/promises';
import { NetworkUserTableTeamCrewContent } from '@/pages/network/user-table/team-crew';
import { DPT } from '../creator';
import { DaftarKandidatPilkada } from '@/pages/network/get-started copy';
// import { IOptionsItemsPetahana, PetaPetahana } from '@/pages/network/get-started copy 2';
import TabsComponent from './blocks/Tabber';
import { NetworkUserCardsTeamCrewPage } from '@/pages/network';
import { FilterPage } from '@/pages/network/user-cards copy';
// import TabsAnalyticsFirstComponent from './blocks/TabberAnalyticsFirst';
// import { DPTPerComponent } from '../creator/blocks/DPT';
import React, { useState, useEffect } from 'react';
import { SisenseContextProvider } from '@sisense/sdk-ui';

import axios from 'axios';
import { IComparisonMapDataConstructor, ILeafletData, IPopupContent, IStandardColorRange, IStandardMapDataConstructor } from './blocks/interfaces/global';

export interface OptionType {
  value: string;
  label: string;
}

interface FilterContextType {
  gubernurFilter: string;
  setGubernurFilter: (value: string) => void;
  filterProvinsi: OptionType | null;
  setFilterProvinsi: (value: OptionType | null) => void;
  filterKabupaten: OptionType | null;
  setFilterKabupaten: (value: OptionType | null) => void;
  filterPetahana: boolean | null;
  setFilterPetahana: (value: boolean | null) => void;
  filterKotakKosong: boolean | null;
  setFilterKotakKosong: (value: boolean | null) => void;
  filterJenisKandidat: string
  setFilterJenisKandidat: (value: string) => void;

  optionsProvinsi: OptionType[];
  optionsKabupaten: OptionType[];
}

interface MapDataContextType {
  provinceMapData: IStandardMapDataConstructor
  setProvinceMapData: React.Dispatch<React.SetStateAction<IStandardMapDataConstructor>>
  districtMapData: IStandardMapDataConstructor
  setDistrictMapData: React.Dispatch<React.SetStateAction<IStandardMapDataConstructor>>
  provinceColorList: Array<IStandardColorRange>
  setProvinceColorList: React.Dispatch<React.SetStateAction<Array<IStandardColorRange>>>
  districtColorList: Array<IStandardColorRange>
  setDistrictColorList: React.Dispatch<React.SetStateAction<Array<IStandardColorRange>>>
  provincePopupData: Array<IPopupContent>
  setProvincePopupData: React.Dispatch<React.SetStateAction<Array<IPopupContent>>>
  districtPopupData: Array<IPopupContent>
  setDistrictPopupData: React.Dispatch<React.SetStateAction<Array<IPopupContent>>>
  mapLegendTitle: string
  setMapLegendTitle: React.Dispatch<React.SetStateAction<string>>,
  selectedAdministrative: string,
  setSelectedAdministrative: React.Dispatch<React.SetStateAction<string>>,
}

export const FilterContext = React.createContext<FilterContextType>({
  gubernurFilter: '',
  setGubernurFilter: (value: string) => { },
  filterProvinsi: null,
  setFilterProvinsi: (value: OptionType | null) => { },
  filterKabupaten: null,
  setFilterKabupaten: (value: OptionType | null) => { },
  filterPetahana: null,
  setFilterPetahana: (value: boolean | null) => { },
  filterKotakKosong: null,
  setFilterKotakKosong: (value: boolean | null) => { },
  filterJenisKandidat: "gubernur",
  setFilterJenisKandidat: (value: string | null) => { },

  optionsProvinsi: [],
  optionsKabupaten: [],
})

export const MapDataContext = React.createContext<MapDataContextType>({
  provinceMapData: {} as IStandardMapDataConstructor,
  setProvinceMapData: () => {},
  districtMapData: {} as IStandardMapDataConstructor,
  setDistrictMapData: () => {},
  provinceColorList: [],
  setProvinceColorList: () => {},
  districtColorList: [],
  setDistrictColorList: () => {},
  provincePopupData: [],
  setProvincePopupData: () => {},
  districtPopupData: [],
  setDistrictPopupData: () => {},
  mapLegendTitle: "",
  setMapLegendTitle: () => {},
  selectedAdministrative: "",
  setSelectedAdministrative: () => {}
})

const ProfileCompanyContentCopy = ({ children }) => {
  const [gubernurFilter, setGubernurFilter] = useState('')

  const [optionsProvinsi, setOptionsProvinsi] = useState<OptionType[]>([]);
  const [optionsKabupaten, setOptionsKabupaten] = useState<OptionType[]>([]);

  const [filterProvinsi, setFilterProvinsi] = useState<OptionType | null>(null);
  const [filterKabupaten, setFilterKabupaten] = useState<OptionType | null>(null);

  const [filterPetahana, setFilterPetahana] = useState<boolean | null>(null)
  const [filterKotakKosong, setFilterKotakKosong] = useState<boolean | null>(null)
  const [filterJenisKandidat, setFilterJenisKandidat] = useState<string>("gubernur")

  const [provinceMapData, setProvinceMapData] = useState<IStandardMapDataConstructor>({} as IStandardMapDataConstructor)
  const [districtMapData, setDistrictMapData] = useState<IStandardMapDataConstructor>({} as IStandardMapDataConstructor)
  const [provinceColorList, setProvinceColorList] = useState<Array<IStandardColorRange>>([])
  const [districtColorList, setDistrictColorList] = useState<Array<IStandardColorRange>>([])
  const [provincePopupData, setProvincePopupData] = useState<Array<IPopupContent>>([])
  const [districtPopupData, setDistrictPopupData] = useState<Array<IPopupContent>>([])
  const [mapLegendTitle, setMapLegendTitle] = useState<string>("")
  const [selectedAdministrative, setSelectedAdministrative] = useState<string>("provinsi")

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/prov`, { withCredentials: true });
        setOptionsProvinsi(
          [{ value: "", label: "Semua Provinsi" }].concat(
            response.data.map((item) => ({
              value: item.kodeProv,
              label: item.namaProv
            }))
          )
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetch();
  }, []);
  
  useEffect(() => {
    const fetch = async () => {
      setFilterKabupaten(null);
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/kab`, {params: {
          kodeProv: filterProvinsi?.value
        }});
        setOptionsKabupaten(
          [{ value: "", label: "Semua Kabupaten" }].concat(
            response.data.map((item) => ({
              value: item.kodeKab,
              label: item.namaKab
            }))
          )
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(filterProvinsi !== null){
      fetch();
    }
  }, [filterProvinsi]);

  return (
    <>
      <MapDataContext.Provider value={{ provinceMapData, setProvinceMapData, districtMapData, setDistrictMapData, provinceColorList, setProvinceColorList, districtColorList, setDistrictColorList, provincePopupData, setProvincePopupData, districtPopupData, setDistrictPopupData, mapLegendTitle, setMapLegendTitle, selectedAdministrative, setSelectedAdministrative }}>
        <FilterContext.Provider 
          value={{
            gubernurFilter,
            setGubernurFilter,
            filterProvinsi,
            setFilterProvinsi,
            filterKabupaten,
            setFilterKabupaten,
            optionsProvinsi,
            optionsKabupaten,
            filterPetahana,
            setFilterPetahana,
            filterKotakKosong,
            setFilterKotakKosong,
            filterJenisKandidat,
            setFilterJenisKandidat
          }}
        >
          { children }
        </FilterContext.Provider>
      </MapDataContext.Provider> 
    </>



  );
};

export { ProfileCompanyContentCopy };