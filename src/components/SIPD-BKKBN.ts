import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = { title: 'SIPD BKKBN 2 (1)', type: 'elasticube' };

interface bkkbn_data_anggaran_kabkotDimension extends Dimension {
    air_tidak_layak: Attribute;
    baduta: Attribute;
    balita: Attribute;
    bukan_peserta_kb_modern: Attribute;
    jamban_tidak_layak: Attribute;
    jumlah_keluarga: Attribute;
    keluarga_beresiko_stunting: Attribute;
    keluarga_sasaran: Attribute;
    keluarga_tidak_beresiko_stunting: Attribute;
    kode_kabkot: Attribute;
    kode_prov: Attribute;
    nama_kabupaten: Attribute;
    nama_provinsi: Attribute;
    peringkat_kesejahteraan_1: Attribute;
    peringkat_kesejahteraan_2: Attribute;
    peringkat_kesejahteraan_3: Attribute;
    peringkat_kesejahteraan_4: Attribute;
    peringkat_kesejahteraan_diatas_4: Attribute;
    pus: Attribute;
    pus_hamil: Attribute;
}
export const bkkbn_data_anggaran_kabkot = createDimension({
    name: 'bkkbn_data_anggaran_kabkot',
    air_tidak_layak: createAttribute({
        name: 'air_tidak_layak',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.air_tidak_layak]',
    }),
    baduta: createAttribute({
        name: 'baduta',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.baduta]',
    }),
    balita: createAttribute({
        name: 'balita',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.balita]',
    }),
    bukan_peserta_kb_modern: createAttribute({
        name: 'bukan_peserta_kb_modern',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.bukan_peserta_kb_modern]',
    }),
    jamban_tidak_layak: createAttribute({
        name: 'jamban_tidak_layak',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.jamban_tidak_layak]',
    }),
    jumlah_keluarga: createAttribute({
        name: 'jumlah_keluarga',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.jumlah_keluarga]',
    }),
    keluarga_beresiko_stunting: createAttribute({
        name: 'keluarga_beresiko_stunting',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.keluarga_beresiko_stunting]',
    }),
    keluarga_sasaran: createAttribute({
        name: 'keluarga_sasaran',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.keluarga_sasaran]',
    }),
    keluarga_tidak_beresiko_stunting: createAttribute({
        name: 'keluarga_tidak_beresiko_stunting',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.keluarga_tidak_beresiko_stunting]',
    }),
    kode_kabkot: createAttribute({
        name: 'kode_kabkot',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.kode_kabkot]',
    }),
    kode_prov: createAttribute({
        name: 'kode_prov',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.kode_prov]',
    }),
    nama_kabupaten: createAttribute({
        name: 'nama_kabupaten',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.nama_kabupaten]',
    }),
    nama_provinsi: createAttribute({
        name: 'nama_provinsi',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.nama_provinsi]',
    }),
    peringkat_kesejahteraan_1: createAttribute({
        name: 'peringkat_kesejahteraan_1',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.peringkat_kesejahteraan_1]',
    }),
    peringkat_kesejahteraan_2: createAttribute({
        name: 'peringkat_kesejahteraan_2',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.peringkat_kesejahteraan_2]',
    }),
    peringkat_kesejahteraan_3: createAttribute({
        name: 'peringkat_kesejahteraan_3',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.peringkat_kesejahteraan_3]',
    }),
    peringkat_kesejahteraan_4: createAttribute({
        name: 'peringkat_kesejahteraan_4',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.peringkat_kesejahteraan_4]',
    }),
    peringkat_kesejahteraan_diatas_4: createAttribute({
        name: 'peringkat_kesejahteraan_diatas_4',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.peringkat_kesejahteraan_diatas_4]',
    }),
    pus: createAttribute({
        name: 'pus',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.pus]',
    }),
    pus_hamil: createAttribute({
        name: 'pus_hamil',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_kabkot.pus_hamil]',
    }),
}) as bkkbn_data_anggaran_kabkotDimension;

interface bkkbn_data_anggaran_provDimension extends Dimension {
    air_tidak_layak: Attribute;
    baduta: Attribute;
    balita: Attribute;
    bukan_peserta_kb_modern: Attribute;
    jamban_tidak_layak: Attribute;
    jumlah_keluarga: Attribute;
    keluarga_beresiko_stunting: Attribute;
    keluarga_sasaran: Attribute;
    keluarga_tidak_beresiko_stunting: Attribute;
    kode_kabkot: Attribute;
    kode_prov: Attribute;
    nama_kabupaten: Attribute;
    nama_provinsi: Attribute;
    peringkat_kesejahteraan_1: Attribute;
    peringkat_kesejahteraan_2: Attribute;
    peringkat_kesejahteraan_3: Attribute;
    peringkat_kesejahteraan_4: Attribute;
    peringkat_kesejahteraan_diatas_4: Attribute;
    pus: Attribute;
    pus_hamil: Attribute;
}
export const bkkbn_data_anggaran_prov = createDimension({
    name: 'bkkbn_data_anggaran_prov',
    air_tidak_layak: createAttribute({
        name: 'air_tidak_layak',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.air_tidak_layak]',
    }),
    baduta: createAttribute({
        name: 'baduta',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.baduta]',
    }),
    balita: createAttribute({
        name: 'balita',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.balita]',
    }),
    bukan_peserta_kb_modern: createAttribute({
        name: 'bukan_peserta_kb_modern',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.bukan_peserta_kb_modern]',
    }),
    jamban_tidak_layak: createAttribute({
        name: 'jamban_tidak_layak',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.jamban_tidak_layak]',
    }),
    jumlah_keluarga: createAttribute({
        name: 'jumlah_keluarga',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.jumlah_keluarga]',
    }),
    keluarga_beresiko_stunting: createAttribute({
        name: 'keluarga_beresiko_stunting',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.keluarga_beresiko_stunting]',
    }),
    keluarga_sasaran: createAttribute({
        name: 'keluarga_sasaran',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.keluarga_sasaran]',
    }),
    keluarga_tidak_beresiko_stunting: createAttribute({
        name: 'keluarga_tidak_beresiko_stunting',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.keluarga_tidak_beresiko_stunting]',
    }),
    kode_kabkot: createAttribute({
        name: 'kode_kabkot',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_prov.kode_kabkot]',
    }),
    kode_prov: createAttribute({
        name: 'kode_prov',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_prov.kode_prov]',
    }),
    nama_kabupaten: createAttribute({
        name: 'nama_kabupaten',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_prov.nama_kabupaten]',
    }),
    nama_provinsi: createAttribute({
        name: 'nama_provinsi',
        type: 'text-attribute',
        expression: '[bkkbn_data_anggaran_prov.nama_provinsi]',
    }),
    peringkat_kesejahteraan_1: createAttribute({
        name: 'peringkat_kesejahteraan_1',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.peringkat_kesejahteraan_1]',
    }),
    peringkat_kesejahteraan_2: createAttribute({
        name: 'peringkat_kesejahteraan_2',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.peringkat_kesejahteraan_2]',
    }),
    peringkat_kesejahteraan_3: createAttribute({
        name: 'peringkat_kesejahteraan_3',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.peringkat_kesejahteraan_3]',
    }),
    peringkat_kesejahteraan_4: createAttribute({
        name: 'peringkat_kesejahteraan_4',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.peringkat_kesejahteraan_4]',
    }),
    peringkat_kesejahteraan_diatas_4: createAttribute({
        name: 'peringkat_kesejahteraan_diatas_4',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.peringkat_kesejahteraan_diatas_4]',
    }),
    pus: createAttribute({
        name: 'pus',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.pus]',
    }),
    pus_hamil: createAttribute({
        name: 'pus_hamil',
        type: 'numeric-attribute',
        expression: '[bkkbn_data_anggaran_prov.pus_hamil]',
    }),
}) as bkkbn_data_anggaran_provDimension;

interface sipd_apbd_nasionalDimension extends Dimension {
    id_bidang_urusan: Attribute;
    id_daerah: Attribute;
    id_giat: Attribute;
    id_program: Attribute;
    id_sub_giat: Attribute;
    id_urusan: Attribute;
    indikator: Attribute;
    is_miskin_ekstrem: Attribute;
    is_stunting: Attribute;
    kode_akun: Attribute;
    kode_bidang_urusan: Attribute;
    kode_giat: Attribute;
    kode_kab: Attribute;
    kode_program: Attribute;
    kode_prov: Attribute;
    kode_skpd: Attribute;
    kode_sub_giat: Attribute;
    kode_sub_skpd: Attribute;
    kode_urusan: Attribute;
    kode_wil_prov: Attribute;
    layanan_teks: Attribute;
    nama_akun: Attribute;
    nama_bidang_urusan: Attribute;
    nama_giat: Attribute;
    nama_program: Attribute;
    nama_prop: Attribute;
    nama_skpd: Attribute;
    nama_sub_giat: Attribute;
    nama_sub_skpd: Attribute;
    nama_urusan: Attribute;
    nama_wil: Attribute;
    rincian: Attribute;
    satuan: Attribute;
    spm: Attribute;
    tahun: Attribute;
    target: Attribute;
    execute_time: DateDimension;
}
export const sipd_apbd_nasional = createDimension({
    name: 'sipd_apbd_nasional',
    id_bidang_urusan: createAttribute({
        name: 'id_bidang_urusan',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.id_bidang_urusan]',
    }),
    id_daerah: createAttribute({
        name: 'id_daerah',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.id_daerah]',
    }),
    id_giat: createAttribute({
        name: 'id_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.id_giat]',
    }),
    id_program: createAttribute({
        name: 'id_program',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.id_program]',
    }),
    id_sub_giat: createAttribute({
        name: 'id_sub_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.id_sub_giat]',
    }),
    id_urusan: createAttribute({
        name: 'id_urusan',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.id_urusan]',
    }),
    indikator: createAttribute({
        name: 'indikator',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.indikator]',
    }),
    is_miskin_ekstrem: createAttribute({
        name: 'is_miskin_ekstrem',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.is_miskin_ekstrem]',
    }),
    is_stunting: createAttribute({
        name: 'is_stunting',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.is_stunting]',
    }),
    kode_akun: createAttribute({
        name: 'kode_akun',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_akun]',
    }),
    kode_bidang_urusan: createAttribute({
        name: 'kode_bidang_urusan',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_bidang_urusan]',
    }),
    kode_giat: createAttribute({
        name: 'kode_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_giat]',
    }),
    kode_kab: createAttribute({
        name: 'kode_kab',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_kab]',
    }),
    kode_program: createAttribute({
        name: 'kode_program',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_program]',
    }),
    kode_prov: createAttribute({
        name: 'kode_prov',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_prov]',
    }),
    kode_skpd: createAttribute({
        name: 'kode_skpd',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_skpd]',
    }),
    kode_sub_giat: createAttribute({
        name: 'kode_sub_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_sub_giat]',
    }),
    kode_sub_skpd: createAttribute({
        name: 'kode_sub_skpd',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_sub_skpd]',
    }),
    kode_urusan: createAttribute({
        name: 'kode_urusan',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_urusan]',
    }),
    kode_wil_prov: createAttribute({
        name: 'kode_wil_prov',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.kode_wil_prov]',
    }),
    layanan_teks: createAttribute({
        name: 'layanan_teks',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.layanan_teks]',
    }),
    nama_akun: createAttribute({
        name: 'nama_akun',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_akun]',
    }),
    nama_bidang_urusan: createAttribute({
        name: 'nama_bidang_urusan',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_bidang_urusan]',
    }),
    nama_giat: createAttribute({
        name: 'nama_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_giat]',
    }),
    nama_program: createAttribute({
        name: 'nama_program',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_program]',
    }),
    nama_prop: createAttribute({
        name: 'nama_prop',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_prop]',
    }),
    nama_skpd: createAttribute({
        name: 'nama_skpd',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_skpd]',
    }),
    nama_sub_giat: createAttribute({
        name: 'nama_sub_giat',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_sub_giat]',
    }),
    nama_sub_skpd: createAttribute({
        name: 'nama_sub_skpd',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_sub_skpd]',
    }),
    nama_urusan: createAttribute({
        name: 'nama_urusan',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_urusan]',
    }),
    nama_wil: createAttribute({
        name: 'nama_wil',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.nama_wil]',
    }),
    rincian: createAttribute({
        name: 'rincian',
        type: 'numeric-attribute',
        expression: '[sipd_apbd_nasional.rincian]',
    }),
    satuan: createAttribute({
        name: 'satuan',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.satuan]',
    }),
    spm: createAttribute({
        name: 'spm',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.spm]',
    }),
    tahun: createAttribute({
        name: 'tahun',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.tahun]',
    }),
    target: createAttribute({
        name: 'target',
        type: 'text-attribute',
        expression: '[sipd_apbd_nasional.target]',
    }),
    execute_time: createDateDimension({
        name: 'execute_time',
        expression: '[sipd_apbd_nasional.execute_time (Calendar)]',
    }),
}) as sipd_apbd_nasionalDimension;
