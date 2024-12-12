import { createAttribute, createDimension } from "@sisense/sdk-data";
import { SIPDKemendikbudDapodikDimensions } from "./_models";
import { SIPDBKKBNKeluargaBeresikoStuntingDimensions } from "./_models";
import { SIPDBPJSDimensions } from "./_models";
import { SIPDKemenkoDimensions } from "./_models";


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

export const SIPDKemendikbudDataAnakTidakSekolahBPB = createDimension({
  name: "kemendikbud_data_anak_tidak_sekolah_bpb",
  kode_prov: createAttribute({
    name: "kode_prov",
    type: "text-attribute",
    expression: "[kemendikbud_data_anak_tidak_sekolah_bpb.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemendikbud_data_anak_tidak_sekolah_bpb.kode_kab]"
  })
})

export const SIPDBKKBNKeluargaBeresikoStunting1 = createDimension({
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

export const SIPDBKKBNKeluargaBeresikoStunting2 = createDimension({
  name: "bkkbn_integrasi_keluarga_beresiko_stunting_2",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[bkkbn_integrasi_keluarga_beresiko_stunting_2.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[bkkbn_integrasi_keluarga_beresiko_stunting_2.kode_kab]"
  })

}) as SIPDBKKBNKeluargaBeresikoStuntingDimensions

export const SIPDAPBDNasional = createDimension({
  name: "sipd_apbd_nasional",
  kode_wil_prov: createAttribute({
      name: "kode_wil_prov",
      type: "text-attribute",
      expression: "[sipd_apbd_nasional.kode_wil_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[sipd_apbd_nasional.kode_kab]"
  })
})


export const SIPDBPJS = createDimension({
    name: "bpjs_pst_nas",
    kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.kode_prov]"
    }),
    nama_prov: createAttribute({
      name: "nama_prov",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.nama_prov]"
    }),
    kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.kode_kab]"
    }),
    nama_kab: createAttribute({
      name: "nama_kab",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.nama_kab]"
    }),
    jumlah_pst_aktif: createAttribute({
      name: "jumlah_pst_aktif",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.jml_pst_aktif]"
    }),
    jumlah_pst_tidak_aktif: createAttribute({
      name: "jumlah_pst_tidak_aktif",
      type: "text-attribute",
      expression: "[bpjs_pst_nas.jml_pst_tidak_aktif]"
    })
  }) as SIPDBPJSDimensions


  export const SIPDKemenko = createDimension({
    name: "kemenko_rekapitulasi_desil_2024",
    kode_prov: createAttribute({
        name: "kode_prov",
        type: "text-attribute",
        expression: "[kemenko_rekapitulasi_desil_2024.kode_prov]"
    }),
    kode_kab: createAttribute({
        name: "kode_kab",
        type: "text-attribute",
        expression: "[kemenko_rekapitulasi_desil_2024.kode_kab]"
    })
  }) as SIPDKemenkoDimensions