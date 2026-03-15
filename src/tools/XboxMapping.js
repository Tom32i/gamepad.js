import Mapping from './Mapping';

export default class XboxMapping extends Mapping {
    static name = 'Xbox';

    static Id = new RegExp('^Xbox 360 Controller');

    static Buttons = [
        'A',
        'B',
        'X',
        'Y',
        'LB',
        'RB',
        'LT',
        'RT',
        'Back',
        'Start',
        'LSB',
        'RSB',
        'Up',
        'Down',
        'Left',
        'Right',
        'Home'
    ];

    static Axis = [
        'Left X',
        'Left Y',
        'Right X',
        'Right Y',
    ];
}
