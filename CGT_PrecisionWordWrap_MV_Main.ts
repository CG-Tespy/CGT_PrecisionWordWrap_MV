/*:
@plugindesc Wraps based on spaces and the state of the message box.
@author CG-Tespy – https://github.com/CG-Tespy
@help This is version 0.01.01 BETA of this plugin. Tested with RMMV versions 1.5.1 and 1.6.2.

@param MugshotWidth
@type number
@default 144
@desc How wide (in pixels) this treats mugshots as being.

@param MugshotPadding
@type number
@default 25
@desc How much space (in pixels) this treats the space between the mugshot and the text, as being.
*/

import { PrWoWr } from './PrecisionWordWrap/_Setup';

let plugin = 
{
    PrWoWr: PrWoWr,
};

Object.assign(CGT, plugin);