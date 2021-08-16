/*:
@plugindesc Wraps based on spaces and the state of the message box.
@author CG-Tespy – https://github.com/CG-Tespy
@help This is version 2.01.01 of this plugin. Tested with RMMV versions 1.5.1 and 1.6.2. 
Requires version 1.01.01+ of the CGT WordWrapCore plugin. To have this set as the wrapper
right away, set the WordWrapCore's Wrapper param to "precision".

This does not yet support desc-wrapping.

*/

import { PrWoWr } from './PrecisionWordWrap/_Setup';

let plugin = 
{
    PrWoWr: PrWoWr,
};

Object.assign(CGT, plugin);