var iv = null;

    var myStyleMap0 = new OpenLayers.StyleMap({
        "default": new OpenLayers.Style({
            //    'pointRadius': 10,
            //     'strokeOpacity': 1,
            'strokeColor': '#0000FF',
                'fillColor': '#0000ff',
                'strokeWidth': 5
        }),

            "select": new OpenLayers.Style({
            'pointRadius': 15,
                'strokeColor': '#ff00ff',
                'fillColor': '#ff00ff'
        })
    });
    window.onload = function () {
        iv = Geoportal.load(
            'viewerDiv', ['6rwbj1q2ekvul7c6590ta9ym'], {
            lon: 6.535,
            lat: 48.032
        },
        15, {
            layers: ['GEOGRAPHICALGRIDSYSTEMS.MAPS'],
            overlays: {
                'gpx': [{
                    name: 'chevreuil',
                    url: '/gh/get/response.xml/lowzonenose/jsfiddleTest/tree/master/Test/',
                    options: {
                        params: {
                            visibility: true,
                            opacity: 1.0,
                            minZoomLevel: 14,
                            maxZoomLevel: 16,
                            styleMap: myStyleMap0
                        },
                        formatOptions: {
                            extractAttributes: false,
                            extractStyles: false
                        }
                    }
                }]
            },
            language: 'fr',
            geormUrl: 'http://wxs.ign.fr/$key$/autoconf/',
            theme: {
                name: 'black',
                styles: [{
                    css: Geoportal._getScriptLocation() + 'theme/black/style.css',
                    id: '__GeoportalBlackCss__'
                }, {
                    css: Geoportal._getScriptLocation() + 'theme/black/ie6-style.css',
                    id: '__IE6GeoportalBlackCss__',
                    alpha: true
                }]
            },
            viewerClass: 'Geoportal.Viewer.Default',
            componentsOptions: {
                'Geoportal.Component.LegalNotice.Logo': {
                    logoSize: 30
                }
            },
            onView: cm_onView
        });
    };
    var viewer = null;

    function cm_onView() {
        viewer = this.getViewer();
        viewer.openLayersPanel(true);
        viewer.openToolsPanel(false);
        viewer.setToolsPanelVisibility(false);
    }
