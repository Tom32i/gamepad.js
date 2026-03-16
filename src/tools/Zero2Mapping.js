import Mapping from './Mapping.js';

export default class Zero2Mapping extends Mapping {
    static name = '8BitDo Zero 2';

    static Id = new RegExp('^Zero 2');

    static Buttons = [
        'B',
        'A',
        'Y',
        'X',
        'L',
        'R',
        null,
        null,
        'Select',
        'Start'
    ];

    static Axis = [
        'DPad X',
        'DPad Y',
    ];
}
