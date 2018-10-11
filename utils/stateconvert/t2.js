'use strict';

const STATEDEFINITION =
  `{stRTrough, stCTrough, stLTrough, stOuthole, stDrain,
        stShooter, stBallLane, stROut, stLOut,stRIn, stLIn,
        stLLoopUp, stLLoopUp2, stTopLock, stLLoopDn, stLLoopDn2,
  	  stRLoopUp, stRLoopUp2, stRLoopDn, stRLoopDn2,
  	  stLRampEnt, stLRamp, stLRampExit, stRRampEnt, stRRamp, stRRampExit,
  	  stLockLeft, stDropTarget, stDropTarget2, stBallPopper, stGunLoaded, stGunFire,
  	  stTarget1, stTarget2, stTarget3, stTarget4, stTarget5, stMultL, stJet1, stJet2, stJet3}`;

const SOLENOIDS = [
  '#define sBallPopper		1',
  '#define sGunKicker		2',
  '#define sOuthole      	3',
  '#define sBallRel		4',
  '#define sRSling      	5',
  '#define sLSling      	6',
  '#define sKnocker       	7',
  '#define sKickBack      	8',
  '#define sPlunger       	9',
  '#define sTopLock       10',
  '#define sGunMotor      11',
  '#define sKnockDown	   12',
  '#define sJet1		   13',
  '#define sJet2          14',
  '#define sJet3          15',
  '#define sLeftLock      16',
  '#define sDropTarget	   28',
];

const SWITCHES = [
  '#define swStart      	13',
  '#define swTilt       	14',
  '#define swLTrough    	15',
  '#define swCTrough    	16',
  '#define swRTrough    	17',
  '#define swOuthole    	18',

  '#define swSlamTilt   	21',
  '#define swCoinDoor   	22',
  '#define swTicket     	23',
  '#define swNotUsed		24',
  '#define swLOut			25',
  '#define swLIn			26',
  '#define swRIn			27',
  '#define swROut			28',

  '#define swGunLoaded		31',
  '#define swGunMark		32',
  '#define swGunHome		33',
  '#define swTrigger		34',
  '#define swMidLeft		36',
  '#define swMidCenter		37',
  '#define swMidRight		38',

  '#define swJet1			41',
  '#define swJet2			42',
  '#define swJet3			43',
  '#define swLSling     	44',
  '#define swRSling     	45',
  '#define swTopRDT     	46',
  '#define swMidRDT     	47',
  '#define swBotRDT     	48',

  '#define swLockL			51',
  '#define swEscapeL		53',
  '#define swEscapeH		54',
  '#define	swLockT			55',
  '#define	swMultL			56',
  '#define	swMultC			57',
  '#define	swMultR			58',

  '#define	swLRampEnt		61',
  '#define	swLRampExit		62',
  '#define	swRRampEnt		63',
  '#define	swRRampExit		64',
  '#define	swLChaseLoop	65',
  '#define	swHChaseLoop	66',

  '#define	swTarget1		71',
  '#define	swTarget2		72',
  '#define	swTarget3		73',
  '#define	swTarget4		74',
  '#define	swTarget5		75',
  '#define	swBallPopper	76',
  '#define	swDropTarget	77',
  '#define swShooter  		78',
];

const STATE = [
  '{"Not Installed",    0,0,           0,        stDrain,     0,0,0,SIM_STNOTEXCL}',
  '{"Moving"}',
  '{"Playfield",               0,0,           0,        0,           0,0,0,SIM_STNOTEXCL}',

  /*Line 1*/
  '{"Right Trough",     1,swRTrough,   sBallRel, stShooter,  5}',
  '{"Center Trough",    1,swCTrough,   0,        stRTrough,   1}',
  '{"Left Trough",      1,swLTrough,   0,        stCTrough,   1}',
  '{"Outhole",          5,swOuthole,   sOuthole, stLTrough,   5}',
  '{"Drain",            1,0,           0,        stOuthole,   0,0,0,SIM_STNOTEXCL}',
  /*Line 2*/
  '{"Shooter",		   1,swShooter,   sPlunger, stBallLane,  1,0,0,SIM_STNOTEXCL}',
  '{"Ball Lane",		   1, 0,  	      0,        stTarget2,   5,0,0,SIM_STNOTEXCL}',
  '{"Right Outlane",    1,swROut,      0,        stDrain,    20}',
  '{"Left Outlane",     1,swLOut,      0,        stDrain,    20, sKickBack, stFree}',
  '{"Right Inlane",     1,swRIn,       0,        stFree,      5}',
  '{"Left  Inlane",     1,swLIn,       0,        stFree,      5}',
  /*Line 3*/
  '{"Left Loop Up",        1,swEscapeL,    0,       stLLoopUp2,   1}',	/* Left Loop Going Up     */
  '{"Left Loop Up2",        1,swEscapeH,    0,       stTopLock,   15}',   /* Left Loop Going Up #2  */
  '{"Top Lock",         5,swLockT,      sTopLock,stMultL,     25}',
  '{"Left Loop Down",        1,swEscapeL,    0,       stFree,       1}',	/* Left Loop Coming Down */
  '{"Left Loop Down2",        1,swEscapeH,    0,       stLLoopDn,    1}',   /* Left Loop Coming Down2  */
  /*Line 4*/
  '{"Right Loop Up",       1,swLChaseLoop, 0,       stRLoopUp2,   1}',	/* Right Loop Going Up     */
  '{"Right Loop Up2",       1,swHChaseLoop, 0,       stLLoopDn2,  10}',	/* Right Loop Going Up #2  */
  '{"Right Loop Down",       1,swLChaseLoop, 0,       stFree,       1}',	/* Right Loop Coming Down  */
  '{"Right Loop Down2",       1,swHChaseLoop, 0,       stRLoopDn,   10}',	/* Right Loop Coming Down2 */
  /*Line 5*/
  '{"L. Ramp Enter",	   1,swLRampEnt,   0,       stLRamp,	 5}',
  '{"L. Ramp",		   1,swLRampExit,  0,       stLRampExit,15}',	/*Here strickly to fix timing issues*/
  '{"L. Ramp Exit",     1,0,        0,           stLIn,       2}',
  '{"R. Ramp Enter",	   1,swRRampEnt,   0,       stRRamp,	 5}',
  '{"R. Ramp",		   1,swRRampExit,  0,       stRRampExit,15}',	/*Here strickly to fix timing issues*/
  '{"R. Ramp Exit",     1,0,		   0,           stRIn,       2}',
  /*Line 6*/
  '{"Left Lock",        1,swLockL,  sLeftLock,stFree,      10}',
  '{"Skull Drop Target",1,0,  0,  0,  0}',
  '{"Skull Drop Target 2",1,swDropTarget, 0, stFree, 1, 0,0, SIM_STSWKEEP}',
  '{"Ball Popper",	   5,swBallPopper, sBallPopper, stGunLoaded, 5}',
  '{"Gun Loaded" ,	   1,swGunLoaded,  sGunKicker, stGunFire, 1}',
  '{"Gun Fired",		   1,0,0,0,0}',
  /*Line 7*/
  '{"Orbit Target 1",   1,swTarget1, 0, stFree, 1}',
  '{"Orbit Target 2",   1,swTarget2, 0, stFree, 1}',
  '{"Orbit Target 3",   1,swTarget3, 0, stFree, 1}',
  '{"Orbit Target 4",   1,swTarget4, 0, stFree, 1}',
  '{"Orbit Target 5",   1,swTarget5, 0, stFree, 1}',
  '{"Left Rollover",    1,swMultL,   0, stJet1, 10}',
  '{"Jet Bumper 1",       1,swJet1,    0, stJet2, 2}',
  '{"Jet Bumper 2",       1,swJet2,    0, stJet3, 2}',
  '{"Jet Bumper 3",       1,swJet3,    0, stFree, 3}',
];

module.exports = {
  STATE,
  SWITCHES,
  SOLENOIDS,
  STATEDEFINITION,
};
