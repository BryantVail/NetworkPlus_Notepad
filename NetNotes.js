// 4-4_SwitchBackbones_ModernEthernet
/*
Video Notes below:
In this video, you will see how: 
	backbone switches are used to enable varying speed networks to interconnect.
*/

let ModernEthernet = ModernEthernet || {};
ModernEthernet= [
	{
		"terms":[
			{
				"term":"GBIC",
				"definition":"Gigabit Interface Converter; Designed to be moved in/out of switches to manage backbones that run at higher speeds coming down to a switch",
			},
			{
				"term":"STP",
				"definition":"Spanning Tree Protocol; 
				"notes":[
					"smart switch needed"
				]
			},
			{
				"term":"BLoop",
				"definition": "Bridge Loop; looping switches with physical cabling can lead to packet loops.",
				"notes":[
					`${STP} automatically shuts down Bridge Loops (BLoops)`	
				]
			},
		]//end terms
		
	},



  
  
  
  
  
  
  
  
  
  
  
  
