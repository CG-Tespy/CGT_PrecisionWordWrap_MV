let WrapCoreShared = CGT.WWCore.Shared;
let WordWrapper = CGT.WWCore.WordWrapper;

export class PrecisionWordWrapper extends WordWrapper
{
    get WrapCode(): string { return PrecisionWordWrapper.WrapCode; }
    static get WrapCode(): string { return this.wrapCode; }
    private static wrapCode: string = "precision";

}