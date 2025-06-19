ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([101.035247, -5.093999, 104.860286, -3.080608]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> '
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> '
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> '
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> '
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
cluster__5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__5
});
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:cluster__5, 
                style: style__5,
                popuplayertitle: '',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5];
lyr__1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr__2.set('fieldAliases', {'Name': 'Name', 'KOMODITAS': 'KOMODITAS', 'FOTO': 'FOTO', });
lyr__3.set('fieldAliases', {'Name': 'Name', 'KOMODITAS': 'KOMODITAS', 'FOTO': 'FOTO', });
lyr__4.set('fieldAliases', {'Name': 'Name', 'KOMODITAS': 'KOMODITAS', 'FOTO': 'FOTO', });
lyr__5.set('fieldAliases', {'Name': 'Name', 'KOMODITAS': 'KOMODITAS', 'FOTO': 'FOTO', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr__2.set('fieldImages', {'Name': 'TextEdit', 'KOMODITAS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr__3.set('fieldImages', {'Name': 'TextEdit', 'KOMODITAS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr__4.set('fieldImages', {'Name': 'TextEdit', 'KOMODITAS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr__5.set('fieldImages', {'Name': 'TextEdit', 'KOMODITAS': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr__2.set('fieldLabels', {'Name': 'hidden field', 'KOMODITAS': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'Name': 'hidden field', 'KOMODITAS': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr__4.set('fieldLabels', {'Name': 'hidden field', 'KOMODITAS': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr__5.set('fieldLabels', {'Name': 'hidden field', 'KOMODITAS': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});