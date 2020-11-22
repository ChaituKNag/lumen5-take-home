import TextMetrics from '../text-metrics.class';
import measureText from './measure-text';



test('Testing measureText', () => {
    const textMetrics = measureText('hello', 'Arial');
    expect(textMetrics).toBeDefined();
    expect(textMetrics).toBeInstanceOf(TextMetrics);
})