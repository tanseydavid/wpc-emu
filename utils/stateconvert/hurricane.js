'use strict';

const STATEDEFINITION =
  `{stRTrough, stCTrough, stLTrough, stOutHole, stDrain,
      stShooter, stBallLane, stNotEnough, stRightOutlane, stLeftOutlane, stRightInlane, stLeftInlane, stLeftSling, stRightSling,
      stEnterHurr, stHurrMade, stInHRamp, stEnterComet, stCometMade, stInCRamp,
      stFerris1, stFerris2, stLJuggler, stRJuggler, stLJet, stRJet, stBJet, stDownFCenter, stDownFRamp,
      stLDropT, stLDropM, stLDropB, stLeftJet, stRightJet, stBottomJet, stRTarget1, stRTarget2, stRTarget3, stRTarget4, stDunkTheDummy}`;

const SOLENOIDS = [
  '#define sBackBoxMotor	1',
  '#define sLeftBank	2',
  '#define sLeftJuggler	4',
  '#define sRightJuggler	5',
  '#define sFerrisWheels  	6',
  '#define sKnocker       	7',
  '#define sOutHole       	9',
  '#define sTrough		10',
  '#define sLeftSling	11',
  '#define sRightSling	12',
  '#define sLeftJet	13',
  '#define sRightJet	14',
  '#define sBottomJet	15',
];

const SWITCHES = [
  '#define swStart      	13',
  '#define swTilt       	14',
  '#define swOutHole	15',
  '#define swRTrough	16',
  '#define swCTrough	17',
  '#define swLTrough	18',

  '#define swSlamTilt	21',
  '#define swCoinDoor	22',
  '#define swTicket     	23',
  '#define swRightSling	25',
  '#define swRightInlane	26',
  '#define swRightOutlane	27',
  '#define swShooter	28',

  '#define swFerrisWheel	31',
  '#define swLDropT	33',
  '#define swLDropM	34',
  '#define swLDropB	35',
  '#define swLeftSling	36',
  '#define swLeftInlane	37',
  '#define swLeftOutlane	38',

  '#define swRTarget1	42',
  '#define swRTarget2	43',
  '#define swRTarget3	44',
  '#define swRTarget4     	45',

  '#define swLeftJet    	51',
  '#define swRightJet	52',
  '#define swBottomJet	53',
  '#define swDunkTheDummy	55',
  '#define swLeftJuggler	56',
  '#define swRightJuggler	57',

  '#define swEnterHurr	61',
  '#define swHurrMade	62',
  '#define swEnterComet	63',
  '#define	swCometMade	64',
];

const STATE = [
  '{"Not Installed",	0,0,		 0,		stDrain,	0,	0,	0,	SIM_STNOTEXCL},',
  '{"Moving"},',
  '{"Playfield",		0,0,		 0,		0,		0,	0,	0,	SIM_STNOTEXCL},',

  /*Line 1*/
  '{"Right Trough",	1,swRTrough,	 sTrough,	stShooter,	5},',
  '{"Center Trough",	1,swCTrough,	 0,		stRTrough,	1},',
  '{"Left Trough",	1,swLTrough,	 0,		stCTrough,	1},',
  '{"Outhole",		1,swOutHole,	 sOutHole,	stLTrough,	5},',
  '{"Drain",		1,0,		 0,		stOutHole,	0,	0,	0,	SIM_STNOTEXCL},',

  /*Line 2*/
  '{"Shooter",		1,swShooter,	 sShooterRel,	stBallLane,	2,	0,	0,	SIM_STNOTEXCL|SIM_STSHOOT},',
  '{"Hurricane Ramp",	5,0,		 0,		0,		0,	0,	0,	SIM_STNOTEXCL},',
  '{"No Strength",	1,0,		 0,		stShooter,	3},',
  '{"Right Outlane",	1,swRightOutlane,0,		stDrain,	15},',
  '{"Left Outlane",	1,swLeftOutlane, 0,		stDrain,	15},',
  '{"Right Inlane",	1,swRightInlane, 0,		stFree,		5},',
  '{"Left Inlane",	1,swLeftInlane,	 0,		stFree,		5},',
  '{"Left Slingshot",	1,swLeftSling,	 0,		stFree,		1},',
  '{"Rt Slingshot",	1,swRightSling,	 0,		stFree,		1},',

  /*Line 3*/
  '{"Enter Hurricne",	1,swEnterHurr,	 0,		stHurrMade,	10},',
  '{"Hurricane Made",	1,swHurrMade,	 0,		stInHRamp,	5},',
  '{"In Ramp",		1,0,		 0,		stLeftInlane,	20},',
  '{"Enter Comet",	1,swEnterComet,  0,		stCometMade,	7},',
  '{"Comet Made",	1,swCometMade,	 0,		stInCRamp,	3},',
  '{"Habitrail",		1,0,		 0,		stRightInlane,	6},',

  /*Line 4*/
  '{"Ferris Wheel 1",	1,swFerrisWheel, 0,		stFerris2,	40},',
  '{"Ferris Wheel 2",	1,0,		 0,		stInHRamp,	40},',
  '{"Left Juggler",	1,swLeftJuggler, sLeftJuggler,	stRJuggler,	0},',
  '{"Right Juggler",	1,swRightJuggler,sRightJuggler, stLJet,		1},',
  '{"Left Bumper",	1,swLeftJet,	 0,		stRJet,		3},',
  '{"Right Bumper",	1,swRightJet,	 0,		stBJet,		3},',
  '{"Bottom Bumper",	1,swBottomJet,	 0,		stDownFCenter,	7},',
  '{"Down F. Center",	1,0,		 0,		stFree,		5},',
  '{"Down From Ramp",	1,swEnterHurr,	 0,		stFree,		5},',

  /*Line 5*/
  '{"Top Drop Tgt",	1,swLDropT,	 0,		stFree,		3,0,0,SIM_STSWKEEP},',
  '{"Mid Drop Tgt",	1,swLDropM,	 0,		stFree,		3,0,0,SIM_STSWKEEP},',
  '{"Bot Drop Tgt",	1,swLDropB,	 0,		stFree,		3,0,0,SIM_STSWKEEP},',
  '{"Left Bumper 2",	1,swLeftJet,	 0,		stFree,		2},',
  '{"Bottom Bumper 2",	1,swBottomJet,	 0,		stFree,		2},',
  '{"Right Bumper 2",	1,swRightJet,	 0,		stFree,		2},',
  '{"Cat Target 1",	1,swRTarget1,	 0,		stFree,		2},',
  '{"Cat Target 2",	1,swRTarget2,	 0,		stFree,		2},',
  '{"Cat Target 3",	1,swRTarget3,	 0,		stFree,		2},',
  '{"Cat Target 4",	1,swRTarget4,	 0,		stFree,		2},',
  '{"Dunk The Dummy",	1,swDunkTheDummy,0,		stFree,		2},',
];

module.exports = {
  STATE,
  SWITCHES,
  SOLENOIDS,
  STATEDEFINITION,
};
