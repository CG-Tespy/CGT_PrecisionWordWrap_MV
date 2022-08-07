/*:
* @plugindesc Wraps based on the physical space and state of the message box.
* @author CG-Tespy – https://github.com/CG-Tespy
* @help This is version 3.01.01 of this plugin. Tested with RMMV versions 1.5.1 and 
* 1.6.2. 
* 
* Requires version 3.01.01+ of the CGT WordWrapCore plugin. To have this 
* set as the wrapper right away, set the appropriate WordWrapCore Wrapper params 
* to "precision".
* 
* Best not make this the Bubble Wrapper, though. Try it and you'll see why.
*/

/*:es
* @plugindesc Ajuste basado en el espacio físico y el estado del cuadro de diálogo.
* @author CG-Tespy – https://github.com/CG-Tespy
* @help Este es la versión 3.01.01 de este plugin. Lo probé con versiones RMMV 
* 1.5.1 y 1.6.2. 
* 
* Necesita versión 2.01.03+ del CGT WordWrapCore (Núcleo de Ajustelíneas) 
* plugin. Para poner este como el ajustelíneas activo inmediatamente, pon el
* Ajustelíneas parám del WordWrapCore como "precision".
* 
* Este aún no puede ajustar los descripciones.
* 
*/

import { PrWoWr } from './PrecisionWordWrap/_Setup';

let plugin = 
{
    PrWoWr: PrWoWr,
};

Object.assign(CGT, plugin);