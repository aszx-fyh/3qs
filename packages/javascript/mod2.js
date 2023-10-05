var mutableValue = 3;
function incMutableValue() {
    mutableValue++;
}
module.exports = {
    mutableValue: mutableValue, // (A)
    incMutableValue: incMutableValue,
};