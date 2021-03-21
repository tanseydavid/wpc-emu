params ='use strict';

module.exports = {
  getGameAdjustments: function() {
    return gameAdjustments;
  }
};

let gameAdjustments = {};

add = function( adjustmentNumber, description ) {
    gameAdjustments[ adjustmentNumber ] = description;
}

add(0x01, "A-MODE MUSIC" );
add(0x02, "A-MODE BACKBOX" );
add(0x03, "A-MODE BUTTONS" );
add(0x04, "OPERATOR TOURNEY" );
add(0x05, "BALL SAVES" );
add(0x06, "BALL SAVE TIME" );
add(0x07, "TIMED PLUNGER" );
add(0x09, "EX. BALL MEMORY" );
add(0x0a, "EX. BALL PERCENT" );
add(0x0b, "FREE TH. EB LEVEL" );
add(0x0c, "HOOP LP. EB LEVEL" );
add(0x0d, "INB. PASS DIFF." );
add(0x0e, "JET BUMPER DIFF." );
add(0x0f, "IN THE PAINT DIF." );
add(0x10, "SHOT CLOCK DIFF." );
add(0x11, "SPECIAL MODE" );
add(0x12, "ENABLE CENSOR" );
add(0x13, "VOLUME INTERLOCK" );
add(0x14, "ALT. TEAM SELECT" );
add(0x16, "LINKED GAME ID" );
add(0x17, "LINKED GAME TIME" );
add(0x18, "PINBALL SCORES" );
add(0x81, "BALLS PER GAME" );
add(0x82, "TILT WARNINGS" );
add(0x83, "MAX E.B. COUNT" );
add(0x84, "MAX E.B. PER B.I.P." );
add(0x85, "REPLAY SYSTEM" );
add(0x86, "REPLAY PERCENT" );
add(0x87, "REPLAY START" );
add(0x88, "REPLAY LEVELS" );
add(0x8d, "REPLAY BOOST" );
add(0x8e, "REPLAY AWARD" );
add(0x8f, "SPECIAL AWARD" );
add(0x90, "MATCH AWARD	" );
add(0x91, "EX. BALL TICKET" );
add(0x92, "MAX. TICK./PLAYER" );
add(0x93, "MATCH FEATURE" );
add(0x94, "CUSTOM MESSAGE" );
add(0x95, "LANGUAGE" );
add(0x96, "CLOCK STYLE" );
add(0x97, "DATE STYLE" );
add(0x98, "SHOW TIME + DATE" );
add(0x99, "ALLOW DIM ILLUM" );
add(0x9a, "TOURNAMENT PLAY" );
add(0x9b, "EURO. SCR. FORMAT" );
add(0x9c, "MIN. VOL. OVERRIDE" );
add(0x9d, "GI POWER SAVE" );
add(0x9e, "POWER SAVE LEVEL" );
add(0x9f, "TICKET EXP. BOARD" );
add(0xA0, "NO BONUS FLIPS" );
add(0xA1, "GAME RE-START" );