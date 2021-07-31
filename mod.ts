export * from './ascii.ts';
export * from './types.ts';

import {
  Param,
  EraseDisplayMode,
  EraseLineMode,
  GraphicRendition
} from './types.ts';

import {ESC} from './ascii.ts';

/** Single Shift Two. */
export const SS2 = ESC + '\x8E';
/** Single Shift Three. */
export const SS3 = ESC + '\x8F';
/** Device Control String. */
export const DCS = ESC + '\x90';
/** Control Sequence Introducer. */
export const CSI = ESC + '\x9B';
/** String Terminator. */
export const ST = ESC + '\x9C';
/** Operating System Command. */
export const OSC = ESC + '\x9D';
/** Start of String. */
export const SOS = ESC + '\x98';
/** Privacy Message. */
export const PM = ESC + '\x9E';
/** Application Program Command. */
export const APC = ESC + '\x9F';

/** Move the cursor up by `amount` rows. Caps off at the top. */
export function cursorUp(amount?: Param) {return csi('A', amount);}
/** Move the cursor down by `amount` rows. Caps off at the bottom. */
export function cursorDown(amount?: Param) {return csi('B', amount);}
/** Move the cursor right by `amount` columns. Caps off at the right. */
export function cursorForward(amount?: Param) {return csi('C', amount);}
/** Move the cursor left by `amount` columns. Caps off at the left. */
export function cursorBack(amount?: Param) {return csi('D', amount);}

/** Move the cursor to the beginning of the line that is `amount` lines down. */
export function cursorNextLine(amount?: Param) {return csi('E', amount);}
/** Move the cursor to the beginning of the line that is `amount` lines up. */
export function cursorPreviousLine(amount?: Param) {return csi('F', amount);}

/** Set the cursor position to the specified column on the current row. */
export function cursorPosition(column?: Param): string;
/** Set the cursor position to the specified row and column. */
export function cursorPosition(row?: Param, column?: Param): string;
export function cursorPosition() {
  if (arguments.length === 1) {
    return csi('G', arguments[0]);
  }
  return csi('H', arguments[0], arguments[1]);
}

/**
  * Erase (part of) the screen.
  * @param mode See `EraseDisplayMode`.
*/
export function eraseDisplay(mode?: EraseDisplayMode) {
  if (mode) {
    return csi('J', mode);
  }
  return csi('J');
}

/**
  * Erase (part of) the current line.
  * @param mode See `EraseLineMode`.
*/
export function eraseLine(mode?: EraseLineMode) {
  if (mode) {
    return csi('K', mode);
  }
  return csi('K');
}

/** Scroll the screen up by `amount` lines. Newlines are added at the bottom. */
export function scrollUp(amount?: Param) {return csi('S', amount);}
/** Scroll the screen down by `amount` lines. Newlines are added at the top. */
export function scrollDown(amount?: Param) {return csi('T', amount);}

/**
  * Same as `cursorPosition`, but counts as a format effector function
  * (like CR or LF) rather than an editor function (like CUD or CNL).
  * This can lead to different handling in certain terminal modes.
*/
export function cursorPosition2(row?: Param, column?: Param) {
  return csi('f', row, column);
}

/**
  * Change the appearance of all following text.
  * @param rendition See `GraphicRendition`.
  * @param parameters Optional additional parameters, dependent on the renditon.
*/
export function selectGraphicRendition(
  rendition: GraphicRendition,
  ...parameters: Param[]
) {
  return csi('m', rendition, ...parameters);
}

/** Enable the AUX Serial Port. */
export function auxPortOn() {return csi('i', 5);}
/** Disable the AUX Serial Port. */
export function auxPortOff() {return csi('i', 4);}

/** Report cursor position by transmitting `ESC [ row ; column R`. */
export function deviceStatusReport() {return csi('n', 6);}

/**
  * Helper function for sending CSI codes.
  * Any `undefined` argument is translated to `''`.
*/
function csi(end: string, ...params: (Param | undefined)[]): string {
  return CSI + params.map(v => v ?? '').join(';') + end;
}
