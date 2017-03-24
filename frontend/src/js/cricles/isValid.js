import { size } from './CreateCircle';
function isValid(c, cricles) {
    if (c.r > size.max)
        return false;
    for (let i = 0; i < cricles.length; i++) {
        let c2 = cricles[i], dx = c2.x - c.x, dy = c2.y - c.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < c2.r + c.r)
            return false;
    }
    return true;
}
export default isValid;
