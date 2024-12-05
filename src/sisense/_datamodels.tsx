import { createAttribute, createDimension } from "@sisense/sdk-data";
import { DPTPemulaDisabilitasDimension } from "./_models";

export const WebPageFilterID = "00000000-0000-0000-0000-000000000000"
export const ProvinceWebPageFilterID = "fb09083c-aca9-4a8b-a283-283c84c1d10a"
export const DistrictWebPageFilterID = "2c7578c5-f55d-4781-abd3-7497b696212d"

export const DPTPemulaDisabilitas = createDimension({
  name: "DP_AGR_DP4_U17_DIS",
  NO_PROV: createAttribute({
    name: "NO_PROV",
    type: "text-attribute",
    expression: "[DP_AGR_DP4_U17_DIS.NO_PROV]"
  }),
  NO_KAB: createAttribute({
    name: "NO_KAB",
    type: "text-attribute",
    expression: "[DP_AGR_DP4_U17_DIS.NO_KAB]"
  }),
}) as DPTPemulaDisabilitasDimension

export const CalonGubernur = createDimension({
  name: "DP_BURSA_CALON_GUB_CLUS",
  KODE_PROV: createAttribute({
    name: "KODE_PROV",
    type: "text-attribute",
    expression: "[DP_BURSA_CALON_GUB_CLUS.KODE_PROV]"
  })
})

export const CalonCakada = createDimension({
  name: "DP_BURSA_CALON_CAKADA",
  KODE_PROV: createAttribute({
    name: "KODE_PROV",
    type: "text-attribute",
    expression: "[DP_BURSA_CALON_CAKADA.KODE_PROV]"
  }),
  KODE_KAB: createAttribute({
    name: "KODE_KAB",
    type: "text-attribute",
    expression: "[DP_BURSA_CALON_CAKADA.KODE_KAB]"
  })
})

export const DPTJenisKelamin = createDimension({
  name: "DP_DPT_PILKADA_KAB",
  KODE_PROV: createAttribute({
    name: "KODE_PROV",
    type: "text-attribute",
    expression: "[DP_DPT_PILKADA_KAB.KODE_PROV]"
  }),
  KODE_KAB: createAttribute({
    name: "KODE_KAB",
    type: "text-attribute",
    expression: "[DP_DPT_PILKADA_KAB.KODE_KAB]"
  })
})

export const NPHD = createDimension({
  name: "NPHD",
  KODE_PROV: createAttribute({
    name: "KODE_PROV",
    type: "text-attribute",
    expression: "[NPHD.KODE_PROV]"
  }),
  KODE_KAB: createAttribute({
    name: "KODE_KAB",
    type: "text-attribute",
    expression: "[NPHD.KODE_KAB]"
  })
})