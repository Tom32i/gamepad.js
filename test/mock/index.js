import { vi } from 'vitest';
import Window  from './Window';
import Navigator  from './Navigator';
import Gamepad from './Gamepad';

const windowMock = new Window();
const navigatorMock = new Navigator();

// vi.stubGlobal('addEventListener', windowMock.addEventListener);
vi.stubGlobal('window', windowMock);
vi.stubGlobal('navigator', navigatorMock);

export function reset() {
    windowMock.reset();
    navigatorMock.reset();
}

export { Gamepad, Navigator, Window };
export const nextFrame = windowMock.animationFrame.next;
export const { connect, disconnect } = navigatorMock;
