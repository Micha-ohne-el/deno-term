/**
  * @see https://en.wikipedia.org/wiki/C0_and_C1_control_codes#Basic_ASCII_control_codes
*/

/** Null. `^@` */
export const NUL = '\x00';
/** Start of Heading. `^A` */
export const SOH = '\x01';
/** Start of Text. `^B` */
export const STX = '\x02';
/** End of Text. `^C` */
export const ETX = '\x03';
/** End of Transmission. `^D` */
export const EOT = '\x04';
/** Enquiry. `^E` */
export const ENQ = '\x05';
/** Acknowledge. `^F` */
export const ACK = '\x06';
/** Bell, Alert. `^G` */
export const BEL = '\x07';
/** Backspace. `^H` */
export const BS = '\x08';
/** Horizontal Tab. `^I` */
export const HT = '\x09';
/** Line Feed. `^J` */
export const LF = '\x0A';
/** Vertical Tab. `^K` */
export const VT = '\x0B';
/** Form Feed. `^L` */
export const FF = '\x0C';
/** Carriage Return. `^M` */
export const CR = '\x0D';
/** Shift Out. `^N` */
export const SO = '\x0E';
/** Shift In. `^O` */
export const SI = '\x0F';
/** Data Link Escape. `^P` */
export const DLE = '\x10';
/** Device Control 1. XON. `^Q` */
export const DC1 = '\x11';
/** Device Control 2. `^R` */
export const DC2 = '\x12';
/** Device Control 3. XOFF. `^S` */
export const DC3 = '\x13';
/** Device Control 4. `^T` */
export const DC4 = '\x14';
/** Negative Acknowledge. `^U` */
export const NAK = '\x15';
/** Synchronous Idle. `^V` */
export const SYN = '\x16';
/** End of Transmission Block. `^W` */
export const ETB = '\x17';
/** Cancel. `^X` */
export const CAN = '\x18';
/** End of Medium. `^Y` */
export const EM = '\x19';
/** Substitute. `^Z` */
export const SUB = '\x1A';

/** Escape. `^[` */
export const ESC = '\x1B';
/** File Separator. `^\` */
export const FS = '\x1C';
/** Group Separator. `^]` */
export const GS = '\x1D';
/** Record Separator. `^^` */
export const RS = '\x1E';
/** Unit Separator. `^_` */
export const US = '\x1F';

/** Space. */
export const SP = ' ';

/** Delete. `^?` */
export const DEL = '\x7F';
