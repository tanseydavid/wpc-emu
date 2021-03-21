# Johnny Mnemonic Bootup

- Dump created using WPC-EMU Tracer
- Comments based on https://gist.github.com/74hc595/fda8b274179fea633f5333d52513e1f7

## DUMP

```
CC=50 A=0000 B=0000 X=0000 Y=0000 S=0000 U=0000 8D9A: CLR   $3FF3    ;WPC_RAM_BANK
CC=54 A=0000 B=0000 X=0000 Y=0000 S=0000 U=0000 8D9D: LDA   #$00
CC=54 A=0000 B=0000 X=0000 Y=0000 S=0000 U=0000 8D9F: STA   $3FF2    ;WPC_LEDS: diagnostic LED off
CC=54 A=0000 B=0000 X=0000 Y=0000 S=0000 U=0000 8DA2: LDY   #$0006
CC=50 A=0000 B=0000 X=0000 Y=0006 S=0000 U=0000 8DA6: CLRB
CC=54 A=0000 B=0000 X=0000 Y=0006 S=0000 U=0000 8DA7: LDX   $FFEC    ;read 2-byte checksum "correction" from ROM
CC=58 A=0000 B=0000 X=E802 Y=0006 S=0000 U=0000 8DAA: CMPX  #$00FF   ;if it's 0x00FF, skip ROM/RAM checks
CC=58 A=0000 B=0000 X=E802 Y=0006 S=0000 U=0000 8DAD: LBEQ  $8EC0
CC=58 A=0000 B=0000 X=E802 Y=0006 S=0000 U=0000 8DB1: LDU   #$003F
CC=50 A=0000 B=0000 X=E802 Y=0006 S=0000 U=003F 8DB4: LDD   #$0000
CC=54 A=0000 B=0000 X=E802 Y=0006 S=0000 U=003F 8DB7: EXG   D,U      ;U=0x0000, D=0x003F.

; Compute checksum of all ROM banks and verify
L1:
CC=54 A=0000 B=003F X=E802 Y=0006 S=0000 U=0000 8DB9: TFR   B,A      ;bank loop start
CC=54 A=003F B=003F X=E802 Y=0006 S=0000 U=0000 8DBB: COMA
CC=59 A=00C0 B=003F X=E802 Y=0006 S=0000 U=0000 8DBC: BITA  #$07
CC=55 A=00C0 B=003F X=E802 Y=0006 S=0000 U=0000 8DBE: BNE   $8DCA
CC=55 A=00C0 B=003F X=E802 Y=0006 S=0000 U=0000 8DC0: COMA
CC=51 A=003F B=003F X=E802 Y=0006 S=0000 U=0000 8DC1: DECA
CC=51 A=003E B=003F X=E802 Y=0006 S=0000 U=0000 8DC2: STA   $3FFC    ;store A to bank switch register (WPC_ROM_BANK)
CC=51 A=003E B=003F X=E802 Y=0006 S=0000 U=0000 8DC5: CMPA  $4000    ;compare A with lowest byte in bank (0x20, 0x21, ...)
CC=54 A=003E B=003F X=E802 Y=0006 S=0000 U=0000 8DC8: BNE   $8E14    ;stop if comparison fails
CC=54 A=003E B=003F X=E802 Y=0006 S=0000 U=0000 8DCA: STB   $3FFC    ;store B to bank switch register (WPC_ROM_BANK)
CC=50 A=003E B=003F X=E802 Y=0006 S=0000 U=0000 8DCD: EXG   D,U      ;bring checksum back to D
CC=50 A=0000 B=0000 X=E802 Y=0006 S=0000 U=3E3F 8DCF: LDY   #$0100
CC=50 A=0000 B=0000 X=E802 Y=0100 S=0000 U=3E3F 8DD3: STA   $3FDD    ;sound board reset (WPC_SOUND_CONTROL_STATUS)
CC=54 A=0000 B=0000 X=E802 Y=0100 S=0000 U=3E3F 8DD6: LEAY  -$1,Y
CC=50 A=0000 B=0000 X=E802 Y=00FF S=0000 U=3E3F 8DD8: BNE   $8DD3

   (loops for 763 instructions)

CC=54 A=0000 B=0000 X=E802 Y=0000 S=0000 U=3E3F 8DDA: LDY   #$0006
CC=50 A=0000 B=0000 X=E802 Y=0006 S=0000 U=3E3F 8DDE: LDX   #$4000   ;initialize X pointer to start of bank
L2:
CC=50 A=0000 B=0000 X=4000 Y=0006 S=0000 U=3E3F 8DE1: ADDB  ,X       ;Add 8 bytes to checksum in D
CC=50 A=0000 B=0002 X=4000 Y=0006 S=0000 U=3E3F 8DE3: ADCA  #$00
CC=54 A=0000 B=0002 X=4000 Y=0006 S=0000 U=3E3F 8DE5: ADDB  $1,X
CC=58 A=0000 B=00A8 X=4000 Y=0006 S=0000 U=3E3F 8DE7: ADCA  #$00
CC=54 A=0000 B=00A8 X=4000 Y=0006 S=0000 U=3E3F 8DE9: ADDB  $2,X
CC=78 A=0000 B=00F1 X=4000 Y=0006 S=0000 U=3E3F 8DEB: ADCA  #$00
CC=54 A=0000 B=00F1 X=4000 Y=0006 S=0000 U=3E3F 8DED: ADDB  $3,X
CC=53 A=0000 B=0076 X=4000 Y=0006 S=0000 U=3E3F 8DEF: ADCA  #$00
CC=50 A=0001 B=0076 X=4000 Y=0006 S=0000 U=3E3F 8DF1: ADDB  $4,X
CC=5A A=0001 B=00B6 X=4000 Y=0006 S=0000 U=3E3F 8DF3: ADCA  #$00
CC=50 A=0001 B=00B6 X=4000 Y=0006 S=0000 U=3E3F 8DF5: ADDB  $5,X
CC=58 A=0001 B=00DC X=4000 Y=0006 S=0000 U=3E3F 8DF7: ADCA  #$00
CC=50 A=0001 B=00DC X=4000 Y=0006 S=0000 U=3E3F 8DF9: ADDB  $6,X
CC=78 A=0001 B=00EA X=4000 Y=0006 S=0000 U=3E3F 8DFB: ADCA  #$00
CC=50 A=0001 B=00EA X=4000 Y=0006 S=0000 U=3E3F 8DFD: ADDB  $7,X
CC=79 A=0001 B=0090 X=4000 Y=0006 S=0000 U=3E3F 8DFF: ADCA  #$00
CC=50 A=0002 B=0090 X=4000 Y=0006 S=0000 U=3E3F 8E01: EXG   Y,D
CC=50 A=0000 B=0006 X=4000 Y=0290 S=0000 U=3E3F 8E03: STB   $3FFF     ;pet the watchdog, WPC_ZEROCROSS_IRQ_CLEAR
CC=50 A=0000 B=0006 X=4000 Y=0290 S=0000 U=3E3F 8E06: EXG   Y,D
CC=50 A=0002 B=0090 X=4000 Y=0006 S=0000 U=3E3F 8E08: LEAX  $8,X      ;advance X 8 bytes
CC=50 A=0002 B=0090 X=4008 Y=0006 S=0000 U=3E3F 8E0A: CMPX  #$8000    ;are we at the end of the bank?
CC=5B A=0002 B=0090 X=4008 Y=0006 S=0000 U=3E3F 8E0D: BCS   $8DE1     ;if not, check more bytes

   (loops for 45013 instructions)

CC=54 A=00F5 B=009E X=8000 Y=0006 S=0000 U=3E3F 8E0F: EXG   D,U       ;bring checksum to D
CC=54 A=003E B=003F X=8000 Y=0006 S=0000 U=F59E 8E11: DECB            ;next bank
CC=50 A=003E B=003E X=8000 Y=0006 S=0000 U=F59E 8E12: BRA   $8DB9

CC=59 A=001E B=001F X=8000 Y=0006 S=0000 U=FD12 8E14: EXG   D,U       ;bring checksum to D
CC=59 A=00FD B=0012 X=8000 Y=0006 S=0000 U=1E1F 8E16: SUBD  $FFEE     ;compare with stored value at 0xFFEE-0xFFEF
CC=54 A=0000 B=0000 X=8000 Y=0006 S=0000 U=1E1F 8E19: BEQ   $8E1D
CC=54 A=0000 B=0000 X=8000 Y=0006 S=0000 U=1E1F 8E1D: TFR   D,Y       ;low byte of Y is now 0x01 if ROM test failed

; Verify working RAM (leaves adjustments/audits alone)
; Writes 0x55 to 0x0000-0x172F, then verifies,
; then writes 0xAA to 0x0000-0x172F and verifies again

CC=54 A=0000 B=0000 X=8000 Y=0000 S=0000 U=1E1F 8E1F: LDB   #$06
CC=50 A=0000 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E21: LDA   #$B4
CC=58 A=00B4 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E23: STA   $3FFD     ;unlock protected memory with magic value 0xB4 (WPC_RAM_LOCK)
CC=58 A=00B4 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E26: LDA   #$01
CC=50 A=0001 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E28: STA   $3FFE     ;write WPC_RAM_LOCKSIZE (1)
CC=50 A=0001 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E2B: STA   $3FFD     ;write WPC_RAM_LOCK
CC=50 A=0001 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E2E: LDA   #$55      ;initialize A with 0x55

CC=50 A=0055 B=0006 X=8000 Y=0000 S=0000 U=1E1F 8E30: LDX   #$0000    ;initialize X pointer to start of RAM
L3:
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E33: STA   ,X        ;store 0x55 in 4 bytes
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E35: STA   $1,X
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E37: STA   $2,X
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E39: STA   $3,X
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E3B: STB   $3FFF     ;pet watchdog WPC_ZEROCROSS_IRQ_CLEAR
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E3E: LEAX  $4,X      ;advance X by 4 bytes
CC=50 A=0055 B=0006 X=0004 Y=0000 S=0000 U=1E1F 8E40: CMPX  #$16A0    ;stop at 0x16A0 (start of persistent values?) NOTE: WPC-89 use $1730 here!
CC=59 A=0055 B=0006 X=0004 Y=0000 S=0000 U=1E1F 8E43: BCS   $8E33

CC=54 A=0055 B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E45: LDX   #$0000    ;reset X to start of RAM
L4:
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E48: CMPA  ,X        ;compare 4 bytes with 0x55
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E4A: BNE   $8E6D     ;if any mismatch, bail
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E4C: CMPA  $1,X
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E4E: BNE   $8E6D
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E50: CMPA  $2,X
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E52: BNE   $8E6D
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E54: CMPA  $3,X
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E56: BNE   $8E6D
CC=54 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E58: STB   $3FFF     ;pet watchdog (WPC_ZEROCROSS_IRQ_CLEAR)
CC=50 A=0055 B=0006 X=0000 Y=0000 S=0000 U=1E1F 8E5B: LEAX  $4,X      ;advance X by 4 bytes
CC=50 A=0055 B=0006 X=0004 Y=0000 S=0000 U=1E1F 8E5D: CMPX  #$16A0    ;stop at 16A0
CC=59 A=0055 B=0006 X=0004 Y=0000 S=0000 U=1E1F 8E60: BCS   $8E48

CC=54 A=0055 B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E62: CMPA  #$55      ;after testing with 0x55,
CC=54 A=0055 B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E64: BNE   $8E69
CC=54 A=0055 B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E66: COMA            ;test again with 0xAA
CC=59 A=00AA B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E67: BRA   $8E30

CC=52 A=00AA B=0006 X=16A0 Y=0000 S=0000 U=1E1F 8E69: TFR   Y,D       ;bring test results in Y back to D
CC=52 A=0000 B=0000 X=16A0 Y=0000 S=0000 U=1E1F 8E6B: BRA   $8E71
CC=52 A=0000 B=0000 X=16A0 Y=0000 S=0000 U=1E1F 8E71: TSTB            ;if nothing has failed so far,
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0000 U=1E1F 8E72: BEQ   $8EC0     ;test has finished

; ROM and RAM tests have passed
; System should boot correctly if we get here

CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0000 U=1E1F 8EC0: ORCC  #$50      ;disable interrupts (FIRQ & IRQ)
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0000 U=1E1F 8EC2: LDS   #$0400    ;initialize stack pointer
CC=50 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8EC6: JSR   $91D6
CC=50 A=0000 B=0000 X=16A0 Y=0000 S=03FE U=1E1F 91D6: PSHS  A,X,Y
CC=50 A=0000 B=0000 X=16A0 Y=0000 S=03F9 U=1E1F 91D8: LDX   #$91FC
CC=58 A=0000 B=0000 X=91FC Y=0000 S=03F9 U=1E1F 91DB: LDY   ,X++
CC=50 A=0000 B=0000 X=91FE Y=2000 S=03F9 U=1E1F 91DE: BNE   $91E4
CC=50 A=0000 B=0000 X=91FE Y=2000 S=03F9 U=1E1F 91E4: CMPY  #$1800
CC=50 A=0000 B=0000 X=91FE Y=2000 S=03F9 U=1E1F 91E8: BEQ   $91EE
CC=50 A=0000 B=0000 X=91FE Y=2000 S=03F9 U=1E1F 91EA: LEAX  $1,X
CC=50 A=0000 B=0000 X=91FF Y=2000 S=03F9 U=1E1F 91EC: BRA   $91DB

CC=54 A=0000 B=0000 X=920A Y=1800 S=03F9 U=1E1F 91EE: LDA   ,X
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F9 U=1E1F 91F0: BSR   $91F4
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F7 U=1E1F 91F4: BSR   $9210
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F5 U=1E1F 9210: PSHS  A
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F4 U=1E1F 9212: LDA   #$B4
CC=58 A=00B4 B=0000 X=920A Y=1800 S=03F4 U=1E1F 9214: STA   $3FFD
CC=58 A=00B4 B=0000 X=920A Y=1800 S=03F4 U=1E1F 9217: PULS  A,PC    ;Pull registers from system stack
CC=58 A=0001 B=0000 X=920A Y=1800 S=03F7 U=1E1F 91F6: STA   $3FFE   ;write WPC_RAM_LOCKSIZE
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F7 U=1E1F 91F9: BSR   $9219   ;call/branch to subroutine
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F5 U=1E1F 9219: PSHS  A
CC=50 A=0001 B=0000 X=920A Y=1800 S=03F4 U=1E1F 921B: LDA   #$00
CC=54 A=0000 B=0000 X=920A Y=1800 S=03F4 U=1E1F 921D: STA   $3FFD
CC=54 A=0000 B=0000 X=920A Y=1800 S=03F4 U=1E1F 9220: PULS  A,PC
CC=54 A=0001 B=0000 X=920A Y=1800 S=03F7 U=1E1F 91FB: RTS

CC=54 A=0001 B=0000 X=920A Y=1800 S=03F9 U=1E1F 91F2: PULS  A,X,Y,PC  ;Pull registers from system stack
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8EC9: STB   $16C1
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8ECC: CLR   $16BC
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8ECF: CLR   $1710
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8ED2: CLR   $16BE
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8ED5: CLR   $16BF
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8ED8: CLR   $16C0
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8EDB: BRA   $8EF1
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=0400 U=1E1F 8EF1: LDS   #$169A
CC=50 A=0000 B=0000 X=16A0 Y=0000 S=169A U=1E1F 8EF5: CLRA
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=169A U=1E1F 8EF6: TFR   A,DP
CC=54 A=0000 B=0000 X=16A0 Y=0000 S=169A U=1E1F 8EF8: LDB   #$06
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=169A U=1E1F 8EFA: LDX   #$0000
CC=54 A=0000 B=0006 X=0000 Y=0000 S=169A U=1E1F 8EFD: STA   ,X+
CC=54 A=0000 B=0006 X=0001 Y=0000 S=169A U=1E1F 8EFF: STB   $3FFF   ;pet watchdog (WPC_ZEROCROSS_IRQ_CLEAR)
CC=50 A=0000 B=0006 X=0001 Y=0000 S=169A U=1E1F 8F02: CMPX  #$16A0
CC=59 A=0000 B=0006 X=0001 Y=0000 S=169A U=1E1F 8F05: BCS   $8EFD

CC=54 A=0000 B=0006 X=16A0 Y=0000 S=169A U=1E1F 8F07: JSR   $90A1
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1698 U=1E1F 90A1: PSHS  B
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1697 U=1E1F 90A3: LDB   #$3D
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1697 U=1E1F 90A5: BSR   $90A9
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1695 U=1E1F 90A9: TSTB
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1695 U=1E1F 90AA: BMI   $90B1
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1695 U=1E1F 90AC: STB   $11
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1695 U=1E1F 90AE: STB   $3FFC     ;select WPC_ROM_BANK
CC=50 A=0000 B=003D X=16A0 Y=0000 S=1695 U=1E1F 90B1: RTS

CC=50 A=0000 B=003D X=16A0 Y=0000 S=1697 U=1E1F 90A7: PULS  B,PC
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=169A U=1E1F 8F0A: JSR   $89C9
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1698 U=1E1F 89C9: LEAS  -$1,S

CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1697 U=1E1F 89CB: PSHS  CC,A,B,U
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1692 U=1E1F 89CD: LDU   $6,S
CC=58 A=0000 B=0006 X=16A0 Y=0000 S=1692 U=8F0D 89CF: PULU  A,B
CC=58 A=004D B=000D X=16A0 Y=0000 S=1692 U=8F0F 89D1: STD   $12
CC=50 A=004D B=000D X=16A0 Y=0000 S=1692 U=8F0F 89D3: LDA   ,U+
CC=50 A=0037 B=000D X=16A0 Y=0000 S=1692 U=8F10 89D5: BMI   $89F9
CC=50 A=0037 B=000D X=16A0 Y=0000 S=1692 U=8F10 89D7: CMPA  $11
CC=59 A=0037 B=000D X=16A0 Y=0000 S=1692 U=8F10 89D9: BEQ   $89F9
CC=59 A=0037 B=000D X=16A0 Y=0000 S=1692 U=8F10 89DB: STU   $6,S
CC=59 A=0037 B=000D X=16A0 Y=0000 S=1692 U=8F10 89DD: LDB   $11
CC=51 A=0037 B=003D X=16A0 Y=0000 S=1692 U=8F10 89DF: STB   $5,S
CC=51 A=0037 B=003D X=16A0 Y=0000 S=1692 U=8F10 89E1: STA   $11
CC=51 A=0037 B=003D X=16A0 Y=0000 S=1692 U=8F10 89E3: STA   $3FFC
CC=51 A=0037 B=003D X=16A0 Y=0000 S=1692 U=8F10 89E6: PULS  CC,A,B,U  ;Pull registers from system stack

CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1697 U=1E1F 89E8: JSR   [$0012]    ;TODO whats here at 0x0012 (obviously 0x4D0D)?
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1695 U=1E1F 4D0D: PSHS  B
CC=50 A=0000 B=0006 X=16A0 Y=0000 S=1694 U=1E1F 4D0F: LDB   #$F0
CC=58 A=0000 B=00F0 X=16A0 Y=0000 S=1694 U=1E1F 4D11: BSR   $4D19
CC=58 A=0000 B=00F0 X=16A0 Y=0000 S=1692 U=1E1F 4D19: PSHS  A,B
CC=58 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D1B: CMPB  #$F0
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D1D: BNE   $4D27
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D1F: CMPB  #$F0
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D21: BCS   $4D27
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D23: CMPB  #$F3
CC=59 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D25: BLS   $4D2D
CC=59 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D2D: STB   $C2
CC=59 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D2F: STB   $3FF3   ;select WPC_RAM_BANK
CC=59 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D32: CMPB  #$F0
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D34: BEQ   $4D4D
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D4D: ANDCC #$FE
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1690 U=1E1F 4D4F: PULS  A,B,PC  ;Pull registers from system stack
CC=54 A=0000 B=00F0 X=16A0 Y=0000 S=1694 U=1E1F 4D13: PULS  B,PC    ;Pull registers from system stack
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1697 U=1E1F 89EC: PSHS  CC,A
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89EE: LDA   $2,S
CC=50 A=003D B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89F0: STB   $2,S
CC=50 A=003D B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89F2: STA   $11
CC=50 A=003D B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89F4: STA   $3FFC       ;select WPC_ROM_BANK
CC=50 A=003D B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89F7: PULS  CC,A,B,PC
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=169A U=1E1F 8F10: JSR   $9CDF
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1698 U=1E1F 9CDF: JSR   $89C9
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1696 U=1E1F 89C9: LEAS  -$1,S
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89CB: PSHS  CC,A,B,U
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1690 U=1E1F 89CD: LDU   $6,S
CC=58 A=0000 B=0006 X=16A0 Y=0000 S=1690 U=9CE2 89CF: PULU  A,B
CC=58 A=0060 B=00A3 X=16A0 Y=0000 S=1690 U=9CE4 89D1: STD   $12
CC=50 A=0060 B=00A3 X=16A0 Y=0000 S=1690 U=9CE4 89D3: LDA   ,U+
CC=50 A=003D B=00A3 X=16A0 Y=0000 S=1690 U=9CE5 89D5: BMI   $89F9
CC=50 A=003D B=00A3 X=16A0 Y=0000 S=1690 U=9CE5 89D7: CMPA  $11
CC=54 A=003D B=00A3 X=16A0 Y=0000 S=1690 U=9CE5 89D9: BEQ   $89F9
CC=54 A=003D B=00A3 X=16A0 Y=0000 S=1690 U=9CE5 89F9: STU   $6,S
CC=58 A=003D B=00A3 X=16A0 Y=0000 S=1690 U=9CE5 89FB: PULS  CC,A,B,U
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1695 U=1E1F 89FD: LEAS  $1,S
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1696 U=1E1F 89FF: JMP   [$0012]     ;TODO whats here at 0x0012 (obviously 0x60A3)?
CC=54 A=0000 B=0006 X=16A0 Y=0000 S=1696 U=1E1F 60A3: LDX   $8308
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1696 U=1E1F 60A6: STX   $0320
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1696 U=1E1F 60A9: ANDCC #$FE
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1696 U=1E1F 60AB: JSR   $86E1
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1694 U=1E1F 86E1: LEAS  -$1,S
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1693 U=1E1F 86E3: PSHS  CC,A,B,X,U
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168C U=1E1F 86E5: LDU   $8,S
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168C U=60AE 86E7: PULU  X
CC=50 A=0000 B=0006 X=8001 Y=0000 S=168C U=60B0 86E9: STU   $8,S
CC=50 A=0000 B=0006 X=8001 Y=0000 S=168C U=60B0 86EB: LDD   ,X
CC=50 A=0040 B=002A X=8001 Y=0000 S=168C U=60B0 86ED: STD   $12
CC=50 A=0040 B=002A X=8001 Y=0000 S=168C U=60B0 86EF: LDA   $2,X
CC=50 A=0032 B=002A X=8001 Y=0000 S=168C U=60B0 86F1: BMI   $8713
CC=50 A=0032 B=002A X=8001 Y=0000 S=168C U=60B0 86F3: CMPA  $11
CC=59 A=0032 B=002A X=8001 Y=0000 S=168C U=60B0 86F5: BEQ   $8713
CC=59 A=0032 B=002A X=8001 Y=0000 S=168C U=60B0 86F7: LDB   $11
CC=51 A=0032 B=003D X=8001 Y=0000 S=168C U=60B0 86F9: STB   $7,S
CC=51 A=0032 B=003D X=8001 Y=0000 S=168C U=60B0 86FB: STA   $11
CC=51 A=0032 B=003D X=8001 Y=0000 S=168C U=60B0 86FD: STA   $3FFC     ;select WPC_ROM_BANK
CC=51 A=0032 B=003D X=8001 Y=0000 S=168C U=60B0 8700: PULS  CC,A,B,X,U
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1693 U=1E1F 8702: JSR   [$0012]   ;TODO whats here at 0x0012 (obviously 0x402A)?
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1691 U=1E1F 402A: JSR   $89C9
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168F U=1E1F 89C9: LEAS  -$1,S
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168E U=1E1F 89CB: PSHS  CC,A,B,U
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1689 U=1E1F 89CD: LDU   $6,S
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1689 U=402D 89CF: PULU  A,B
CC=50 A=0065 B=0036 X=09D9 Y=0000 S=1689 U=402F 89D1: STD   $12
CC=50 A=0065 B=0036 X=09D9 Y=0000 S=1689 U=402F 89D3: LDA   ,U+
CC=50 A=003B B=0036 X=09D9 Y=0000 S=1689 U=4030 89D5: BMI   $89F9
CC=50 A=003B B=0036 X=09D9 Y=0000 S=1689 U=4030 89D7: CMPA  $11
CC=50 A=003B B=0036 X=09D9 Y=0000 S=1689 U=4030 89D9: BEQ   $89F9
CC=50 A=003B B=0036 X=09D9 Y=0000 S=1689 U=4030 89DB: STU   $6,S
CC=50 A=003B B=0036 X=09D9 Y=0000 S=1689 U=4030 89DD: LDB   $11
CC=50 A=003B B=0032 X=09D9 Y=0000 S=1689 U=4030 89DF: STB   $5,S
CC=50 A=003B B=0032 X=09D9 Y=0000 S=1689 U=4030 89E1: STA   $11
CC=50 A=003B B=0032 X=09D9 Y=0000 S=1689 U=4030 89E3: STA   $3FFC     ;select WPC_ROM_BANK
CC=50 A=003B B=0032 X=09D9 Y=0000 S=1689 U=4030 89E6: PULS  CC,A,B,U
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168E U=1E1F 89E8: JSR   [$0012]   ;TODO whats here at 0x0012 (obviously 0x6536)?
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=168C U=1E1F 6536: PSHS  A,B,X,Y
CC=50 A=0000 B=0006 X=09D9 Y=0000 S=1686 U=1E1F 6538: LDX   #$5A3A
CC=50 A=0000 B=0006 X=5A3A Y=0000 S=1686 U=1E1F 653B: LDB   #$3B
CC=50 A=0000 B=003B X=5A3A Y=0000 S=1686 U=1E1F 653D: JSR   $AC64
CC=50 A=0000 B=003B X=5A3A Y=0000 S=1684 U=1E1F AC64: JSR   $9100
```

# BOOT CODE

source: https://github.com/bcd/freewpc/blob/master/platform/wpc/start.s

```
;;;
;;; Copyright 2006-2010 by Brian Dominy <brian@oddchange.com>
;;;
;;; This file is part of FreeWPC.
;;;
;;; FreeWPC is free software; you can redistribute it and/or modify
;;; it under the terms of the GNU General Public License as published by
;;; the Free Software Foundation; either version 2 of the License, or
;;; (at your option) any later version.
;;;
;;; FreeWPC is distributed in the hope that it will be useful,
;;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;;; GNU General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with FreeWPC; if not, write to the Free Software
;;; Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
;;;

#include <platform/wpc-mmap.h>

STACK_BASE     = 6133
WPC_WATCHDOG_REG = WPC_ZEROCROSS_IRQ_CLEAR
WPC_RAM_UNLOCKED = 0xB4
WPC_RAM_LOCK_2K = 0x1
; Writing a 6 here does not turn off blanking.
WPC_WATCHDOG_RESET = 0x06

; Writing 0x16 here caused the sound board to bong almost immediately.
; But the blanking LED did not go off.  The diag LED did not flicker,
; so this apparently did not enable the IRQ.
;WPC_WATCHDOG_RESET = 0x16

; This had similar effect???
;WPC_WATCHDOG_RESET = 0x86

FLASH_DELAY    = 100

PAGED_REGION   = 0x4000
PAGED_SIZE     = 0x4000
FIXED_REGION   = 0x8000
FIXED_SIZE     = 0x8000

CKSUM_REV      = 0xFFEE

	.module start.s


	; Soft registers m0-m3 can be used by GCC's register allocator
	; for functions that need lots of regs.
	; Even when this feature is not used, these fastram variables
	; are used by some of the assembler routines.
	.area direct
	.globl m0
m0: .blkb 1
	.globl m1
m1: .blkb 1
	.globl m2
m2: .blkb 1
	.globl m3
m3: .blkb 1

;;;
;;; Perform basic diagnostics to ensure that everything is
;;; more or less working.  (Diags must be in the system page
;;; since the paging hardware may be broken.)
;;; 1. Verify ROM is good first, since that ensures that this
;;; code is not corrupted somehow.  Take care NOT to use RAM
;;; at all during this stage; this is tricky and may require
;;; assembler macros.
;;;
;;; 2. Verify RAM next, using a read-write test.
;;;
;;; 3. Verify WPC ASIC functions.
;;; At any point, if something goes wrong, we go into a hard
;;; loop and pulse the diagnostic LED with a flash code to
;;; report the error.  We can't rely on the DMD working
;;; properly to help us here.
;;;

	;;;
	;;; start - reset entry point
	;;;
	.area	.text
	.globl _start
_start:
	; Disable interrupts (IRQ and FIRQ) until the system is
	; initialized.
	orcc	#0x50

	; Initialize the direct page pointer.  This hardware register
	; determines where 'direct' addressing instructions are targeted.
	; By setting to zero, direct addresses are mapped to 0000h-00FFh.
	; We can use shorter instructions when referencing variables here.
	clra
	tfr	a,dp

#ifndef FASTBOOT
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;   ROM POST DIAGNOSTIC CHECK
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
rom_test:
	; Initialize 16-bit checksum
	ldd	#0

	; Value to be periodically written to reset the watchdog
	ldu	#WPC_WATCHDOG_RESET

	; Compute checksum for fixed region (0x8000-0xFFFF).
	; TODO - it is possible to do these checks like just
	; any other bank - they can be mapped to 0x4000.
	ldx	#0x8000
fixed_loop:
	addb	,x
	adca	#0
	addb	1,x
	adca	#0
	addb	2,x
	adca	#0
	addb	3,x
	adca	#0

	exg	d,u
	stb	WPC_WATCHDOG_REG
	exg	d,u

	leax	4,x
	cmpx	#0x0000
	bne	fixed_loop

	; Compute checksum for each paged region (0x4000-0x7FFF).
	; Y is used to iterate over each bank of ROM.
	ldy	#TOP_BANK
paged_loop:
	ldx	#0x4000

	; Switch to the next bank of ROM.
	exg	d,y
	stb	WPC_ROM_BANK
	exg	d,y

	; Sum the entire bank (16KB).
paged_inner_loop:
	addb	,x
	adca	#0
	addb	1,x
	adca	#0
	addb	2,x
	adca	#0
	addb	3,x
	adca	#0
	addb	4,x
	adca	#0
	addb	5,x
	adca	#0
	addb	6,x
	adca	#0
	addb	7,x
	adca	#0

	exg	d,u
	stb	WPC_WATCHDOG_REG
	exg	d,u

	leax	8,x
	cmpx	#0x8000
	bne	paged_inner_loop
	leay	-1,y
	cmpy	#BOTTOM_BANK
	bge	paged_loop

	; Did checksum validate?
	subd	CKSUM_REV
	cmpd	#0
	beq	ram_test
rom_checksum_error:
	ldx	#1
	jmp	diag_error
#endif /* FASTBOOT */

	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;   RAM POST DIAGNOSTIC CHECK
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
ram_test:
	lda	#WPC_RAM_UNLOCKED
	sta	WPC_RAM_LOCK
	lda	#WPC_RAM_LOCK_2K
	sta	WPC_RAM_LOCKSIZE
	clr	WPC_RAM_LOCK

	ldx	#0
ram_loop:
	ldd	#0x55AA
	std	,x
	cmpd	,x
	bne	ram_error

	coma
	comb
	std	,x
	cmpd	,x
	bne	ram_error

	clra
	clrb
	std	,x
	cmpd	,x++
	bne	ram_error

	ldb	#WPC_WATCHDOG_RESET
	stb	WPC_WATCHDOG_REG

	/* TODO - upper limit hardcoded */
	cmpx	#0x1600
	blo	ram_loop
	bra	asic_test

ram_error:
	ldx	#2
	jmp	diag_error


	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;   ASIC POST DIAGNOSTIC CHECK
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
asic_test:
	/* TODO */

	;;; END OF DIAGNOSTICS

test_done:
	; Initialize the stack pointer.  We can now make
	; function calls!
1$:
	lds	#STACK_BASE
	jmp	_main   ; Jump into C code
	bra	1$

	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;; diag_error
	;;; Handles a diagnstics error by flashing the diag LED.
   ;;;
	;;; Input: X = diagnostic error code
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
diag_error:
	tfr	x,d             ; Double X
	leax	d,x

	tfr	x,u             ; Copy count to iterator U

flash_loop:
	ldb	WPC_LEDS        ; Toggle the LED
	eorb	#-128
	stb	WPC_LEDS

	ldy	#15000
outer_flash_loop:        ; Hold the LED state
	mul
	mul
	mul
	ldb	#WPC_WATCHDOG_RESET
	stb	WPC_WATCHDOG_REG
	ldb	WPC_LEDS
	stb	WPC_LEDS
	leay	-1,y
	cmpy	#0
	bne	outer_flash_loop

	leau	-1,u
	cmpu	#0
	bne	flash_loop

	ldy	#55000
delay_loop:
	; Use 'mul' instructions here because they are the
	; shortest instructions that give the longest delay.
	; The actual values computed don't matter (but
	; note that it destroys values in D).
	mul
	mul
	mul
	ldb	#WPC_WATCHDOG_RESET
	stb	WPC_WATCHDOG_REG
	leay	-1,y
	cmpy	#0
	bne	delay_loop

	tfr	x,u
	bra	flash_loop

```
