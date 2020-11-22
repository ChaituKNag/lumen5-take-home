import TextMetrics from './text-metrics.class'

beforeEach(() => {
    TextMetrics.prototype._calculateTextWidth = jest.fn(() => 100);
    TextMetrics.prototype._calculateAscenderHeight = jest.fn(() => 200);
    TextMetrics.prototype._calculateDescenberHeight = jest.fn(() => 300);
});

test("Testing TextMetrics.class", () => {
    const fillText = jest.fn();
    const textMetrics = new TextMetrics('hello', 'Arial', {
        fillText: fillText
    });

    expect(fillText).toHaveBeenCalledTimes(1);
    expect(textMetrics.width).toBe(100);
    expect(textMetrics._calculateTextWidth).toHaveBeenCalledTimes(1);
    expect(textMetrics.ascenderHeight).toBe(200);
    expect(textMetrics._calculateAscenderHeight).toHaveBeenCalledTimes(1);
    expect(textMetrics.descenderHeight).toBe(300);
    expect(textMetrics._calculateDescenberHeight).toHaveBeenCalledTimes(1); 
})