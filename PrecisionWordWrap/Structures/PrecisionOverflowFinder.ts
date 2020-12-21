let SpacialOverflowFinder = CGT.WWCore.SpacialOverflowFinder;

export class PrecisionOverflowFinder extends SpacialOverflowFinder
{
    FindFor(text: string, line: string): boolean
    {
        let lineWidth = this.TextField.measureTextWidth(line);
        let wordWidth = this.TextField.measureTextWidth(text);
        let combinedWidth = lineWidth + wordWidth;

        let availableSpace = this.GetWrapWidth();

        return combinedWidth > availableSpace;
    }

    protected GetWrapWidth(): number
    {
        let mugshotIsThere = $gameMessage.faceName() !== '';

        if (mugshotIsThere)
            return this.TightWrapWidth();
        else
            return this.FullWrapWidth();

    }

    protected TightWrapWidth(): number
    {
        let offset = this.Params.MugshotWidth + this.Params.MugshotPadding;
        return this.FullWrapWidth() - offset;
    }

    protected FullWrapWidth(): number
    {
        return this.TextField.width;
    }

    protected get Params(): CGT.PrWoWr.WrapParams { return CGT.PrWoWr.Params; }
}