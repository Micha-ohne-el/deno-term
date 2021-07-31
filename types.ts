export type Param = number | string;

export enum EraseDisplayMode {
  /** Erase from the cursor to the end of the screen. */
  ToEnd = 0,
  /** Erase from the cursor to the beginning of the screen. */
  ToBeginning = 1,
  /** Erase the entire screen. Might also move the cursor to (1, 1). */
  Everything = 2,
  /** Erase the entire screen and clear the scrollback buffer. */
  EverythingAndScrollback = 3
}

export enum EraseLineMode {
  /** Erase from the cursor to the end of the line. */
  ToEnd = 0,
  /** Erase from the cursor to the beginning of the line. */
  ToBeginning = 1,
  /** Erase the entire line. */
  Everything = 2
}

export enum GraphicRendition {
  Reset = 0, Normal = 0,
  Bold = 1, Intense = 1,
  Faint = 2, Dim = 2,
  /** Not widely supported. Sometimes treated as inverse or blink. */
  Italic = 3,
  Underline = 4,
  SlowBlink = 5,
  /** Not widely supported. */
  RapidBlink = 6,
  Invert = 7, ReverseVideo = 7,
  Conceal = 8, Hide = 8,
  CrossedOut = 9,
  PrimaryFont = 10, DefaultFont = 10,
  Font1 = 11,
  Font2,
  Font3,
  Font4,
  Font5,
  Font6,
  Font7,
  Font8,
  Font9,
  /** Rarely supported. */
  BlackletterFont = 20,
  /** Often treated as NotBold. */
  DoubleUnderline = 21,
  /** Neither bold nor faint. */
  NormalIntensity = 22,
  /** Neither italic nor blackletter. */
  NormalStyle = 23,
  /** Neither single nor double underline. */
  NotUnderlined = 24,
  /** Neither slow nor rapid blink. */
  NotBlinking = 25,
  /** Non-standard. */
  Proportional = 26,
  NotInverted = 27, NotReversed = 27,
  Reveal = 28,
  NotCrossedOut = 29,
  /** Usually black. */
  ForegroundColor0 = 30,
  /** Usually red. */
  ForegroundColor1,
  /** Usually green. */
  ForegroundColor2,
  /** Usually yellow. */
  ForegroundColor3,
  /** Usually blue. */
  ForegroundColor4,
  /** Usually magenta. */
  ForegroundColor5,
  /** Usually cyan. */
  ForegroundColor6,
  /** Usually white. */
  ForegroundColor7,
  SetForegroundColor = 38,
  DefaultForegroundColor = 39,
  /** Usually black. */
  BackgroundColor0 = 40,
  /** Usually red. */
  BackgroundColor1,
  /** Usually green. */
  BackgroundColor2,
  /** Usually yellow. */
  BackgroundColor3,
  /** Usually blue. */
  BackgroundColor4,
  /** Usually magenta. */
  BackgroundColor5,
  /** Usually cyan. */
  BackgroundColor6,
  /** Usually white. */
  BackgroundColor7,
  SetBackgroundColor = 48,
  DefaultBackgroundColor = 49,
  /** Non-standard. */
  NotProportional = 50,
  Framed = 51,
  Encircled = 52,
  Overlined = 53,
  /** Neither framed nor encircled. */
  NormalSurround = 54,
  NotOverlined = 55,
  /** Non-standard. */
  SetUnderlineColor = 58,
  /** Non-standard. */
  DefaultUnderlineColor = 59,
  IdeogramUnderline = 60, LineRight = 60,
  /** Rarely supported. */
  IdeogramDoubleUnderline = 61, DoubleLineRight = 61,
  /** Rarely supported. */
  IdeogramOverline = 62, LineLeft = 62,
  /** Rarely supported. */
  IdeogramDoubleOverline = 63, DoubleLineLeft = 64,
  /** Rarely supported. */
  IdeogramStress = 64,
  /** Neither single nor double Ideogram under-/overline nor stress. */
  NoIdeogram = 65,
  /** Non-standard. Almost never supported. */
  Superscript = 73,
  /** Non-standard. Almost never supported. */
  Subscript = 74,
  /** Non-standard. Almost never supported. Neither super- nor subscript. */
  NormalScript = 75,
  /** Non-standard. Usually black. */
  BrightForegroundColor0 = 90,
  /** Non-standard. Usually red. */
  BrightForegroundColor1,
  /** Non-standard. Usually green. */
  BrightForegroundColor2,
  /** Non-standard. Usually yellow. */
  BrightForegroundColor3,
  /** Non-standard. Usually blue. */
  BrightForegroundColor4,
  /** Non-standard. Usually magenta. */
  BrightForegroundColor5,
  /** Non-standard. Usually cyan. */
  BrightForegroundColor6,
  /** Non-standard. Usually white. */
  BrightForegroundColor7,
  /** Non-standard. Usually black. */
  BrightBackgroundColor0 = 100,
  /** Non-standard. Usually red. */
  BrightBackgroundColor1,
  /** Non-standard. Usually green. */
  BrightBackgroundColor2,
  /** Non-standard. Usually yellow. */
  BrightBackgroundColor3,
  /** Non-standard. Usually blue. */
  BrightBackgroundColor4,
  /** Non-standard. Usually magenta. */
  BrightBackgroundColor5,
  /** Non-standard. Usually cyan. */
  BrightBackgroundColor6,
  /** Non-standard. Usually white. */
  BrightBackgroundColor7
}

/**
  * For use as the second parameter to `selectGraphicRendition`.
*/
export enum SetColorMode {
  /** Three more parameters expected, ranging from `0` to `255`. */
  RGB = 2,
  /** One more parameter expected, ranging from `0` to `255`. */
  Indexed = 5
}
