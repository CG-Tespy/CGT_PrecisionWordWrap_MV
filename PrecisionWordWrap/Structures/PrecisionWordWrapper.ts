import { PrecisionOverflowFinder } from './PrecisionOverflowFinder';
import { PrecisionLineWrapper } from './PrecisionLineWrapper';

// MAY BE OBSOLETE

// Fetch dependencies
let WrapCoreShared = CGT.WWCore.Shared;
let Regexes = WrapCoreShared.Regexes;
let Strings = WrapCoreShared.Strings;
let WordWrapper = CGT.WWCore.WordWrapper;

export class PrecisionWordWrapper extends WordWrapper
{
    get WrapCode(): string { return PrecisionWordWrapper.WrapCode; }
    static get WrapCode(): string { return this.wrapCode; }
    private static wrapCode: string = "precision";

}