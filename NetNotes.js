//4-2_ConnectingSwitches_Mod
/*

This video explores how:
	switches are connected together to expand a network.
*/

let ModernEthernet = 
{
		"Switches":{
			"Connecting Switches":"Connecting switches to  connect more devices on the same network, working together for 1 big switch",
			"Crossover Cable":[
				"plug any port from 1 switch into any of the other ports."
			],
			"straight through cable":"patch cable, same standard on both sides",
			"crossover cable":{
				"description":"1 side tia568a, other: tia568b; sends go to the recieves & the recieves go to the sends",
				"Simple Directions":[
					"put one end of the crossover cable into 1 switch, then put the other end in the switch that is going to be used to increase the broadcast domain",
					"this is the simple way"					
				],
				"Other way to connect switches":[
					"straight through cable: some switches have a 'uplink' port; this port is already 'crossed over'.",
					"caution:some switches have a toggle to enable 'crossover mode'",					
				]
			},
			"auto sensing ports": "switches can notice that the straight through cable is on another switch.",
			"standards of twisted pair configuration":[
				{
					"name":"TIA568A"
				},
				{
					"name":"TIA568B"
				}
			],
				
			]

		}
}




























































