// 4-3_4-3_10GBase_ModernEthernet
/*
Video Notes below:
In this video, you will look at how 
	coax-based Ethernet got transformed into Ethernet of Unshielded Twisted Pair.
*/

let ModernEthernet = ModernEthernet || {};
ModernEthernet= [
	{
		"name":"10GBaseT",
		"transmissionMedium":"copper",
		"transmissionStandards":[
			{
				"cableStandard":"CAT6",
				"RunSwitchToNodeInMeters":55,
			},
			{
				"cableStandard":"CAT6a",
				"RunSwitchToNodeInMeters":100,
			},
		]	
	},
	{
		"name":	"10GBaseSR",
		"transmissionMedium":"fiber",
		"transmissionStandard": {
			"cableStandard":"multimode',
			"runSwitchToNodeInMeters":[
				26,
				400
			],
		},
	},//end 10GBaseSR
	{
		"name":	"10GBaseLR",
		"transmissionMedium":"fiber",
		"transmissionStandard":{
			"cableStandard":
		},
	},

]



  
  
  
  
  
  
  
  
  
  
  
  
