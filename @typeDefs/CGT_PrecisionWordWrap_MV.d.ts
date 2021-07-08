declare namespace CGT
{
    namespace PrWoWr
    {
        class PrecisionWordWrapper extends CGT.WWCore.WordWrapper
        {
            constructor(overflowFinder?: CGT.WWCore.WordWrapper);
        }

        class WrapParams
        {
            /** How many pixels wide we treat the mugshots as being. */
            get MugshotWidth(): number;

            /** 
             * How many pixels wide we treat the space between the mugshot and the
             * text as being.
             */
            get MugshotPadding(): number;

            /** 
             * Invisible padding on the sides of the message box, helping prevent overflow
             * while keeping the results from being too tight.
             */
            get SidePadding(): number;
        }

        let Params: WrapParams;
    }
}