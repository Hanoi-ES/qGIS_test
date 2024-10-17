var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_qfield_form_tutorialszones_1 = new ol.format.GeoJSON();
var features_qfield_form_tutorialszones_1 = format_qfield_form_tutorialszones_1.readFeatures(json_qfield_form_tutorialszones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qfield_form_tutorialszones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qfield_form_tutorialszones_1.addFeatures(features_qfield_form_tutorialszones_1);
var lyr_qfield_form_tutorialszones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qfield_form_tutorialszones_1, 
                style: style_qfield_form_tutorialszones_1,
                popuplayertitle: "qfield_form_tutorials — zones",
                interactive: true,
                title: '<img src="styles/legend/qfield_form_tutorialszones_1.png" /> qfield_form_tutorials — zones'
            });
var format_qfield_form_1_2 = new ol.format.GeoJSON();
var features_qfield_form_1_2 = format_qfield_form_1_2.readFeatures(json_qfield_form_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qfield_form_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qfield_form_1_2.addFeatures(features_qfield_form_1_2);
var lyr_qfield_form_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qfield_form_1_2, 
                style: style_qfield_form_1_2,
                popuplayertitle: "qfield_form_1",
                interactive: true,
                title: '<img src="styles/legend/qfield_form_1_2.png" /> qfield_form_1'
            });
var format_worldadministrativeboundaries_3 = new ol.format.GeoJSON();
var features_worldadministrativeboundaries_3 = format_worldadministrativeboundaries_3.readFeatures(json_worldadministrativeboundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_worldadministrativeboundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_worldadministrativeboundaries_3.addFeatures(features_worldadministrativeboundaries_3);
var lyr_worldadministrativeboundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_worldadministrativeboundaries_3, 
                style: style_worldadministrativeboundaries_3,
                popuplayertitle: "world-administrative-boundaries",
                interactive: true,
                title: '<img src="styles/legend/worldadministrativeboundaries_3.png" /> world-administrative-boundaries'
            });
var format_qfield_form_tutorialsplants_4 = new ol.format.GeoJSON();
var features_qfield_form_tutorialsplants_4 = format_qfield_form_tutorialsplants_4.readFeatures(json_qfield_form_tutorialsplants_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qfield_form_tutorialsplants_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qfield_form_tutorialsplants_4.addFeatures(features_qfield_form_tutorialsplants_4);
var lyr_qfield_form_tutorialsplants_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qfield_form_tutorialsplants_4, 
                style: style_qfield_form_tutorialsplants_4,
                popuplayertitle: "qfield_form_tutorials — plants",
                interactive: true,
                title: '<img src="styles/legend/qfield_form_tutorialsplants_4.png" /> qfield_form_tutorials — plants'
            });
var format_qfield_form_tutorialsnotes_general_5 = new ol.format.GeoJSON();
var features_qfield_form_tutorialsnotes_general_5 = format_qfield_form_tutorialsnotes_general_5.readFeatures(json_qfield_form_tutorialsnotes_general_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_qfield_form_tutorialsnotes_general_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_qfield_form_tutorialsnotes_general_5.addFeatures(features_qfield_form_tutorialsnotes_general_5);
var lyr_qfield_form_tutorialsnotes_general_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_qfield_form_tutorialsnotes_general_5, 
                style: style_qfield_form_tutorialsnotes_general_5,
                popuplayertitle: "qfield_form_tutorials — notes_general",
                interactive: true,
                title: '<img src="styles/legend/qfield_form_tutorialsnotes_general_5.png" /> qfield_form_tutorials — notes_general'
            });
var format_Average_rainfall_Wetseason_6 = new ol.format.GeoJSON();
var features_Average_rainfall_Wetseason_6 = format_Average_rainfall_Wetseason_6.readFeatures(json_Average_rainfall_Wetseason_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Average_rainfall_Wetseason_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Average_rainfall_Wetseason_6.addFeatures(features_Average_rainfall_Wetseason_6);
var lyr_Average_rainfall_Wetseason_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Average_rainfall_Wetseason_6, 
                style: style_Average_rainfall_Wetseason_6,
                popuplayertitle: "Average_rainfall_Wetseason",
                interactive: true,
                title: '<img src="styles/legend/Average_rainfall_Wetseason_6.png" /> Average_rainfall_Wetseason'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_qfield_form_tutorialszones_1.setVisible(true);lyr_qfield_form_1_2.setVisible(true);lyr_worldadministrativeboundaries_3.setVisible(true);lyr_qfield_form_tutorialsplants_4.setVisible(true);lyr_qfield_form_tutorialsnotes_general_5.setVisible(true);lyr_Average_rainfall_Wetseason_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_qfield_form_tutorialszones_1,lyr_qfield_form_1_2,lyr_worldadministrativeboundaries_3,lyr_qfield_form_tutorialsplants_4,lyr_qfield_form_tutorialsnotes_general_5,lyr_Average_rainfall_Wetseason_6];
lyr_qfield_form_tutorialszones_1.set('fieldAliases', {'fid': 'fid', 'comment': 'comment', 'label': 'label', 'type': 'type', });
lyr_qfield_form_1_2.set('fieldAliases', {'fid': 'fid', 'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_': 'iso_3166_1_', 'french_shor': 'french_shor', });
lyr_worldadministrativeboundaries_3.set('fieldAliases', {'iso3': 'iso3', 'status': 'status', 'color_code': 'color_code', 'name': 'name', 'continent': 'continent', 'region': 'region', 'iso_3166_1_': 'iso_3166_1_', 'french_shor': 'french_shor', });
lyr_qfield_form_tutorialsplants_4.set('fieldAliases', {'fid': 'fid', 'species': 'species', 'condition': 'condition', 'max_height_ft': 'max_height_ft', 'when_planted': 'when_planted', 'type': 'type', 'comment': 'comment', 'bloom_start': 'bloom_start', 'bloom_end': 'bloom_end', 'photo': 'photo', 'yarddb_id': 'yarddb_id', });
lyr_qfield_form_tutorialsnotes_general_5.set('fieldAliases', {'fid': 'fid', 'label': 'label', 'notes': 'notes', });
lyr_Average_rainfall_Wetseason_6.set('fieldAliases', {'STATION': 'STATION', 'STATION_NA': 'STATION_NA', 'ELEVATION': 'ELEVATION', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'WET_AVG': 'WET_AVG', 'wet_avg_mm': 'wet_avg_mm', });
lyr_qfield_form_tutorialszones_1.set('fieldImages', {'fid': '', 'comment': '', 'label': '', 'type': '', });
lyr_qfield_form_1_2.set('fieldImages', {'fid': '', 'iso3': '', 'status': '', 'color_code': '', 'name': '', 'continent': '', 'region': '', 'iso_3166_1_': '', 'french_shor': '', });
lyr_worldadministrativeboundaries_3.set('fieldImages', {'iso3': '', 'status': '', 'color_code': '', 'name': '', 'continent': '', 'region': '', 'iso_3166_1_': '', 'french_shor': '', });
lyr_qfield_form_tutorialsplants_4.set('fieldImages', {'fid': '', 'species': '', 'condition': '', 'max_height_ft': '', 'when_planted': '', 'type': '', 'comment': '', 'bloom_start': '', 'bloom_end': '', 'photo': '', 'yarddb_id': '', });
lyr_qfield_form_tutorialsnotes_general_5.set('fieldImages', {'fid': 'TextEdit', 'label': 'TextEdit', 'notes': 'TextEdit', });
lyr_Average_rainfall_Wetseason_6.set('fieldImages', {'STATION': '', 'STATION_NA': '', 'ELEVATION': '', 'LATITUDE': '', 'LONGITUDE': '', 'WET_AVG': '', 'wet_avg_mm': '', });
lyr_qfield_form_tutorialszones_1.set('fieldLabels', {'fid': 'no label', 'comment': 'no label', 'label': 'no label', 'type': 'no label', });
lyr_qfield_form_1_2.set('fieldLabels', {'fid': 'no label', 'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'no label', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_': 'no label', 'french_shor': 'no label', });
lyr_worldadministrativeboundaries_3.set('fieldLabels', {'iso3': 'no label', 'status': 'no label', 'color_code': 'no label', 'name': 'inline label - always visible', 'continent': 'no label', 'region': 'no label', 'iso_3166_1_': 'no label', 'french_shor': 'no label', });
lyr_qfield_form_tutorialsplants_4.set('fieldLabels', {'fid': 'no label', 'species': 'no label', 'condition': 'no label', 'max_height_ft': 'no label', 'when_planted': 'no label', 'type': 'no label', 'comment': 'no label', 'bloom_start': 'no label', 'bloom_end': 'no label', 'photo': 'no label', 'yarddb_id': 'no label', });
lyr_qfield_form_tutorialsnotes_general_5.set('fieldLabels', {'fid': 'inline label - always visible', 'label': 'inline label - visible with data', 'notes': 'no label', });
lyr_Average_rainfall_Wetseason_6.set('fieldLabels', {'STATION': 'inline label - always visible', 'STATION_NA': 'no label', 'ELEVATION': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'WET_AVG': 'no label', 'wet_avg_mm': 'no label', });
lyr_Average_rainfall_Wetseason_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});