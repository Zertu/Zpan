function CreateCircle(height, width) {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: size.min
    };
}
export default CreateCircle;
export const size = {
    min: 5,
    max: 100
};
