
#1) Name to display on screen
#2) Switch down time (minimum)
#3) Switch to be triggered while in this state
#4) Solenoid used to get out of state (0=leave ASAP) also: Balls can not enter state while solenoid is active
#5) State following this one
#6) Time between this state and next
#7) If this solenoid is active go to altstate (below)
#8) alternative state
#9) State flags

{"Right Trough",     1,swRTrough,   sBallRel, stShooter,  5},
{"Center Trough",    1,swCTrough,   0,        stRTrough,   1},
{"Left Trough",      1,swLTrough,   0,        stCTrough,   1},
{"Outhole",          5,swOuthole,   sOuthole, stLTrough,   5},
{"Drain",            1,0,           0,        stOuthole,   0,0,0,SIM_STNOTEXCL},
/*Line 2*/
{"Shooter",		   1,swShooter,   sPlunger, stBallLane,  1,0,0,SIM_STNOTEXCL},
{"Ball Lane",		   1, 0,  	      0,        stTarget2,   5,0,0,SIM_STNOTEXCL},
{"Right Outlane",    1,swROut,      0,        stDrain,    20},
{"Left Outlane",     1,swLOut,      0,        stDrain,    20, sKickBack, stFree},
{"Right Inlane",     1,swRIn,       0,        stFree,      5},
{"Left  Inlane",     1,swLIn,       0,        stFree,      5},
/*Line 3*/
{"Left Loop",        1,swEscapeL,    0,       stLLoopUp2,   1},	/* Left Loop Going Up     */
{"Left Loop",        1,swEscapeH,    0,       stTopLock,   15},   /* Left Loop Going Up #2  */
{"Top Lock",         5,swLockT,      sTopLock,stMultL,     25},
{"Left Loop",        1,swEscapeL,    0,       stFree,       1},	/* Left Loop Coming Down */
{"Left Loop",        1,swEscapeH,    0,       stLLoopDn,    1},   /* Left Loop Coming Down2  */
/*Line 4*/
{"Right Loop",       1,swLChaseLoop, 0,       stRLoopUp2,   1},	/* Right Loop Going Up     */
{"Right Loop",       1,swHChaseLoop, 0,       stLLoopDn2,  10},	/* Right Loop Going Up #2  */
{"Right Loop",       1,swLChaseLoop, 0,       stFree,       1},	/* Right Loop Coming Down  */
{"Right Loop",       1,swHChaseLoop, 0,       stRLoopDn,   10},	/* Right Loop Coming Down2 */
/*Line 5*/
{"L. Ramp Enter",	   1,swLRampEnt,   0,       stLRamp,	 5},
{"L. Ramp",		   1,swLRampExit,  0,       stLRampExit,15},	/*Here strickly to fix timing issues*/
{"L. Ramp Exit",     1,0,        0,           stLIn,       2},
{"R. Ramp Enter",	   1,swRRampEnt,   0,       stRRamp,	 5},
{"R. Ramp",		   1,swRRampExit,  0,       stRRampExit,15},	/*Here strickly to fix timing issues*/
{"R. Ramp Exit",     1,0,		   0,           stRIn,       2},
/*Line 6*/
{"Left Lock",        1,swLockL,  sLeftLock,stFree,      10},
{"Skull Drop Target",1,0,  0,  0,  0},
{"Skull Drop Target",1,swDropTarget, 0, stFree, 1, 0,0, SIM_STSWKEEP},
{"Ball Popper",	   5,swBallPopper, sBallPopper, stGunLoaded, 5},
{"Gun Loaded" ,	   1,swGunLoaded,  sGunKicker, stGunFire, 1},
{"Gun Fired",		   1,0,0,0,0},
/*Line 7*/
{"Orbit Target 1",   1,swTarget1, 0, stFree, 1},
{"Orbit Target 2",   1,swTarget2, 0, stFree, 1},
{"Orbit Target 3",   1,swTarget3, 0, stFree, 1},
{"Orbit Target 4",   1,swTarget4, 0, stFree, 1},
{"Orbit Target 5",   1,swTarget5, 0, stFree, 1},
{"Left Rollover",    1,swMultL,   0, stJet1, 10},
{"Jet Bumper 1",       1,swJet1,    0, stJet2, 2},
{"Jet Bumper 2",       1,swJet2,    0, stJet3, 2},
{"Jet Bumper 3",       1,swJet3,    0, stFree, 3},
