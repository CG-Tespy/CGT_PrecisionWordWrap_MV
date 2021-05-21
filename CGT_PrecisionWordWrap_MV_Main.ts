/*:
@plugindesc Wraps based on spaces and the state of the message box.
@author CG-Tespy – https://github.com/CG-Tespy
@help This is version 2.01.01 of this plugin. Tested with RMMV versions 1.5.1 and 1.6.2. 
Requires version 1.01.01+ of the CGT WordWrapCore plugin. To have this set as the wrapper
right away, set the WordWrapCore's Wrapper param to "precision".

@param MugshotWidth
@type number
@default 144
@desc How wide (in pixels) this treats mugshots as being.

@param MugshotPadding
@type number
@default 25
@desc How much space (in pixels) this treats the space between the mugshot and the text, as being.

@param SidePadding
@type number
@default 5
@desc For the message box sides, helping prevent overflow while making sure the wrapping isn't too tight.

*/

import { PrWoWr } from './PrecisionWordWrap/_Setup';

let plugin = 
{
    PrWoWr: PrWoWr,
};

Object.assign(CGT, plugin);