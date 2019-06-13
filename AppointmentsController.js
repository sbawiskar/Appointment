/*
Author: Mahendra Aanjna
Date: 23 May 2019
Description: Added LDT column definition 
Edit 29 May 2019 -> Added Client-side controller for Sorting
*/
({
doInit : function(component, event, helper) {
// Column definition for the Lightning Datatable
        component.set('v.mycolumns', [
            { label: 'Shipment Id', fieldName: 'ShipmentId', type: 'url', typeAttributes: { target: '_self'},sortable: true },
            { label: 'Shipment Status', fieldName: 'ShipmentStatus', type: 'text', sortable: true},
            { label: 'Origin', fieldName: 'Origin', type: 'text', sortable: true},
            { label: 'Appointment Date', fieldName: 'AppointmentDate', type: 'text', sortable: true},
            { label: 'Appointment Time', fieldName: 'AppointmentTime', type: 'text', sortable: true},
            { label: 'Carrier', fieldName: 'Carrier', type: 'text', sortable: true},
            { label: 'Dedicated vs OTR', fieldName: 'DedicatedVsOTR', type: 'text', sortable: true},
           
        ]);
            
            
 helper.GetJDAData(component);
 helper.checkBrowser(component);           
    },
            
     // Client-side controller called by the onsort event handler
            updateColumnSorting: function (cmp, event, helper) {
            var fieldName = event.getParam('fieldName');
            var sortDirection = event.getParam('sortDirection');
            // assign the latest attribute with the sorted column fieldName and sorted direction
            cmp.set("v.sortedBy", fieldName);
            cmp.set("v.sortedDirection", sortDirection);
            helper.sortData(cmp, fieldName, sortDirection);
            
            },
            
           
/*
Author: Sayali bawiskar
Date: 31st May 2019
Description: Added functions(showCalendarView,showListView,printCalendar switcing Calendar and List view
Edited : 6th June 2019
*/
	    showCalendarView : function (component, event, helper) {
  				$A.util.addClass(component.find("viewShipmentList"), "slds-hide");
            	$A.util.removeClass(component.find("viewCalendar"), "slds-hide");
		$A.util.removeClass(component.find("viewCalendar"), 'defaultViewFix');
			},
            showListView : function (component, event, helper) {
            	$A.util.addClass(component.find("viewCalendar"), "slds-hide");
            	$A.util.removeClass(component.find("viewShipmentList"), "slds-hide");
		$A.util.addClass(component.find("viewShipmentList"), 'defaultViewFix');
            },
            printCalendar : function (component, event, helper) {
            var cal =$(component.find("viewCalendar"));
            window.print(cal);	

            	
   
            },
            displaycalendarinfo : function (component, event, helper) {
            
            //$( "#printcalendar #calendarinfo" ).tooltip({ content: '<img src="http://icdn.pro/images/fr/a/v/avatar-barbe-brun-homme-utilisateur-icone-9665-128.png" />' }); 

   
            },
	    
/*
Author: Vivek Nayak
Date: 31st May 2019
Description: Function for Export button
*/

        DownloadAsCSV: function(component, event, helper){
    
        var AppointmentRecords = component.get("v.Data");
        
        // call the helper function which "return" the CSV data as a String   
        var csv = helper.convertArrayOfObjectsToCSV(component,AppointmentRecords);   
         if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
	      var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.target = '_self'; // 
          hiddenElement.download = 'ExportData.csv';  // CSV file Name* you can change it.[only name not .csv] 
          document.body.appendChild(hiddenElement); // Required for FireFox browser
    	  hiddenElement.click(); // using click() js function to download csv file
        },            
	    
     
            FilterByCarrier: function(component,event,helper){
            
            var carrier=component.get("v.EnteredFilterValue");
            //console.log(carrier);
            helper.FilterByCarrier(component,carrier);
            
            }
    
})
