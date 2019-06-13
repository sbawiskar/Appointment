/*
Author: Mahendra Aanjna
Date: 29 May 2019
Description: Added helper functions for Sorting
*/

//Helper for sorting the data and setting the sorted data to the DATA attribute
({
    sortData: function (cmp, fieldName, sortDirection) {
        var data = cmp.get("v.Data");
        var reverse = sortDirection !== 'asc';
        //sorts the rows based on the column header that's clicked
        data.sort(this.sortBy(fieldName, reverse));
        cmp.set("v.Data", data);
    },
    sortBy: function (field, reverse, primer) {
        var key = primer ?
            function(x) {return primer(x[field])} :
            function(x) {return x[field]};
        //checks if the two rows should switch places
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },
    
 
    
convertArrayOfObjectsToCSV : function(component,objectRecords){
        // declare variables
        var csvStringResult, counter, keys, columnDivider, lineDivider;
       
        // check if "objectRecords" parameter is null, then return from function
        if (objectRecords == null || !objectRecords.length) {
            return null;
         }
        // store ,[comma] in columnDivider variabel for sparate CSV values and 
        // for start next line use '\n' [new line] in lineDivider varaible  
        columnDivider = ',';
        lineDivider =  '\n';
 
        // in the keys valirable store fields API Names as a key 
        // this labels use in CSV file header  
        keys = ['Shipment Id','Shipment Status','Origin','Appointment Date','Appointment Time','Carrier','Dedicated Vs OTR'];
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
 
        for(var i=0; i < objectRecords.length; i++){   
            counter = 0;
           
             for(var sTempkey in keys) {
                var skey = keys[sTempkey] ;  
 
              // add , [comma] after every String value,. [except first]
                  if(counter > 0){ 
                      csvStringResult += columnDivider; 
                   }   
               
               csvStringResult += '"'+ objectRecords[i][skey]+'"'; 
               
               counter++;
 
            } // inner for loop close 
             csvStringResult += lineDivider;
          }// outer main for loop close 
       
       // return the CSV formate String 
        return csvStringResult;        
    },
    
    
//Name: Vivek
//Date: 10/06/2019
//Des: Adding Sample JDA data


GetJDAData: function(component){
    
var JDAData=[ 
 {ShipmentId:"24376390",Origin:"DC-- Colorado Dc",AppointmentDate:"29/05/2019",AppointmentTime:"03:11 AM",Carrier:"SXAC",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit",PDCN:[1,2,3]},
{ShipmentId:"24392017",Origin:"BRWY-- St. Louis",AppointmentDate:"29/05/2019",AppointmentTime:"02:00 PM",Carrier:"BTAK",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime",PDCN:[4,5,6]},
{ShipmentId:"24392049",Origin:"BRWY-- Williamsburg",AppointmentDate:"29/05/2019",AppointmentTime:"01:00 PM",Carrier:"UFLB",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24418842",Origin:"BRWY-- Baldwinsville",AppointmentDate:"29/05/2019",AppointmentTime:"10:11 AM",Carrier:"PRIJ",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24418856",Origin:"BRWY-- Baldwinsville",AppointmentDate:"29/05/2019",AppointmentTime:"09:00 AM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24418860",Origin:"BRWY-- Baldwinsville",AppointmentDate:"29/05/2019",AppointmentTime:"02:08 PM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24418861",Origin:"BRWY-- Baldwinsville",AppointmentDate:"29/05/2019",AppointmentTime:"04:01 PM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24419013",Origin:"BRWY-- Columbus",AppointmentDate:"29/05/2019",AppointmentTime:"07:00 AM",Carrier:"WERD",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Completed"},
{ShipmentId:"24419267",Origin:"BRWY-- Houston",AppointmentDate:"29/05/2019",AppointmentTime:"09:08 AM",Carrier:"CLLQ",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit"},
{ShipmentId:"24419302",Origin:"BRWY-- Jacksonville",AppointmentDate:"29/05/2019",AppointmentTime:"02:16 AM",Carrier:"PRIJ",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},

{ShipmentId:"24162561",Origin:"BRWY-- Jacksonville",AppointmentDate:"30/05/2019",AppointmentTime:"03:11 AM",Carrier:"WERD",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Transit"},
{ShipmentId:"24225692",Origin:"DC-- Colorado Dc",AppointmentDate:"30/05/2019",AppointmentTime:"02:00 PM",Carrier:"SFIK",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit"},
{ShipmentId:"24225698",Origin:"DC-- Colorado Dc",AppointmentDate:"30/05/2019",AppointmentTime:"01:00 PM",Carrier:"NAFL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Transit"},
{ShipmentId:"24418864",Origin:"BRWY-- Baldwinsville",AppointmentDate:"30/05/2019",AppointmentTime:"10:11 AM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Transit"},
{ShipmentId:"24418867",Origin:"BRWY-- Baldwinsville",AppointmentDate:"30/05/2019",AppointmentTime:"09:00 AM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24419014",Origin:"BRWY-- Columbus",AppointmentDate:"30/05/2019",AppointmentTime:"02:08 PM",Carrier:"WIEL",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24419119",Origin:"BRWY-- Fort Collins",AppointmentDate:"30/05/2019",AppointmentTime:"04:01 PM",Carrier:"CLLG",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24419120",Origin:"BRWY-- Fort Collins",AppointmentDate:"30/05/2019",AppointmentTime:"07:00 AM",Carrier:"PLCY",DedicatedVsOTR:"OTR",ShipmentStatus:"Completed"},
{ShipmentId:"24419121",Origin:"BRWY-- Fort Collins",AppointmentDate:"30/05/2019",AppointmentTime:"09:08 AM",Carrier:"NAFL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Completed"},
{ShipmentId:"24419150",Origin:"DC-- Macon Dc",AppointmentDate:"30/05/2019",AppointmentTime:"02:16 AM",Carrier:"CLLQ",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit"},

{ShipmentId:"24376390",Origin:"DC-- Colorado Dc",AppointmentDate:"31/05/2019",AppointmentTime:"03:11 AM",Carrier:"SXAC",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit"},
{ShipmentId:"24392017",Origin:"BRWY-- St. Louis",AppointmentDate:"01/06/2019",AppointmentTime:"02:00 PM",Carrier:"BTAK",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24392049",Origin:"BRWY-- Williamsburg",AppointmentDate:"02/06/2019",AppointmentTime:"01:00 PM",Carrier:"UFLB",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24418842",Origin:"BRWY-- Baldwinsville",AppointmentDate:"03/06/2019",AppointmentTime:"10:11 AM",Carrier:"PRIJ",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
{ShipmentId:"24418856",Origin:"BRWY-- Baldwinsville",AppointmentDate:"04/06/2019",AppointmentTime:"09:00 AM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24418860",Origin:"BRWY-- Baldwinsville",AppointmentDate:"05/06/2019",AppointmentTime:"02:08 PM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24418861",Origin:"BRWY-- Baldwinsville",AppointmentDate:"03/06/2019",AppointmentTime:"04:01 PM",Carrier:"NFIL",DedicatedVsOTR:"Dedicated",ShipmentStatus:"OnTime"},
{ShipmentId:"24419013",Origin:"BRWY-- Columbus",AppointmentDate:"07/06/2019",AppointmentTime:"07:00 AM",Carrier:"WERD",DedicatedVsOTR:"Dedicated",ShipmentStatus:"Completed"},
{ShipmentId:"24419267",Origin:"BRWY-- Houston",AppointmentDate:"03/06/2019",AppointmentTime:"09:08 AM",Carrier:"CLLQ",DedicatedVsOTR:"OTR",ShipmentStatus:"Transit"},
{ShipmentId:"24419302",Origin:"BRWY-- Jacksonville",AppointmentDate:"31/05/2019",AppointmentTime:"02:16 AM",Carrier:"PRIJ",DedicatedVsOTR:"OTR",ShipmentStatus:"OnTime"},
];      
 
console.log('JDAData==> ',JDAData);
    
var Today=[];
var Tomorrow=[];
var Outstanding=[];
    
    for (var i in JDAData) {
    if (JDAData[i].AppointmentDate== "29/05/2019"){
        Today.push(JDAData[i]);
        
        } 
        
    else if (JDAData[i].AppointmentDate== "30/05/2019"){
        Tomorrow.push(JDAData[i]);    
        }
        
        else {
            
       Outstanding.push(JDAData[i]);     
        }
        }
      
   //debugger;
    for (var j in Today) {
            if (Today[j].ShipmentStatus== "Transit"){
            //var ShipmentId = Today[j].ShipmentId;
                
            //Today[j].ShipmentId="<a href=''>"+ShipmentId+"</a>";   
            //console.log("<a href='https://abc.com'>"+Today[j].ShipmentId+"</a>"); 
           //Today.push(Today[j]);  
            //console.log(Today[j].ShipmentId); 
            }      
            }
    
    console.log('Today==> ',Today);
    console.log('Tomorrow==> ',Tomorrow);
    console.log('Outstanding==> ',Outstanding);
    
    component.set("v.Today",Today);
    //this.FilterByCarrier(Today);
    component.set("v.Tomorrow",Tomorrow);
    component.set("v.Outstanding",Outstanding);
},
    
    checkBrowser: function(component){
    var Device=$A.get("$Browser.formFactor");
    //alert("You are viewing on "+Device);
    },
    
    FilterByCarrier: function(component,carrier,Today){
    //var Today=this.GetJDAData;    
    var Today= component.get("v.Today");
    var FilteredByCarrierShipments=[];    
    console.log('Today1==> ',Today);
    console.log(carrier);    
    for (var j in Today) {
            if (Today[j].Carrier== carrier){
           FilteredByCarrierShipments.push(Today[j]);
            }      
            }
 component.set("v.Today",FilteredByCarrierShipments);
    
}
    
      
})
