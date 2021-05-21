import { PrecisionOverflowFinder } from './PrecisionOverflowFinder';

// Fetch dependencies
let WrapCoreShared = CGT.WWCore.Shared;
let Regexes = WrapCoreShared.Regexes;
let Strings = WrapCoreShared.Strings;
let spaceAsSeparator = Regexes.spaceAsSeparator;
let empty = Strings.emptyString;
let singleSpace = Strings.singleSpace;
let WordWrapper = CGT.WWCore.WordWrapper;
let ArrayEx = CGT.Core.Extensions.ArrayEx;



export class PrecisionWordWrapper extends WordWrapper
{
    get WrapCode(): string { return "precision"; }

    

}