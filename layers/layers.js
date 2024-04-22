var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nairobi_1 = new ol.format.GeoJSON();
var features_Nairobi_1 = format_Nairobi_1.readFeatures(json_Nairobi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nairobi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nairobi_1.addFeatures(features_Nairobi_1);
var lyr_Nairobi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nairobi_1, 
                style: style_Nairobi_1,
                popuplayertitle: "Nairobi",
                interactive: true,
                title: '<img src="styles/legend/Nairobi_1.png" /> Nairobi'
            });
var format_Nairobiroads_2 = new ol.format.GeoJSON();
var features_Nairobiroads_2 = format_Nairobiroads_2.readFeatures(json_Nairobiroads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nairobiroads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nairobiroads_2.addFeatures(features_Nairobiroads_2);
var lyr_Nairobiroads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nairobiroads_2, 
                style: style_Nairobiroads_2,
                popuplayertitle: "Nairobi roads",
                interactive: true,
                title: '<img src="styles/legend/Nairobiroads_2.png" /> Nairobi roads'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Nairobi_1.setVisible(true);lyr_Nairobiroads_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Nairobi_1,lyr_Nairobiroads_2];
lyr_Nairobi_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_Nairobiroads_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_sw': 'name_sw', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Nairobi_1.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'ADM1_EN': '', 'ADM1_PCODE': '', 'ADM1_REF': '', 'ADM1ALT1EN': '', 'ADM1ALT2EN': '', 'ADM0_EN': '', 'ADM0_PCODE': '', 'date': '', 'validOn': '', 'validTo': '', });
lyr_Nairobiroads_2.set('fieldImages', {'name': '', 'name_en': '', 'highway': '', 'surface': '', 'smoothness': '', 'width': '', 'lanes': '', 'oneway': '', 'bridge': '', 'layer': '', 'source': '', 'name_sw': '', 'osm_id': '', 'osm_type': '', });
lyr_Nairobi_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'inline label - always visible', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Nairobiroads_2.set('fieldLabels', {'name': 'inline label - always visible', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_sw': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Nairobiroads_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});