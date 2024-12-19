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
  }),
  kode_prov: createAttribute({
    name: "kode_kab",
    type: "text-attribute",
    expression: "[sipd_apbd_nasional.kode_kab]"
}),
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

export const SIPDKemenkoStatusBekerja = createDimension({
  name: "kemenko_status_bekerja",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_status_bekerja.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_status_bekerja.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoStatusBersekolah = createDimension({
  name: "kemenko_status_bersekolah",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_status_bersekolah.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_status_bersekolah.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoJenisPekerjaan = createDimension({
  name: "kemenko_jenis_pekerjaan",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_jenis_pekerjaan.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_jenis_pekerjaan.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoFasilitasSanitasi = createDimension({
  name: "kemenko_fasilitas_sanitasi",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_sanitasi.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_sanitasi.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoFasilitasListrikRumah = createDimension({
  name: "kemenko_fasilitas_listrik_rumah",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_listrik_rumah.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_listrik_rumah.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoFasilitasMemasakRumah = createDimension({
  name: "kemenko_fasilitas_memasak_rumah",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_memasak_rumah.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_memasak_rumah.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoFasilitasStatusRumah = createDimension({
  name: "kemenko_fasilitas_status_rumah",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_status_rumah.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_fasilitas_status_rumah.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoKepalaKeluargaPerempuan = createDimension({
  name: "kemenko_kepala_keluarga_perempuan",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_kepala_keluarga_perempuan.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_kepala_keluarga_perempuan.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoKlasifikasiUsia = createDimension({
  name: "kemenko_klasifikasi_usia",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_klasifikasi_usia.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_klasifikasi_usia.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoPekerjaanIndividu = createDimension({
  name: "kemenko_pekerjaan_individu",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_pekerjaan_individu.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_pekerjaan_individu.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoLansia = createDimension({
  name: "kemenko_lansia",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_lansia.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_lansia.kode_kab]"
  })
}) as SIPDKemenkoDimensions

export const SIPDKemenkoPendidikanTerakhir = createDimension({
  name: "kemenko_pendidikan_terakhir",
  kode_prov: createAttribute({
      name: "kode_prov",
      type: "text-attribute",
      expression: "[kemenko_pendidikan_terakhir.kode_prov]"
  }),
  kode_kab: createAttribute({
      name: "kode_kab",
      type: "text-attribute",
      expression: "[kemenko_pendidikan_terakhir.kode_kab]"
  })
}) as SIPDKemenkoDimensions

