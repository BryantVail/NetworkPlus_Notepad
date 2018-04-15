// 3-2_UTP-STP-cabling_CablingAndTopology
/*
Video Notes below:
In this video, 	you will explore 
	the different types and categories of 
	twisted pair cabling used in computer networking.
*/

let cableTechnologies = [
	{	
		"technologyName":"UTP",
		"etymology":
			"unshielded Twisted pair",
		"description":
			"twisted pair reduces interference by sending signals on a pair that are twisted",
		"concerns":[
			"electric motors",
			"flourescent lights",
			"rf interference"
		],
			
		"kevlar":
			"used to provide 'linear' strength, to be able to pull the line through conduit etc.",	
		"categories":[
			{
				"name":"cat3", 
				"capacity": "10mbps"
			},
			{
				"name":"cat5",
				"capacity": "100mbps",
				"notes":[
					"updated to cat5e shortly after the standard was released",
					"cat5, generally, when referred to, people are referring to cat5e"
				]
			},
			{
				"name":"cat5e",
				"capacity": "100mbps",
				"notes":[
					"cat5 updated to cat5e shortly after the standard was released",
					"cat5e, is generally what is being referred to when people reference cat5 "
				]
			},
			{
				"name":"cat6",
				"capacity":
				[
					"1000mbps",
					"1gbps"
				],
				"notes": [
					"can run 10gb nets on 'old' cat 6, but the length capacity was very short",
					"standard network cable run can be up to 100 meters",
					"to run 10gb run w/traditional cat6, it would be more like 55 meters"
				]
			},
			{
				"name":"cat6a",
				"capacity": "10gbps",
				"notes": [
					"can run 10gb nets on 'old' cat 6, but the length capacity was very short",
					"standard network cable run can be up to 100 meters",
					"to run 10gb run w/traditional cat6, it would be more like 55 meters",
					"compared to older categories/standards, cat6 & cat6e have noticibly higher gauge wire"
				]
			}
		]//end categories

	},//end UTP	
	{
		"cableName": "STP",
		"etymology": "shielded twisted pair",
		"description": "aluminum sheeting is used to shield interference, used in high interference invironments",

	}//end STP,
	

	










  
  
  
  
  
  
  
  
  
  
  
  
