type IOverflowFindArgs = CGT.WWCore.OverflowFinding.IOverflowFindArgs;

export class PrecisionOverflowFinder extends CGT.WWCore.OverflowFinding.OverflowFinder
{
    protected GetWrapWidth(args: IOverflowFindArgs): number
    {
        let mugshotIsThere = $gameMessage.faceName() !== '';

        if (mugshotIsThere)
            return this.TightWrapWidth(args);
        else
            return this.FullWrapWidth(args);
    }

    protected TightWrapWidth(args: IOverflowFindArgs): number
    {
        let offset = this.Params.MugshotWidth + this.Params.MugshotPadding;
        return this.FullWrapWidth(args) - offset;
    }

    protected FullWrapWidth(args: IOverflowFindArgs): number
    {
        let textField = args.wordWrapArgs.textField;
        let allPadding = (this.Params.SidePadding * 2);
        return textField.width - allPadding;
    }

    protected get Params(): CGT.WWCore.CoreWrapParams { return CGT.WWCore.Params; }
}
