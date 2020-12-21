declare namespace CGT
{
    namespace PrWoWr
    {
        class PrecisionWordWrapper extends CGT.WWCore.WordWrapper
        {
            constructor(overflowFinder?: CGT.WWCore.SpacialOverflowFinder);
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
        }

        let Params: WrapParams;
    }
}