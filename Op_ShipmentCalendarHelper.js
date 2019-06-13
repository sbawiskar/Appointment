({
    fetchEvents :function(component){        
        var action = component.get("c.getAppointments");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state == "SUCCESS") {
                var result = response.getReturnValue();
                console.log("Data: \n",result);
                var data=[];
                var data1=[];
                result.forEach(function(key) {
                    data.push({
                        'id':key.ID,
                        'shipmentid':key.Shipment_ID__c,
                        'start':key.ConcatDateTime__c,
                        'description':key.Dedicated_vs_OTR__c,
                        'origin':key.Origin__c,
                        'carrier':key.Carrier__c,
                        'shipmentstatus':key.ShipmentStatus__c                                                 
                    }); 
                    
                }); 
                var day = '[1]';
                var starttime = '09:00';
                    var endtime ='17:00';
                 console.log(data,data1);
                this.loadCalendar(data,day,starttime,endtime);
              
                
            } else if (state === "INCOMPLETE") {
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        
        //Wholesaler working hours
      /*  var actionworkinghours = component.get("c.getWholesalerWorkingHours");
        actionworkinghours.setCallback(this, function(response1) {
            var state = response1.getState();
            if (state == "SUCCESS") {
                debugger;
                var WholesalerWorkingHours = response1.getReturnValue();
                console.log("Data: \n",WholesalerWorkingHours);
                var data1=[];
                var day =[];
                var starttime =[];
                var endtime =[];
                WholesalerWorkingHours.forEach(function(key1) {
                    //var day = [];
                    //if()
                   // var starttime =[];
                    //day.push(key1.Day__c);
                 
                    if(key1.Day__c=='Monday')
                        {
                         day.push(1);
                         day.push(2);
                         day.push(3);
                         day.push(4);
                         day.push(5);
                            
                        }
                   
                    starttime = '09:00:00';
                    endtime ='17:00:00';
                  /*  data1.push({
                       
                        'day':'[1]',
                        'starttime':'09:00',
                        'endtime':'17:00'
                                                                        
                    });   
                    
                    
                    
                       
                       
                         
                    
                   
               }); 
                 console.log(day,starttime,endtime);
                this.loadbusinesshours(day,starttime,endtime);
              
                
            } else if (state === "INCOMPLETE") {
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });*/
        $A.enqueueAction(action);
       // $A.enqueueAction(actionworkinghours);
    },                                                
           loadCalendar :function(data,day,starttime,endtime){          
                var m = moment();
       			
        		$('#calendar').fullCalendar({
         			header: {
          					left: 'prev,next ',
          					center: 'title',
          					right: 'basicDay,agendaday,agendaWeek4day,today'
        					},
           			views: {
    				agendaWeek4day: {
                        
                        	columnFormat:'M/D/Y',
                        	type: 'agenda',
                        	duration: {days:4},
                        	buttonText: 'week'
    						}
		    		} ,
                 
                    eventRender: function (data, element, view) {
        
        				if (data.description == "OTR") {            
            				element.css('background-color', '#33ACFF');
        				}if (data.description == "Dedicated") {
            	            element.css('background-color', '#FFA500');
                        }if (data.description == "Unassigned") {
            	            element.css('background-color', '#FFFF00');
        				}
                        
                        element.find('.fc-time').append("<br/> Shipment ID :" + data.shipmentid + "<br/> Carrier :" + data.carrier); 
                       // element.find('.fc-title').append("<br/> Carrier :" + data.carrier); 
    				},
                    viewRender: function (view,element) {
						if (moment() >= view.start && moment() <= view.end) {
                			$(".fc-prev-button").prop('disabled', true); 
                			$(".fc-prev-button").addClass('fc-state-disabled'); 
            			}else {
                			$(".fc-prev-button").removeClass('fc-state-disabled'); 
                			$(".fc-prev-button").prop('disabled', false); 
            			}
                        if(view.type == "agendaWeek4day")
                        {
                                                       
                        }
            		},
                    eventMouseover: function (data, event, view) {

		                var tooltip = '<div class="tooltiptopicevent" style="width:auto;height:auto;background:lightgray;border: 1px black;position:absolute;z-index:10001;padding:10px 10px 10px 10px ;  line-height: 200%;">' + 'Shipment ID: ' + ': ' + data.shipmentid + '</br>' + 'Shipment Status: ' + ': ' + data.shipmentstatus + '</br>'  + 'Origin: ' + ': ' + data.origin + '</br>'+ 'Carrier: ' + ': ' + data.carrier + '</br>'+ 'Dedicated vs OTR : ' + ':' + data.description + '</br>' +' </div>';
            			$("body").append(tooltip);
            			$(this).mouseover(function (e) {
                		$(this).css('z-index', 10000);
                		$('.tooltiptopicevent').fadeIn('100');
                		$('.tooltiptopicevent').fadeTo('10', 1.9);
            		}).mousemove(function (e) {
                		$('.tooltiptopicevent').css('top', e.pageY + 10);
                		$('.tooltiptopicevent').css('left', e.pageX + 20);
            		});
        			},
            		eventMouseout: function (data, event, view) {
            			$(this).css('z-index', 8);
			            $('.tooltiptopicevent').remove();
		        	},
                    //businessHours: false,
                   
                    businessHours: {
  			  dow: day, 
  			  start: starttime, 
  			  end: endtime			  }, 
                          
            height: 400,
                    
            slotDuration: '01:00:00',
            slotEventOverlap:false,
            defaultdate :m.format(),
            defaultView: 'agendaWeek4day',      
            disableDragging: true,
            displayEventTime: true,              
            weekNumbers: true,
            allDaySlot: false,
              //slotLabelFormat:"HH:mm",
            weekNumbersWithinDays: true,
            weekNumberCalculation: 'ISO',
            eventLimit: true,
                    
            events:data,
                            
                                        
            				                        
        });		                           
    } 
    /*loadbusinesshours:function(day,starttime,endtime)
    { debugger;
              
                           
    	$('#calendar').fullCalendar({
  businessHours: {
                          
  			   dow: [1,2,3,4,5,6], 
  			  start: '08:00', 
  			  end: '18:00'
			  }
  
});
	}*/
})
