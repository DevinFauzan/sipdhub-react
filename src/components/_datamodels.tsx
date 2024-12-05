import { createAttribute, createDimension } from "@sisense/sdk-data";
import { SIPDKemendikbudDapodikDimensions } from "./_models";
import { SIPDBKKBNKeluargaBeresikoStuntingDimensions } from "./_models";

export const WebPageFilterID = "00000000-0000-0000-0000-000000000000"
export const ProvinceWebPageFilterID = "fb09083c-aca9-4a8b-a283-283c84c1d10a"
export const DistrictWebPageFilterID = "2c7578c5-f55d-4781-abd3-7497b696212d"


export const SIPDKemendikbudDapodik = createDimension({
    name: "kemendikbud_data_dapodik",
    kode_prov: createAttribute({
        name: "kode_prov",
        type: "text-attribute",
        expression: "[kemendikbud_data_dapodik.kode_prov]"
    }),
    kode_kab: createAttribute({
        name: "kode_kab",
        type: "text-attribute",
        expression: "[kemendikbud_data_dapodik.kode_kab]"
    })
}) as SIPDKemendikbudDapodikDimensions


export const SIPDBKKBNKeluargaBeresikoStunting = createDimension({
    name: "bkkbn_integrasi_keluarga_beresiko_stunting_1",
    kode_prov: createAttribute({
        name: "kode_prov",
        type: "text-attribute",
        expression: "[bkkbn_integrasi_keluarga_beresiko_stunting_1.kode_prov]"
    }),
    kode_kab: createAttribute({
        name: "kode_kab",
        type: "text-attribute",
        expression: "[bkkbn_integrasi_keluarga_beresiko_stunting_1.kode_kab]"
    })

}) as SIPDBKKBNKeluargaBeresikoStuntingDimensions