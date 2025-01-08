var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_tambakpoin_1 = new ol.format.GeoJSON();
var features_tambakpoin_1 = format_tambakpoin_1.readFeatures(json_tambakpoin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakpoin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakpoin_1.addFeatures(features_tambakpoin_1);
var lyr_tambakpoin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambakpoin_1, 
                style: style_tambakpoin_1,
                popuplayertitle: 'tambakpoin',
                interactive: true,
                title: '<img src="styles/legend/tambakpoin_1.png" /> tambakpoin'
            });
var format_swalayanpoin_2 = new ol.format.GeoJSON();
var features_swalayanpoin_2 = format_swalayanpoin_2.readFeatures(json_swalayanpoin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_swalayanpoin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_swalayanpoin_2.addFeatures(features_swalayanpoin_2);
var lyr_swalayanpoin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_swalayanpoin_2, 
                style: style_swalayanpoin_2,
                popuplayertitle: 'swalayanpoin',
                interactive: true,
                title: '<img src="styles/legend/swalayanpoin_2.png" /> swalayanpoin'
            });
var format_sekolahpoin_3 = new ol.format.GeoJSON();
var features_sekolahpoin_3 = format_sekolahpoin_3.readFeatures(json_sekolahpoin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolahpoin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolahpoin_3.addFeatures(features_sekolahpoin_3);
var lyr_sekolahpoin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolahpoin_3, 
                style: style_sekolahpoin_3,
                popuplayertitle: 'sekolahpoin',
                interactive: true,
                title: '<img src="styles/legend/sekolahpoin_3.png" /> sekolahpoin'
            });
var format_rumahpoin_4 = new ol.format.GeoJSON();
var features_rumahpoin_4 = format_rumahpoin_4.readFeatures(json_rumahpoin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahpoin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahpoin_4.addFeatures(features_rumahpoin_4);
var lyr_rumahpoin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahpoin_4, 
                style: style_rumahpoin_4,
                popuplayertitle: 'rumahpoin',
                interactive: true,
                title: '<img src="styles/legend/rumahpoin_4.png" /> rumahpoin'
            });
var format_tambak_5 = new ol.format.GeoJSON();
var features_tambak_5 = format_tambak_5.readFeatures(json_tambak_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambak_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambak_5.addFeatures(features_tambak_5);
var lyr_tambak_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambak_5, 
                style: style_tambak_5,
                popuplayertitle: 'tambak',
                interactive: true,
                title: '<img src="styles/legend/tambak_5.png" /> tambak'
            });
var format_swalayan_6 = new ol.format.GeoJSON();
var features_swalayan_6 = format_swalayan_6.readFeatures(json_swalayan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_swalayan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_swalayan_6.addFeatures(features_swalayan_6);
var lyr_swalayan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_swalayan_6, 
                style: style_swalayan_6,
                popuplayertitle: 'swalayan',
                interactive: true,
                title: '<img src="styles/legend/swalayan_6.png" /> swalayan'
            });
var format_supermarket_7 = new ol.format.GeoJSON();
var features_supermarket_7 = format_supermarket_7.readFeatures(json_supermarket_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supermarket_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supermarket_7.addFeatures(features_supermarket_7);
var lyr_supermarket_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_supermarket_7, 
                style: style_supermarket_7,
                popuplayertitle: 'super market',
                interactive: true,
                title: '<img src="styles/legend/supermarket_7.png" /> super market'
            });
var format_Sekolah_8 = new ol.format.GeoJSON();
var features_Sekolah_8 = format_Sekolah_8.readFeatures(json_Sekolah_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_8.addFeatures(features_Sekolah_8);
var lyr_Sekolah_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_8, 
                style: style_Sekolah_8,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_8.png" /> Sekolah'
            });
var format_Rumah_9 = new ol.format.GeoJSON();
var features_Rumah_9 = format_Rumah_9.readFeatures(json_Rumah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_9.addFeatures(features_Rumah_9);
var lyr_Rumah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_9, 
                style: style_Rumah_9,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_9.png" /> Rumah'
            });
var format_rumahsendiri_10 = new ol.format.GeoJSON();
var features_rumahsendiri_10 = format_rumahsendiri_10.readFeatures(json_rumahsendiri_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahsendiri_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahsendiri_10.addFeatures(features_rumahsendiri_10);
var lyr_rumahsendiri_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahsendiri_10, 
                style: style_rumahsendiri_10,
                popuplayertitle: 'rumah sendiri',
                interactive: true,
                title: '<img src="styles/legend/rumahsendiri_10.png" /> rumah sendiri'
            });
var format_rukoo_11 = new ol.format.GeoJSON();
var features_rukoo_11 = format_rukoo_11.readFeatures(json_rukoo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rukoo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rukoo_11.addFeatures(features_rukoo_11);
var lyr_rukoo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rukoo_11, 
                style: style_rukoo_11,
                popuplayertitle: 'rukoo',
                interactive: true,
                title: '<img src="styles/legend/rukoo_11.png" /> rukoo'
            });
var format_Pt_12 = new ol.format.GeoJSON();
var features_Pt_12 = format_Pt_12.readFeatures(json_Pt_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pt_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pt_12.addFeatures(features_Pt_12);
var lyr_Pt_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pt_12, 
                style: style_Pt_12,
                popuplayertitle: 'Pt',
                interactive: true,
                title: '<img src="styles/legend/Pt_12.png" /> Pt'
            });
var format_sungai_13 = new ol.format.GeoJSON();
var features_sungai_13 = format_sungai_13.readFeatures(json_sungai_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_13.addFeatures(features_sungai_13);
var lyr_sungai_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_13, 
                style: style_sungai_13,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_13.png" /> sungai'
            });
var format_parit_14 = new ol.format.GeoJSON();
var features_parit_14 = format_parit_14.readFeatures(json_parit_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parit_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parit_14.addFeatures(features_parit_14);
var lyr_parit_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parit_14, 
                style: style_parit_14,
                popuplayertitle: 'parit',
                interactive: true,
                title: '<img src="styles/legend/parit_14.png" /> parit'
            });
var format_batasgampongpanggoi_15 = new ol.format.GeoJSON();
var features_batasgampongpanggoi_15 = format_batasgampongpanggoi_15.readFeatures(json_batasgampongpanggoi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasgampongpanggoi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasgampongpanggoi_15.addFeatures(features_batasgampongpanggoi_15);
var lyr_batasgampongpanggoi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasgampongpanggoi_15, 
                style: style_batasgampongpanggoi_15,
                popuplayertitle: 'batas gampong panggoi',
                interactive: true,
                title: '<img src="styles/legend/batasgampongpanggoi_15.png" /> batas gampong panggoi'
            });
var format_praktek_16 = new ol.format.GeoJSON();
var features_praktek_16 = format_praktek_16.readFeatures(json_praktek_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_praktek_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_praktek_16.addFeatures(features_praktek_16);
var lyr_praktek_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_praktek_16, 
                style: style_praktek_16,
                popuplayertitle: 'praktek',
                interactive: true,
                title: '<img src="styles/legend/praktek_16.png" /> praktek'
            });
var format_panglongkayu_17 = new ol.format.GeoJSON();
var features_panglongkayu_17 = format_panglongkayu_17.readFeatures(json_panglongkayu_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_panglongkayu_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_panglongkayu_17.addFeatures(features_panglongkayu_17);
var lyr_panglongkayu_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_panglongkayu_17, 
                style: style_panglongkayu_17,
                popuplayertitle: 'panglong kayu',
                interactive: true,
                title: '<img src="styles/legend/panglongkayu_17.png" /> panglong kayu'
            });
var format_Mesjid_18 = new ol.format.GeoJSON();
var features_Mesjid_18 = format_Mesjid_18.readFeatures(json_Mesjid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mesjid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mesjid_18.addFeatures(features_Mesjid_18);
var lyr_Mesjid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mesjid_18, 
                style: style_Mesjid_18,
                popuplayertitle: 'Mesjid',
                interactive: true,
                title: '<img src="styles/legend/Mesjid_18.png" /> Mesjid'
            });
var format_lapanganolahraga_19 = new ol.format.GeoJSON();
var features_lapanganolahraga_19 = format_lapanganolahraga_19.readFeatures(json_lapanganolahraga_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapanganolahraga_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapanganolahraga_19.addFeatures(features_lapanganolahraga_19);
var lyr_lapanganolahraga_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapanganolahraga_19, 
                style: style_lapanganolahraga_19,
                popuplayertitle: 'lapangan olahraga',
                interactive: true,
                title: '<img src="styles/legend/lapanganolahraga_19.png" /> lapangan olahraga'
            });
var format_lahansawit_20 = new ol.format.GeoJSON();
var features_lahansawit_20 = format_lahansawit_20.readFeatures(json_lahansawit_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahansawit_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahansawit_20.addFeatures(features_lahansawit_20);
var lyr_lahansawit_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahansawit_20, 
                style: style_lahansawit_20,
                popuplayertitle: 'lahan sawit',
                interactive: true,
                title: '<img src="styles/legend/lahansawit_20.png" /> lahan sawit'
            });
var format_lahankosong_21 = new ol.format.GeoJSON();
var features_lahankosong_21 = format_lahankosong_21.readFeatures(json_lahankosong_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosong_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosong_21.addFeatures(features_lahankosong_21);
var lyr_lahankosong_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahankosong_21, 
                style: style_lahankosong_21,
                popuplayertitle: 'lahan kosong',
                interactive: true,
                title: '<img src="styles/legend/lahankosong_21.png" /> lahan kosong'
            });
var format_kebun_22 = new ol.format.GeoJSON();
var features_kebun_22 = format_kebun_22.readFeatures(json_kebun_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kebun_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kebun_22.addFeatures(features_kebun_22);
var lyr_kebun_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kebun_22, 
                style: style_kebun_22,
                popuplayertitle: 'kebun ',
                interactive: true,
                title: '<img src="styles/legend/kebun_22.png" /> kebun '
            });
var format_kantorpemerintahan_23 = new ol.format.GeoJSON();
var features_kantorpemerintahan_23 = format_kantorpemerintahan_23.readFeatures(json_kantorpemerintahan_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kantorpemerintahan_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kantorpemerintahan_23.addFeatures(features_kantorpemerintahan_23);
var lyr_kantorpemerintahan_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kantorpemerintahan_23, 
                style: style_kantorpemerintahan_23,
                popuplayertitle: 'kantor pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/kantorpemerintahan_23.png" /> kantor pemerintahan'
            });
var format_doorsmer_24 = new ol.format.GeoJSON();
var features_doorsmer_24 = format_doorsmer_24.readFeatures(json_doorsmer_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_doorsmer_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_doorsmer_24.addFeatures(features_doorsmer_24);
var lyr_doorsmer_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_doorsmer_24, 
                style: style_doorsmer_24,
                popuplayertitle: 'doorsmer',
                interactive: true,
                title: '<img src="styles/legend/doorsmer_24.png" /> doorsmer'
            });
var format_cafe_25 = new ol.format.GeoJSON();
var features_cafe_25 = format_cafe_25.readFeatures(json_cafe_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cafe_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cafe_25.addFeatures(features_cafe_25);
var lyr_cafe_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cafe_25, 
                style: style_cafe_25,
                popuplayertitle: 'cafe',
                interactive: true,
                title: '<img src="styles/legend/cafe_25.png" /> cafe'
            });
var format_bengkel_26 = new ol.format.GeoJSON();
var features_bengkel_26 = format_bengkel_26.readFeatures(json_bengkel_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bengkel_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bengkel_26.addFeatures(features_bengkel_26);
var lyr_bengkel_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bengkel_26, 
                style: style_bengkel_26,
                popuplayertitle: 'bengkel',
                interactive: true,
                title: '<img src="styles/legend/bengkel_26.png" /> bengkel'
            });
var format_balaipengajian_27 = new ol.format.GeoJSON();
var features_balaipengajian_27 = format_balaipengajian_27.readFeatures(json_balaipengajian_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaipengajian_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaipengajian_27.addFeatures(features_balaipengajian_27);
var lyr_balaipengajian_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balaipengajian_27, 
                style: style_balaipengajian_27,
                popuplayertitle: 'balai pengajian',
                interactive: true,
                title: '<img src="styles/legend/balaipengajian_27.png" /> balai pengajian'
            });
var format_rukopoin_28 = new ol.format.GeoJSON();
var features_rukopoin_28 = format_rukopoin_28.readFeatures(json_rukopoin_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rukopoin_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rukopoin_28.addFeatures(features_rukopoin_28);
var lyr_rukopoin_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rukopoin_28, 
                style: style_rukopoin_28,
                popuplayertitle: 'rukopoin',
                interactive: true,
                title: '<img src="styles/legend/rukopoin_28.png" /> rukopoin'
            });
var format_ptpoin_29 = new ol.format.GeoJSON();
var features_ptpoin_29 = format_ptpoin_29.readFeatures(json_ptpoin_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptpoin_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ptpoin_29.addFeatures(features_ptpoin_29);
var lyr_ptpoin_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ptpoin_29, 
                style: style_ptpoin_29,
                popuplayertitle: 'ptpoin',
                interactive: true,
                title: '<img src="styles/legend/ptpoin_29.png" /> ptpoin'
            });
var format_praktekpoin_30 = new ol.format.GeoJSON();
var features_praktekpoin_30 = format_praktekpoin_30.readFeatures(json_praktekpoin_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_praktekpoin_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_praktekpoin_30.addFeatures(features_praktekpoin_30);
var lyr_praktekpoin_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_praktekpoin_30, 
                style: style_praktekpoin_30,
                popuplayertitle: 'praktekpoin',
                interactive: true,
                title: '<img src="styles/legend/praktekpoin_30.png" /> praktekpoin'
            });
var format_masjidpoin_31 = new ol.format.GeoJSON();
var features_masjidpoin_31 = format_masjidpoin_31.readFeatures(json_masjidpoin_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjidpoin_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjidpoin_31.addFeatures(features_masjidpoin_31);
var lyr_masjidpoin_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjidpoin_31, 
                style: style_masjidpoin_31,
                popuplayertitle: 'masjidpoin',
                interactive: true,
                title: '<img src="styles/legend/masjidpoin_31.png" /> masjidpoin'
            });
var format_lahankosongpoin_32 = new ol.format.GeoJSON();
var features_lahankosongpoin_32 = format_lahankosongpoin_32.readFeatures(json_lahankosongpoin_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahankosongpoin_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahankosongpoin_32.addFeatures(features_lahankosongpoin_32);
var lyr_lahankosongpoin_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lahankosongpoin_32, 
                style: style_lahankosongpoin_32,
                popuplayertitle: 'lahankosongpoin',
                interactive: true,
                title: '<img src="styles/legend/lahankosongpoin_32.png" /> lahankosongpoin'
            });
var format_cafepoin_33 = new ol.format.GeoJSON();
var features_cafepoin_33 = format_cafepoin_33.readFeatures(json_cafepoin_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cafepoin_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cafepoin_33.addFeatures(features_cafepoin_33);
var lyr_cafepoin_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cafepoin_33, 
                style: style_cafepoin_33,
                popuplayertitle: 'cafepoin',
                interactive: true,
                title: '<img src="styles/legend/cafepoin_33.png" /> cafepoin'
            });
var format_bengkel_34 = new ol.format.GeoJSON();
var features_bengkel_34 = format_bengkel_34.readFeatures(json_bengkel_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bengkel_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bengkel_34.addFeatures(features_bengkel_34);
var lyr_bengkel_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bengkel_34, 
                style: style_bengkel_34,
                popuplayertitle: 'bengkel',
                interactive: true,
                title: '<img src="styles/legend/bengkel_34.png" /> bengkel'
            });
var format_balaipengajianpoin_35 = new ol.format.GeoJSON();
var features_balaipengajianpoin_35 = format_balaipengajianpoin_35.readFeatures(json_balaipengajianpoin_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balaipengajianpoin_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balaipengajianpoin_35.addFeatures(features_balaipengajianpoin_35);
var lyr_balaipengajianpoin_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_balaipengajianpoin_35, 
                style: style_balaipengajianpoin_35,
                popuplayertitle: 'balaipengajianpoin',
                interactive: true,
                title: '<img src="styles/legend/balaipengajianpoin_35.png" /> balaipengajianpoin'
            });

lyr_Google_0.setVisible(true);lyr_tambakpoin_1.setVisible(true);lyr_swalayanpoin_2.setVisible(true);lyr_sekolahpoin_3.setVisible(true);lyr_rumahpoin_4.setVisible(true);lyr_tambak_5.setVisible(true);lyr_swalayan_6.setVisible(true);lyr_supermarket_7.setVisible(true);lyr_Sekolah_8.setVisible(true);lyr_Rumah_9.setVisible(true);lyr_rumahsendiri_10.setVisible(true);lyr_rukoo_11.setVisible(true);lyr_Pt_12.setVisible(true);lyr_sungai_13.setVisible(true);lyr_parit_14.setVisible(true);lyr_batasgampongpanggoi_15.setVisible(true);lyr_praktek_16.setVisible(true);lyr_panglongkayu_17.setVisible(true);lyr_Mesjid_18.setVisible(true);lyr_lapanganolahraga_19.setVisible(true);lyr_lahansawit_20.setVisible(true);lyr_lahankosong_21.setVisible(true);lyr_kebun_22.setVisible(true);lyr_kantorpemerintahan_23.setVisible(true);lyr_doorsmer_24.setVisible(true);lyr_cafe_25.setVisible(true);lyr_bengkel_26.setVisible(true);lyr_balaipengajian_27.setVisible(true);lyr_rukopoin_28.setVisible(true);lyr_ptpoin_29.setVisible(true);lyr_praktekpoin_30.setVisible(true);lyr_masjidpoin_31.setVisible(true);lyr_lahankosongpoin_32.setVisible(true);lyr_cafepoin_33.setVisible(true);lyr_bengkel_34.setVisible(true);lyr_balaipengajianpoin_35.setVisible(true);
var layersList = [lyr_Google_0,lyr_tambakpoin_1,lyr_swalayanpoin_2,lyr_sekolahpoin_3,lyr_rumahpoin_4,lyr_tambak_5,lyr_swalayan_6,lyr_supermarket_7,lyr_Sekolah_8,lyr_Rumah_9,lyr_rumahsendiri_10,lyr_rukoo_11,lyr_Pt_12,lyr_sungai_13,lyr_parit_14,lyr_batasgampongpanggoi_15,lyr_praktek_16,lyr_panglongkayu_17,lyr_Mesjid_18,lyr_lapanganolahraga_19,lyr_lahansawit_20,lyr_lahankosong_21,lyr_kebun_22,lyr_kantorpemerintahan_23,lyr_doorsmer_24,lyr_cafe_25,lyr_bengkel_26,lyr_balaipengajian_27,lyr_rukopoin_28,lyr_ptpoin_29,lyr_praktekpoin_30,lyr_masjidpoin_31,lyr_lahankosongpoin_32,lyr_cafepoin_33,lyr_bengkel_34,lyr_balaipengajianpoin_35];
lyr_tambakpoin_1.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'jns_ikan': 'jns_ikan', 'stts_usaha': 'stts_usaha', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_swalayanpoin_2.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_sekolahpoin_3.set('fieldAliases', {'Id': 'Id', 'nm_sekolah': 'nm_sekolah', 'nm_kepsek': 'nm_kepsek', 'contact': 'contact', 'luas_tanah': 'luas_tanah', 'luas_bngnn': 'luas_bngnn', 'ORIG_FID': 'ORIG_FID', });
lyr_rumahpoin_4.set('fieldAliases', {'Id': 'Id', 'jns_bngnn': 'jns_bngnn', 'no_rumah': 'no_rumah', 'jns_lantai': 'jns_lantai', 'nama_pnghn': 'nama_pnghn', 'pnddkn_trk': 'pnddkn_trk', 'pekerjaan': 'pekerjaan', 'no_telepon': 'no_telepon', 'no_ktp': 'no_ktp', 'jmlh_laki': 'jmlh_laki', 'jmlh_prmpn': 'jmlh_prmpn', 'total_huni': 'total_huni', 'luas_bgnn': 'luas_bgnn', 'stts_kpmlk': 'stts_kpmlk', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', 'Y_1': 'Y_1', });
lyr_tambak_5.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'no_cntct': 'no_cntct', 'jns_ikan': 'jns_ikan', 'stts_usaha': 'stts_usaha', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', });
lyr_swalayan_6.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', });
lyr_supermarket_7.set('fieldAliases', {'Id': 'Id', });
lyr_Sekolah_8.set('fieldAliases', {'Id': 'Id', 'nm_sekolah': 'nm_sekolah', 'nm_kepsek': 'nm_kepsek', 'contact': 'contact', 'luas_tanah': 'luas_tanah', 'luas_bngnn': 'luas_bngnn', });
lyr_Rumah_9.set('fieldAliases', {'Id': 'Id', 'jns_bngnn': 'jns_bngnn', 'no_rumah': 'no_rumah', 'jns_lantai': 'jns_lantai', 'nama_pnghn': 'nama_pnghn', 'pnddkn_trk': 'pnddkn_trk', 'pekerjaan': 'pekerjaan', 'no_telepon': 'no_telepon', 'no_ktp': 'no_ktp', 'jmlh_laki': 'jmlh_laki', 'jmlh_prmpn': 'jmlh_prmpn', 'total_huni': 'total_huni', 'luas_bgnn': 'luas_bgnn', 'stts_kpmlk': 'stts_kpmlk', });
lyr_rumahsendiri_10.set('fieldAliases', {'Id': 'Id', 'no_Rumah': 'no_Rumah', 'stts_kpmlk': 'stts_kpmlk', 'jns_bngnn': 'jns_bngnn', 'jns_lntai': 'jns_lntai', 'namakk_png': 'namakk_png', 'pnddkn_trk': 'pnddkn_trk', 'pekerjaan': 'pekerjaan', 'no_tlpn': 'no_tlpn', 'jmlh_lki': 'jmlh_lki', 'jmlh_prmpn': 'jmlh_prmpn', 'total_pngh': 'total_pngh', 'luas_bngnn': 'luas_bngnn', });
lyr_rukoo_11.set('fieldAliases', {'Id': 'Id', 'namaruko': 'namaruko', 'namapmlk': 'namapmlk', 'luas': 'luas', 'contact': 'contact', });
lyr_Pt_12.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', });
lyr_sungai_13.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'panjang': 'panjang', 'lebar': 'lebar', });
lyr_parit_14.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'nama_1': 'nama_1', 'panjangg': 'panjangg', 'lebar': 'lebar', 'jenis': 'jenis', });
lyr_batasgampongpanggoi_15.set('fieldAliases', {'Id': 'Id', });
lyr_praktek_16.set('fieldAliases', {'Id': 'Id', 'namapemilk': 'namapemilk', 'namapemlk': 'namapemlk', 'luas': 'luas', 'tipeprakte': 'tipeprakte', });
lyr_panglongkayu_17.set('fieldAliases', {'Id': 'Id', });
lyr_Mesjid_18.set('fieldAliases', {'Id': 'Id', 'nm_mesjid': 'nm_mesjid', 'luas_bngnn': 'luas_bngnn', 'luas_tanah': 'luas_tanah', 'nm_imam': 'nm_imam', 'contact': 'contact', });
lyr_lapanganolahraga_19.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_kegiat': 'jns_kegiat', 'luas_lahan': 'luas_lahan', 'luas_bngnn': 'luas_bngnn', });
lyr_lahansawit_20.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_tnmn': 'jns_tnmn', 'prdk_produ': 'prdk_produ', 'jns_irigas': 'jns_irigas', 'luas_lahan': 'luas_lahan', 'status': 'status', });
lyr_lahankosong_21.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_tnmn': 'jns_tnmn', 'prdk_produ': 'prdk_produ', 'jns_irigas': 'jns_irigas', 'luas_lahan': 'luas_lahan', 'status': 'status', });
lyr_kebun_22.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_tnmn': 'jns_tnmn', 'prdks_prdk': 'prdks_prdk', 'jns_irigsi': 'jns_irigsi', 'luas_lahan': 'luas_lahan', 'status': 'status', });
lyr_kantorpemerintahan_23.set('fieldAliases', {'Id': 'Id', 'nama_kanto': 'nama_kanto', 'nm_kpl_knt': 'nm_kpl_knt', 'contact': 'contact', 'luas_tanah': 'luas_tanah', 'luas_bngnn': 'luas_bngnn', });
lyr_doorsmer_24.set('fieldAliases', {'Id': 'Id', });
lyr_cafe_25.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', });
lyr_bengkel_26.set('fieldAliases', {'Id': 'Id', 'namapmlk': 'namapmlk', 'nama_bnkl': 'nama_bnkl', 'luas': 'luas', 'namapmlkk': 'namapmlkk', 'nmabnkl': 'nmabnkl', 'nmabngkl': 'nmabngkl', 'luas_bngkl': 'luas_bngkl', });
lyr_balaipengajian_27.set('fieldAliases', {'Id': 'Id', 'luas': 'luas', 'namabalai': 'namabalai', 'namabalaii': 'namabalaii', });
lyr_rukopoin_28.set('fieldAliases', {'Id': 'Id', 'namaruko': 'namaruko', 'namapmlk': 'namapmlk', 'luas': 'luas', 'contact': 'contact', 'ORIG_FID': 'ORIG_FID', });
lyr_ptpoin_29.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_praktekpoin_30.set('fieldAliases', {'Id': 'Id', 'namapemlk': 'namapemlk', 'luas': 'luas', 'tipeprakte': 'tipeprakte', 'ORIG_FID': 'ORIG_FID', });
lyr_masjidpoin_31.set('fieldAliases', {'Id': 'Id', 'nm_mesjid': 'nm_mesjid', 'luas_bngnn': 'luas_bngnn', 'luas_tanah': 'luas_tanah', 'nm_imam': 'nm_imam', 'contact': 'contact', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_lahankosongpoin_32.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_tnmn': 'jns_tnmn', 'prdk_produ': 'prdk_produ', 'jns_irigas': 'jns_irigas', 'luas_lahan': 'luas_lahan', 'status': 'status', 'ORIG_FID': 'ORIG_FID', });
lyr_cafepoin_33.set('fieldAliases', {'Id': 'Id', 'nama_pmlk': 'nama_pmlk', 'contact': 'contact', 'jns_usha': 'jns_usha', 'status': 'status', 'luas_bngnn': 'luas_bngnn', 'luas_lahan': 'luas_lahan', 'ORIG_FID': 'ORIG_FID', });
lyr_bengkel_34.set('fieldAliases', {'Id': 'Id', 'namapmlkk': 'namapmlkk', 'nmabngkl': 'nmabngkl', 'luas_bngkl': 'luas_bngkl', 'ORIG_FID': 'ORIG_FID', });
lyr_balaipengajianpoin_35.set('fieldAliases', {'Id': 'Id', 'luas': 'luas', 'namabalaii': 'namabalaii', 'ORIG_FID': 'ORIG_FID', });
lyr_tambakpoin_1.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'jns_ikan': '', 'stts_usaha': '', 'luas_bngnn': '', 'luas_lahan': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_swalayanpoin_2.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_sekolahpoin_3.set('fieldImages', {'Id': '', 'nm_sekolah': '', 'nm_kepsek': '', 'contact': '', 'luas_tanah': '', 'luas_bngnn': '', 'ORIG_FID': '', });
lyr_rumahpoin_4.set('fieldImages', {'Id': '', 'jns_bngnn': '', 'no_rumah': '', 'jns_lantai': '', 'nama_pnghn': '', 'pnddkn_trk': '', 'pekerjaan': '', 'no_telepon': '', 'no_ktp': '', 'jmlh_laki': '', 'jmlh_prmpn': '', 'total_huni': '', 'luas_bgnn': '', 'stts_kpmlk': '', 'ORIG_FID': '', 'X': '', 'Y': '', 'Y_1': '', });
lyr_tambak_5.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'no_cntct': '', 'jns_ikan': '', 'stts_usaha': '', 'luas_bngnn': '', 'luas_lahan': '', });
lyr_swalayan_6.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', });
lyr_supermarket_7.set('fieldImages', {'Id': '', });
lyr_Sekolah_8.set('fieldImages', {'Id': '', 'nm_sekolah': '', 'nm_kepsek': '', 'contact': '', 'luas_tanah': '', 'luas_bngnn': '', });
lyr_Rumah_9.set('fieldImages', {'Id': '', 'jns_bngnn': '', 'no_rumah': '', 'jns_lantai': '', 'nama_pnghn': '', 'pnddkn_trk': '', 'pekerjaan': '', 'no_telepon': '', 'no_ktp': '', 'jmlh_laki': '', 'jmlh_prmpn': '', 'total_huni': '', 'luas_bgnn': '', 'stts_kpmlk': '', });
lyr_rumahsendiri_10.set('fieldImages', {'Id': '', 'no_Rumah': '', 'stts_kpmlk': '', 'jns_bngnn': '', 'jns_lntai': '', 'namakk_png': '', 'pnddkn_trk': '', 'pekerjaan': '', 'no_tlpn': '', 'jmlh_lki': '', 'jmlh_prmpn': '', 'total_pngh': '', 'luas_bngnn': '', });
lyr_rukoo_11.set('fieldImages', {'Id': '', 'namaruko': '', 'namapmlk': '', 'luas': '', 'contact': '', });
lyr_Pt_12.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', });
lyr_sungai_13.set('fieldImages', {'Id': '', 'nama': '', 'panjang': '', 'lebar': '', });
lyr_parit_14.set('fieldImages', {'Id': '', 'nama': '', 'nama_1': '', 'panjangg': '', 'lebar': '', 'jenis': '', });
lyr_batasgampongpanggoi_15.set('fieldImages', {'Id': '', });
lyr_praktek_16.set('fieldImages', {'Id': '', 'namapemilk': '', 'namapemlk': '', 'luas': '', 'tipeprakte': '', });
lyr_panglongkayu_17.set('fieldImages', {'Id': '', });
lyr_Mesjid_18.set('fieldImages', {'Id': '', 'nm_mesjid': '', 'luas_bngnn': '', 'luas_tanah': '', 'nm_imam': '', 'contact': '', });
lyr_lapanganolahraga_19.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_kegiat': '', 'luas_lahan': '', 'luas_bngnn': '', });
lyr_lahansawit_20.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_tnmn': '', 'prdk_produ': '', 'jns_irigas': '', 'luas_lahan': '', 'status': '', });
lyr_lahankosong_21.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_tnmn': '', 'prdk_produ': '', 'jns_irigas': '', 'luas_lahan': '', 'status': '', });
lyr_kebun_22.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_tnmn': '', 'prdks_prdk': '', 'jns_irigsi': '', 'luas_lahan': '', 'status': '', });
lyr_kantorpemerintahan_23.set('fieldImages', {'Id': '', 'nama_kanto': '', 'nm_kpl_knt': '', 'contact': '', 'luas_tanah': '', 'luas_bngnn': '', });
lyr_doorsmer_24.set('fieldImages', {'Id': '', });
lyr_cafe_25.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', });
lyr_bengkel_26.set('fieldImages', {'Id': '', 'namapmlk': '', 'nama_bnkl': '', 'luas': '', 'namapmlkk': '', 'nmabnkl': '', 'nmabngkl': '', 'luas_bngkl': '', });
lyr_balaipengajian_27.set('fieldImages', {'Id': '', 'luas': '', 'namabalai': '', 'namabalaii': '', });
lyr_rukopoin_28.set('fieldImages', {'Id': '', 'namaruko': '', 'namapmlk': '', 'luas': '', 'contact': '', 'ORIG_FID': '', });
lyr_ptpoin_29.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_praktekpoin_30.set('fieldImages', {'Id': '', 'namapemlk': '', 'luas': '', 'tipeprakte': '', 'ORIG_FID': '', });
lyr_masjidpoin_31.set('fieldImages', {'Id': '', 'nm_mesjid': '', 'luas_bngnn': '', 'luas_tanah': '', 'nm_imam': '', 'contact': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_lahankosongpoin_32.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_tnmn': '', 'prdk_produ': '', 'jns_irigas': '', 'luas_lahan': '', 'status': '', 'ORIG_FID': '', });
lyr_cafepoin_33.set('fieldImages', {'Id': '', 'nama_pmlk': '', 'contact': '', 'jns_usha': '', 'status': '', 'luas_bngnn': '', 'luas_lahan': '', 'ORIG_FID': '', });
lyr_bengkel_34.set('fieldImages', {'Id': '', 'namapmlkk': '', 'nmabngkl': '', 'luas_bngkl': '', 'ORIG_FID': '', });
lyr_balaipengajianpoin_35.set('fieldImages', {'Id': '', 'luas': '', 'namabalaii': '', 'ORIG_FID': '', });
lyr_tambakpoin_1.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'jns_ikan': 'no label', 'stts_usaha': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_swalayanpoin_2.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_sekolahpoin_3.set('fieldLabels', {'Id': 'no label', 'nm_sekolah': 'no label', 'nm_kepsek': 'no label', 'contact': 'no label', 'luas_tanah': 'no label', 'luas_bngnn': 'no label', 'ORIG_FID': 'no label', });
lyr_rumahpoin_4.set('fieldLabels', {'Id': 'no label', 'jns_bngnn': 'no label', 'no_rumah': 'no label', 'jns_lantai': 'no label', 'nama_pnghn': 'no label', 'pnddkn_trk': 'no label', 'pekerjaan': 'no label', 'no_telepon': 'no label', 'no_ktp': 'no label', 'jmlh_laki': 'no label', 'jmlh_prmpn': 'no label', 'total_huni': 'no label', 'luas_bgnn': 'no label', 'stts_kpmlk': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', 'Y_1': 'no label', });
lyr_tambak_5.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'no_cntct': 'no label', 'jns_ikan': 'no label', 'stts_usaha': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', });
lyr_swalayan_6.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', });
lyr_supermarket_7.set('fieldLabels', {'Id': 'no label', });
lyr_Sekolah_8.set('fieldLabels', {'Id': 'no label', 'nm_sekolah': 'no label', 'nm_kepsek': 'no label', 'contact': 'no label', 'luas_tanah': 'no label', 'luas_bngnn': 'no label', });
lyr_Rumah_9.set('fieldLabels', {'Id': 'no label', 'jns_bngnn': 'no label', 'no_rumah': 'no label', 'jns_lantai': 'no label', 'nama_pnghn': 'no label', 'pnddkn_trk': 'no label', 'pekerjaan': 'no label', 'no_telepon': 'no label', 'no_ktp': 'no label', 'jmlh_laki': 'no label', 'jmlh_prmpn': 'no label', 'total_huni': 'no label', 'luas_bgnn': 'no label', 'stts_kpmlk': 'no label', });
lyr_rumahsendiri_10.set('fieldLabels', {'Id': 'no label', 'no_Rumah': 'no label', 'stts_kpmlk': 'no label', 'jns_bngnn': 'no label', 'jns_lntai': 'no label', 'namakk_png': 'no label', 'pnddkn_trk': 'no label', 'pekerjaan': 'no label', 'no_tlpn': 'no label', 'jmlh_lki': 'no label', 'jmlh_prmpn': 'no label', 'total_pngh': 'no label', 'luas_bngnn': 'no label', });
lyr_rukoo_11.set('fieldLabels', {'Id': 'no label', 'namaruko': 'no label', 'namapmlk': 'no label', 'luas': 'no label', 'contact': 'no label', });
lyr_Pt_12.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', });
lyr_sungai_13.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'panjang': 'no label', 'lebar': 'no label', });
lyr_parit_14.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'nama_1': 'no label', 'panjangg': 'no label', 'lebar': 'no label', 'jenis': 'no label', });
lyr_batasgampongpanggoi_15.set('fieldLabels', {'Id': 'no label', });
lyr_praktek_16.set('fieldLabels', {'Id': 'no label', 'namapemilk': 'no label', 'namapemlk': 'no label', 'luas': 'no label', 'tipeprakte': 'no label', });
lyr_panglongkayu_17.set('fieldLabels', {'Id': 'no label', });
lyr_Mesjid_18.set('fieldLabels', {'Id': 'no label', 'nm_mesjid': 'no label', 'luas_bngnn': 'no label', 'luas_tanah': 'no label', 'nm_imam': 'no label', 'contact': 'no label', });
lyr_lapanganolahraga_19.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_kegiat': 'no label', 'luas_lahan': 'no label', 'luas_bngnn': 'no label', });
lyr_lahansawit_20.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_tnmn': 'no label', 'prdk_produ': 'no label', 'jns_irigas': 'no label', 'luas_lahan': 'no label', 'status': 'no label', });
lyr_lahankosong_21.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_tnmn': 'no label', 'prdk_produ': 'no label', 'jns_irigas': 'no label', 'luas_lahan': 'no label', 'status': 'no label', });
lyr_kebun_22.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_tnmn': 'no label', 'prdks_prdk': 'no label', 'jns_irigsi': 'no label', 'luas_lahan': 'no label', 'status': 'no label', });
lyr_kantorpemerintahan_23.set('fieldLabels', {'Id': 'no label', 'nama_kanto': 'no label', 'nm_kpl_knt': 'no label', 'contact': 'no label', 'luas_tanah': 'no label', 'luas_bngnn': 'no label', });
lyr_doorsmer_24.set('fieldLabels', {'Id': 'no label', });
lyr_cafe_25.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', });
lyr_bengkel_26.set('fieldLabels', {'Id': 'no label', 'namapmlk': 'no label', 'nama_bnkl': 'no label', 'luas': 'no label', 'namapmlkk': 'no label', 'nmabnkl': 'no label', 'nmabngkl': 'no label', 'luas_bngkl': 'no label', });
lyr_balaipengajian_27.set('fieldLabels', {'Id': 'no label', 'luas': 'no label', 'namabalai': 'no label', 'namabalaii': 'no label', });
lyr_rukopoin_28.set('fieldLabels', {'Id': 'no label', 'namaruko': 'no label', 'namapmlk': 'no label', 'luas': 'no label', 'contact': 'no label', 'ORIG_FID': 'no label', });
lyr_ptpoin_29.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_praktekpoin_30.set('fieldLabels', {'Id': 'no label', 'namapemlk': 'no label', 'luas': 'no label', 'tipeprakte': 'no label', 'ORIG_FID': 'no label', });
lyr_masjidpoin_31.set('fieldLabels', {'Id': 'no label', 'nm_mesjid': 'no label', 'luas_bngnn': 'no label', 'luas_tanah': 'no label', 'nm_imam': 'no label', 'contact': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_lahankosongpoin_32.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_tnmn': 'no label', 'prdk_produ': 'no label', 'jns_irigas': 'no label', 'luas_lahan': 'no label', 'status': 'no label', 'ORIG_FID': 'no label', });
lyr_cafepoin_33.set('fieldLabels', {'Id': 'no label', 'nama_pmlk': 'no label', 'contact': 'no label', 'jns_usha': 'no label', 'status': 'no label', 'luas_bngnn': 'no label', 'luas_lahan': 'no label', 'ORIG_FID': 'no label', });
lyr_bengkel_34.set('fieldLabels', {'Id': 'no label', 'namapmlkk': 'no label', 'nmabngkl': 'no label', 'luas_bngkl': 'no label', 'ORIG_FID': 'no label', });
lyr_balaipengajianpoin_35.set('fieldLabels', {'Id': 'no label', 'luas': 'no label', 'namabalaii': 'no label', 'ORIG_FID': 'no label', });
lyr_balaipengajianpoin_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});