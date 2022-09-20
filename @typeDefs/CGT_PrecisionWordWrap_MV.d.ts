declare namespace CGT
{
    namespace PrWoWr
    {
        class PrecisionLineWrapper extends CGT.WWCore.LineWrapper {}

        class PrecisionOverflowFinder extends CGT.WWCore.Overflow.OverflowFinder 
        {
            protected RegularWrapSpace(args: WWCore.Overflow.IOverflowFindArgs): number;
            protected FullWrapSpace(args: WWCore.Overflow.IOverflowFindArgs): number;
        }

        class PrecisionTextMeasurer extends CGT.WWCore.Overflow.TextMeasurer
        {
            protected GetDefaultWidthOf(text: string, textField: Bitmap): number;
        }

        class PrecisionUnderflowCascader extends CGT.WWCore.UnderflowCascader {}

        class PrecisionWordWrapper extends CGT.WWCore.WordWrapper
        {
            constructor(overflowFinder?: CGT.WWCore.WordWrapper);
        }

    }
}