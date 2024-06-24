sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'RiskManagement/Risks/test/integration/FirstJourney',
		'RiskManagement/Risks/test/integration/pages/List',
		'RiskManagement/Risks/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('RiskManagement/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);